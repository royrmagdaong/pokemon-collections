<template>
    <div>
        <v-row class="mt-2">
            <v-col cols="12" sm="6" md="4" v-for="(pokemon, index) in pokemons" :key="index">
                <PokemonListItem :pokemon="pokemon"/>
            </v-col>
        </v-row>
        <Pagination class="my-10"/>
    </div>
</template>
  
<script>
import PokemonListItem from '../../components/pokemon-list-item/PokemonListItem.vue'
import Pagination from '../../components/pagination/Pagination.vue'

export default {
    components:{
        PokemonListItem,
        Pagination
    },
    data: () => ({
        //
    }),
    computed:{
        pokemons(){
            return this.$store.getters['pokemon/get_pokemons']
        },
        page(){
            return this.$store.getters['pagination/get_page']
        },
        offset(){
            return this.$store.getters['pagination/get_offset']
        },
        limit(){
            return this.$store.getters['pagination/get_limit']
        },
        count(){
            return this.$store.getters['pagination/get_count']
        }
    },
    created(){
        this.fetchPokemons()
        // watch for call from other component
        this.$root.$on('paginate',()=>{
            this.fetchPokemons()
        })
    },
    methods:{
        fetchPokemons(){
            this.$store.dispatch('pokemon/set_pokemons', {limit: this.limit, offset: this.offset}).then(({count})=>{
                this.$store.dispatch('pagination/set_count', count)
                this.$store.dispatch('pagination/set_offset', (this.page * this.limit)-this.limit)
            })
        }
    }
};
</script>
  