<template>
  <div>
    <h2 class="helo">我是cpn组件的标题</h2>
    <p>我是cpn组件的内容。</p>
    <h2 class="helo">{{name}}</h2>
  </div>
</template>

<script>
export default {
  name: "Cpn",
  data(){
    return {
      name: 'cpn组件的name'
    }
  }
}
</script>

<style scoped>
  .helo {
    color: blue;
  }
</style>