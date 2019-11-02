// Fruits.vue  

<template>
  <div class="fruits">
    <h1>This is an Fruits page</h1>
    <table class="table table-striped table-bordered table-hover mt-3">
          <thead class1='rounded-top'>
              <tr>
                  <th>Name</th>
                  <th>Quantity</th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="(fruit, index) of fruits" :key='fruit.id'>
                  <td>{{ fruit.nombre }}</td>
                  <td>{{ fruit.cantidad }}</td>
              </tr>
          </tbody>
      </table>
  </div>

</template>

<script>
console.log('Fruits.vue');

// import Vuex from 'vuex';
import { mapState, mapMutations, mapActions } from 'vuex';

    // Vuex.mapState(['fruits']);
export default {
  name: 'fruits',
  computed: {
    ...mapState(['fruits'])
  },
  
  created: function(){
    console.log('Fruits.created');
  },
  mounted: function(){
    console.log('component-Fruits.mounted');
   
    // console.log(fruits);
  }

}
</script>


<style scoped>
.fruits {
  background-color: #40c8ae80;
  width: 85%;
  height: 100%;
  /* text-align: center; */
}
</style>
