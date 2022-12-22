export default {
    namespaced: true,
    state: {
        limit: 5,
        offset: 0,
        page: 1,
        counts: 41
    },
    mutations: {
        set_limit(state, payload){
            state.limit = payload
        },
        set_offset(state, payload){
            state.offset = payload
        },
        set_page(state, payload){
            state.page = payload
        },
        set_count(state, payload){
            state.counts = payload
        }
    },
    getters: {
        get_limit : state => state.limit,
        get_offset : state => state.offset,
        get_page : state => state.page,
        get_count : state => state.counts,
    },
    actions: {
        set_limit({commit}, payload){
            commit('set_limit', payload)
        },
        set_offset({commit}, payload){
            commit('set_offset', payload)
        },
        set_page({commit}, payload){
            commit('set_page', payload)
        },
        set_count({commit}, payload){
            commit('set_count', payload)
        }
    }
}