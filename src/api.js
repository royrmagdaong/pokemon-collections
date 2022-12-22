import endpoints from './endpoints'
import axios from 'axios'

export function fetchPokemons(payload){
    return new Promise((resolve, reject) => {
        axios.get(`${endpoints.fetchPokemons}?offset=${payload.offset}&limit=${payload.limit}`)
        .then(res => { resolve(res.data)})
        .catch(err => { reject(err)} )
    })
}

export function fetchPokemonDetails(payload){
    return new Promise((resolve, reject) => {
        axios.get(`${endpoints.fetchPokemons}/${payload.name}`)
        .then(res => { resolve(res.data)})
        .catch(err => { reject(err)} )
    })
}