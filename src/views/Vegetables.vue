// Vegetables.vue

<template>
  <div class="vegetables">
    <h1>This is an Vegetable page</h1>
       <table class="table table-striped table-bordered table-hover mt-3">
          <thead class1='rounded-top'>
              <tr>
                  <th>Name</th>
                  <th>Quantity</th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="(vegetable, index) of vegetables" :key='vegetable.id'>
                  <td>{{ vegetable.nombre }}</td>
                  <td>{{ vegetable.cantidad }}</td>
              </tr>
          </tbody>
      </table>
  </div>
</template>

<script>
console.log('Vegetables.vue');

import { mapState, mapMutations, mapActions } from 'vuex';

// Vuex.mapState(['vegetables']);
// Vuex.mapActions(['aVegetables']);
// Vuex.mapMutations(['cargaVegetables']);

export default {
  name: 'vegetables',
  computed: {
    ...mapState(['vegetables']),
    enviaVegetables(){
      
    }
  },
  methods: {
    ...mapMutations(['cargaVegetables']),

    metodo1: function({commit}, datos){
      console.log('metodo1()');
      // console.log(datos);
      this.$store.commit('cargaVegetables', datos);
      
    }

  },
  // Hooks
 created: function(){
    console.log('Vegetables.created');
    let vegetales = [
      {nombre:'Lechuga', cantidad: 0},
      {nombre:'Maiz', cantidad: 0},
      {nombre:'Zanahoria', cantidad: 0},
      {nombre:'Esparragos', cantidad: 0}
    ];
    this.metodo1(vegetales)
    // $store.dispatch('aVegetables', vegetales); 
    //dispatch('aVegetables', vegetales); 
    // commit('cargaVegetables', vegetales);

  },
  mounted: function(){
    console.log('component-Vegetables.mounted');

  }
}
</script>

<style scoped>
    .vegetables {
        background-color: #93b3d4;
        width: 85%;
          text-align: center;
    }

</style>
