export default {
  template:`
    <div> 
      <h2>这是在template里面</h2>
      <h2>{{message}}</h2>
      <button @click="btnClick">按钮</button>
      <h2>{{name}}</h2>      
    </div>
  `,
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