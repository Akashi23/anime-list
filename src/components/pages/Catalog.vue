<template>
    <v-main v-if="top != null">
        <h1 class="d-flex justify-center mb-6 category-name">Catalog</h1>
        <v-container fluid>
            <v-row>
                <v-col 
                    v-for="card in topcards"
                    :key="card.mal_id"
                    
                >
                    <HomeCardTop v-bind:card='card'/>
                </v-col>
            </v-row>
        </v-container>
        <div class="text-center">
            <v-container>
                <v-row justify="center">
                <v-col cols="8">
                    <v-container class="max-width">
                    <v-pagination
                        v-model="page"
                        class="my-4"
                        :length="15"
                    ></v-pagination>
                    </v-container>
                </v-col>
                </v-row>
            </v-container>
        </div>
    </v-main>
</template>

<script>
import axios from 'axios'
export default {
    name:'Home',
    components:{
        HomeCardTop: ()=> import('../cards/home-card-top'),
    },
    props: [],
    data(){
        return({
            top: null,
            page: 1,
            api: 'https://api.jikan.moe/v3/top/anime/',
            loading: true,
        })
    },
    updated () {
        axios
        .get(this.api_page)
        .then(response => (this.top = response));
    },
    mounted () {
        axios
        .get(this.api_page)
        .then(response => (this.top = response));
    },
    methods:{
    },
    computed:{
        topcards: function(){
            return this.top.data.top;
        },
        api_page: function(){
            return this.api.concat('', this.page)
        }
        
    }

}
</script>

<style scoped>
.category-name{
    font-family:Arial, Helvetica, sans-serif;
    font-size: 54px;
    color: rgb(29, 144, 216);
}
</style>