// store.js

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({


  state: {
    title: 'Title',
    fruits: [],
    vegetables: []
  },
  mutations: {
    
    cargaFruits: function(state, data){
      console.log('mutations.cargaFruits()');
       state.fruits = data;
    },
    cargaVegetables: function(state, data){
      console.log('mutations.cargaVegetables()');
      state.vegetables = data;
    }
  },
  actions: {
    aFruits: function(state, frutas){   // Es llamada desde Vue.create
      console.log('actions.aFruits');
      state.commit('cargaFruits', frutas);
    },
    aVegetables: function(state, vegetales){  // Llamada desde el componente
      console.log('actions.aVegetables');
      state.commit('cargaVegetables', vegetales);  

    }
  },
  modules: {
  }
  
})
