import {
    fetchPokemons,
    fetchPokemonDetails
} from '../../../api'

export default {
    namespaced: true,
    state: {
        pokemons: [],
    },
    mutations: {
        set_pokemons(state, payload){
            state.pokemons = payload
        }
    },
    getters: {
        get_pokemons : state => state.pokemons,
    },
    actions: {
        set_pokemons({commit}, payload){
            return new Promise((resolve, reject) => {
                fetchPokemons(payload).then(res => {
                    const pokemons = [];

                    res.results.forEach(element => {
                        fetchPokemonDetails({name: element.name}).then(res => {
                            pokemons.push({
                                name: element.name,
                                weight: res.weight,
                                imageURL: res.sprites.other.dream_world.front_default,
                                abilities: res.abilities
                            })
                        }).catch(err => { reject(err) })
                    });
                    commit('set_pokemons', pokemons)

                    resolve(res)
                }).catch(err => { reject(err) })
            })
        }
    }
}