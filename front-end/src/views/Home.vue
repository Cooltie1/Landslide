<template>
  <div class="bgimg ">
     <div class=" textAlign">
    <h1 class="w3-jumbo w3-animate-top">Landslide</h1>
    <hr class="w3-border-grey" style="margin:auto;width:60%">
    <br>
    <router-link to="/buy" class="nav-link w3-large w3-center">Buy Land </router-link>
    <router-link to="/sell" class="nav-link w3-large w3-center">Sell Land</router-link>

  </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {

  }
}
</script>

<style scoped>
.textAlign {
    text-align: center;
}

.bgimg {
  min-height: 100%;
  height: 500px;
  background-color: #a7c4bc;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-link:hover, .nav-link:active {
    color: #2f5d62;
}

</style>
