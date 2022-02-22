import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'; //Importa o módulo Vue-Resource que baixamos para esse projeto.

Vue.use(VueResource); // Depois de importar, tem que mandar o Vue usar o módulo importado.

new Vue({
  el: '#app',
  render: h => h(App)
})
