import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate'

import PokemonListState from '../views/pokemon-list/states/index.js'
import PaginationState from '../components/pagination/states/index.js'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        pokemon:    PokemonListState,
        pagination: PaginationState,
    },
    plugins: [createPersistedState()]
});