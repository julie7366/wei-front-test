<template>
  <div id="main">
    这是主应用文字：点击按钮更改通信数据，打开console查看
   </br>
    <button @click="changeState('1')">修改state = 1</button>
    &nbsp;
    <button @click="changeState('2')">修改state = 2</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  methods: {
    changeView(who){
      window.history.pushState(null,who,who)
    },
    changeState(value){
      this.$actions.setGlobalState({
        mt: value
      });
    }
  }
}
</script>

<style>
#main {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>