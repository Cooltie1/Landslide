<template>
  <div id="app">
      <div id="wrapper">
          <div id="nav">
              <div class="nav-item">
                  <router-link to="/" class="nav-link">Home</router-link>
              </div>
              <div class="nav-item">
                  <router-link to="/Buy" class="nav-link">Buy</router-link>
              </div>
              <div class="nav-item">
                  <router-link to="/Sell" class="nav-link">Sell</router-link>
              </div>
              <div class="nav-item-login">
                  <router-link to="/Login" class="nav-link nav-login">Login</router-link>
              </div>
          </div>
          <div class="page-content">
              <router-view/>
          </div>


          <footer class="page-footer"></footer>

      </div>
  </div>
</template>

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
#wrapper {
    min-height: 100%;
    display: flex;
    flex-direction: column;
}
.page-footer {
    height: 100px;
    background-color: #dfeeea;
    flex-shrink: 0;
}
#nav {
    height: 40px;
    border-bottom: 1px solid green;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    flex-shrink: 0;
}
.page-content {
    flex-grow: 1;
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
