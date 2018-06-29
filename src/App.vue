<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <!--<h1>salasuotehgio</h1>-->
    <router-view/>
    <!--<br/>-->
    <!--<br/>-->
    <!--<br/>-->
    <!--<br/>-->
    <!--<br/>-->
    <!--<br/>-->
    <!--<hr>-->
    <!--<h1><a href="index.html#/transferStation" id="jump">跳转至中转站</a></h1>-->
  </div>
</template>

<script>
export default {
  name: 'test'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
  height: 100%;
}
  #jump {
    color: red;
  }
</style>
