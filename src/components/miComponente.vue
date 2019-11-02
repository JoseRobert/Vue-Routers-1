<template>
    <div>
        <h2> {{ title }} </h2>
        <!-- <img  :src="" :alt=""/> -->
    </div>
</template>

// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

<script src=".js"></script>

<script>
import {mapState, mapMutations} from "vuex";

export default {
    name: 'miComponente', // Nombre de mi componente
    propos: {   // Propiedades enviadas desde un componente Padre
        img: '',
        title: ''
    },
    components: {},     // lista de componentes hijos
    methods: {},        // Metodos locales
    data(){             // Datos locales
        return {
            var1: '',
            var2: 0
        }
    },
    computed: {
        ...mapState(['Desde Vuex.state: {} --> datos globales'])

    },
    methods: {
        ...mapMutations(['Desde Vuex.mutations{} --> funciones'])
    }
    
}
</script>
<style src=".css" scoped></style>
<style scoped>

</style>