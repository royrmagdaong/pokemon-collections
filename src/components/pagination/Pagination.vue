<template>
    <div>
        <v-pagination
            v-model="page_"
            :length="Math.ceil(count/limit)"
            :input="paginate()"
            :total-visible="7"
        ></v-pagination>
    </div>
</template>
  
<script>

export default {
    data: () => ({
        page_: 1,
        counter: 0
    }),
    computed:{
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
    watch:{
        page(){
            this.$root.$emit('paginate')
        }
    },
    created(){
        this.page_ = this.page
    },
    methods:{
        paginate(){
            this.$store.dispatch('pagination/set_page', this.page_)
            this.$store.dispatch('pagination/set_offset', (this.page_ * this.limit)-this.limit)
        }
    }

};
</script>
  