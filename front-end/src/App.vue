<template>
  <div id="app">
      <div id="wrapper">
          <div id="nav">
              <div class="nav-item">
                  <router-link to="/" class="nav-link" >Home</router-link>
              </div>
              <div class="nav-item">
                  <router-link to="/buy" class="nav-link">Buy</router-link>
              </div>
              <div class="nav-item">
                  <router-link to="/sell" class="nav-link">Sell</router-link>
              </div>
              <div class="nav-item-login">
                  <router-link to="/account" class="nav-link nav-login" v-if="user">Account</router-link>
                  <router-link to="/account" class="nav-link nav-login" v-else>Login</router-link>
              </div>
          </div>
          <div class="page-content">
              <router-view/>
          </div>


          <footer class="page-footer">
              <h3 class="time">16 Hours</h3>
              <a href="https://github.com/Cooltie1/Landslide.git" class="pure-button github-btn">Github</a>
          </footer>

      </div>
  </div>
</template>


<script>
import axios from 'axios';
export default {

    async created() {
        try {
            let response = await axios.get('/api/users');
            this.$root.$data.user = response.data.user;
        } catch (error) {
            this.$root.$data.user = null;
        }
    },
   computed: {
       user() {
           return this.$root.$data.user;
       }
   }
}

</script>

<style>
   /* Color Scheme */
   /*   #2f5d62
        #5e8b7e
        #a7c4bc
        #dfeeea */

body {
    font-family: 'Roboto Condensed', sans-serif;
    margin: 10px 40px 40px 40px;

}
.color1 {
    color: #2f5d62;
}
.color2 {
    color: #5e8b7e;
}
.color3 {
    color: #a7c4bc;
}
.color4 {
    color: #dfeeea;
}


#wrapper {
    min-height: 100%;
    display: flex;
    flex-direction: column;
}
.page-footer {

    background-color: #dfeeea;
    flex-shrink: 0;
    padding: 10px;
    height: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

.time {
    margin: 10px;
    font-size: 1.2em;

}
.github-btn {
    margin: 10px;
    background-color: black;
    color: white;
    font-weight: bold;
    font-size: 1.2em;
}

#nav {
    height: 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    flex-shrink: 0;
}
.page-content {
    flex-grow: 1;
    margin-top: 20px;
    margin-bottom: 20px;
}

.nav-item {
    width: 100px;
    text-align: center;
    font-size: 1.5em;
    border-bottom: 3px solid white;

}
.nav-item:hover {
    border-bottom: 3px solid #5e8b7e;
}
.nav-item:active {
    border-bottom: 3px solid #5e8b7e;
}
.nav-link {
    text-decoration: none;
    color: black;
}
.nav-item-login {
    width: 100px;
    border-radius: 10px;
    background-color: #2f5d62;
    text-align: center;
    font-size: 1.5em;
    border-bottom: 3px solid white;
}

.nav-item-login:hover {
    background-color: #5e8b7e;
}
.nav-item-login:active {
    background-color: #5e8b7e;

}
.nav-login {
    color: white;
}



</style>
