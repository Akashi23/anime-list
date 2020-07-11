<template>
    <v-main >
        <v-container v-if="news != null">
            <v-row v-for="sheet in news_sheets" :key="sheet.id">
                <NewsSheet class="d-flex justify-center" v-bind:sheet="sheet"/>
            </v-row>
        </v-container>
        <v-container v-else>
            <h1> Error</h1>
        </v-container>
    </v-main>
</template>

<script>
import axios from 'axios'
export default {
    name:'News',
    components:{
        NewsSheet: ()=> import('../sheets/news-sheet')
    },
    data(){
        return({
            news: null,
            page: 1,
        })
    },
    mounted () {
        axios
        .get('https://api.jikan.moe/v3/anime/1/news')
        .then(response => (this.news = response));
    },
    computed:{
        news_sheets: function(){
            return this.news.data.articles;
        },
    }
}
</script>