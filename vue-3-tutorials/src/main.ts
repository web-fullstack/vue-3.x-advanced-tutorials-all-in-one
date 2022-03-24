import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

// cdn & vue 3
// const app = Vue.createApp({
//   data() {
//     return {
//       cart: [],
//       ...
//     }
//   },
//   methods: {
//     updateCart() {
//       this.cart += 1
//     }
//   }
// })

// cdn & vue 2
// var app = new Vue({
//   el: '#app',
//   data: {
//     premium: true,
//     cart: []
//   },
//   methods: {
//     updateCart(id) {
//       this.cart.push(id)
//     }
//   }
// })