<template>
  <div id="app">
    <img src="../../assets/logo.png">
    <router-view></router-view>
    <a href="cell.html">跳转都页面</a>
    <div>github : https://github.com/JaneSu/multiple-vue-page#%E6%89%93%E5%8C%85%E5%90%8E%E7%9A%84%E8%B5%84%E6%BA%90%E8%B7%AF%E5%BE%84</div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang='scss'>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
