/*
  入口js
*/

import Vue from "vue";

import App from './App.vue'
import router from './router/index'

new Vue({
  el: '#app',
  render: h => h(App),
  // component: "App", // 将App组件映射为标签
  // template: {App}   // 指定需要渲染到页面的模板，即App标签
  router
})
