<template>
    <v-main v-if="top != null">
        <h1 class="d-flex justify-center mb-6 category-name">Top 50</h1>
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
        <br>
        <h1 class="d-flex justify-center mb-6 category-name">Upcoming 50</h1>
        <br>
        <v-container fluid>
            <v-row>
                <v-col
                    v-for="card in upocomingcards"
                    :key="card.mal_id"
                >
                    <HomeCardUpcoming v-bind:card='card'/>
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</template>

<script>
import axios from 'axios'
export default {
    name:'Home',
    components:{
        HomeCardTop: ()=> import('../cards/home-card-top'),
        HomeCardUpcoming: ()=> import('../cards/home-card-upcoming'),
    },
    props: [],
    data(){
        return({
            top: null,
            upcoming: null,
        })
    },
    mounted () {
        axios
        .get('https://api.jikan.moe/v3/top/anime/1/upcoming')
        .then(response => (this.upcoming = response));

        axios
        .get('https://api.jikan.moe/v3/top/anime/1')
        .then(response => (this.top = response));
    },
    methods:{
    },
    computed:{
        upocomingcards: function(){
            return this.upcoming.data.top;
        },
        topcards: function(){
            return this.top.data.top;
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