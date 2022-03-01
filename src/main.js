import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'; //Importa o módulo Vue-Resource que baixamos para esse projeto.
import VueRouter from 'vue-router'; //Importa o módulo Vue-Router que baixamos para esse projeto.
import { routes } from './routes';

Vue.use(VueResource); // Depois de importar, tem que mandar o Vue usar o módulo importado.
Vue.use(VueRouter);

const router = new VueRouter({ 
  routes,
  mode: 'history' 
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
