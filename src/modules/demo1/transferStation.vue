<template>
  <div id="cat">
    <h1>
      <a href="https://www.baidu.com">内部百度</a>
      <br>
    </h1>
    <h1><span @click="Out(url)">外部百度</span></h1>
    <h1>{{ msg }}</h1>
    <h1><a href="index.html#/base">Layout布局</a></h1>
    <br>
    <h1><a href="index.html#/column">Layout列</a></h1>
    <br>
    <h1><a href="index.html#/table1">带边框表格</a></h1>
    <br>
    <h1><a href="index.html#/button1">各种按钮</a></h1>
    <br>
    <h1><a href="index.html#/table2">固定列表格</a></h1>
  </div>
</template>

<script>
    export default {
      name: "cat",
      data() {
          return {
            msg : "I'm a little cat",
            url : "https://www.baidu.com"
          }
      },
      methods: {
        Out (e) {
          window.location.href = e
        }
      }
    }
</script>

<style scoped>

</style>
