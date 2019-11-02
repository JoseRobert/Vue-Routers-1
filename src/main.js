//  main.vue

import Vue from 'vue'
import Vuex from 'vuex'
import App from './components/App.vue'
import router from './router/router'
import store from './store/store'
// import axios from 'axios'

Vue.config.productionTip = false

// import { mapState, mapMutations } from 'vuex';
Vuex.mapActions(['aFruits']);

new Vue({
  router,
  store,

  created: function(){
    console.log('Vue.created');
    let self = this;

    // Vuex.mapState(['fruits']);
    // Vuex.mapMutations(['cargaFruits']);

   let frutas = [
      {nombre:'Manzana', cantidad: 0},
      {nombre:'Pera', cantidad: 0},
      {nombre:'Naranja', cantidad: 0},
      {nombre:'Fresas', cantidad: 0},
      {nombre:'Melocoton', cantidad: 0}
    ];
        
    // self.$store._committing = true;                 // Configura a 'state._committing' para ser nosotros mismos 'self=this;' 
    // Vue.set(self.$store.state, 'fruits', fruits);  // Ok

    self.$store.dispatch('aFruits', frutas);        // Llamada a Vuex.Store.actions.aFruits
    

  },

  render: h => h(App)   // App.vue, es el componente principal que se renderiza dentro del index.html
}).$mount('#app')
