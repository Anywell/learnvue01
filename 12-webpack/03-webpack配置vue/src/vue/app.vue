<template>
  <div>
    <h2>{{message}}</h2>
    <h2>{{name}}</h2>
    <Cpn></CPn>
  </div>
</template>

<script>

// 导入cpn组件
import Cpn from './Cpn.vue'
export default {
  name: "app",
  components: {
    Cpn
  },
  data() {
    return{
      message: 'Hello Webpack',
      name: 'Kobe Bryant'
    }
  },
  methods: {
    btnClick() {
    }
  }
}
</script>

<style scoped>

  .title {
    color: red;
  }
</style>