<template>
  <v-app>
    <NavBar />
    <v-main class="ma-auto">
      <PokemonList />
    </v-main>
  </v-app>
</template>

<script>
import PokemonList from './views/pokemon-list/PokemonList.vue'
import NavBar from './components/navigation/NavBar.vue'

export default {
  name: 'App',

  components: {
    PokemonList,
    NavBar
  },

  data: () => ({
    //
  }),
};
</script>
