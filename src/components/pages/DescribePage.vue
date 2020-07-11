<template>
<v-main>
    <v-container  v-if="info != null">
        <v-sheet
            min-height="400px"
            elevation="15"
        >
            <v-card-title class="headline">
                {{info_page.title}}
                
            </v-card-title>
            <v-row>
                <v-col cols="3">
                    <v-avatar
                        class="ma-3"
                        size="250"
                        tile
                    >
                        <v-img :src="info_page.image_url"></v-img>
                    </v-avatar>
                </v-col>
                <v-col>
                    hello
                </v-col>
            </v-row>
            <v-card-subtitle class="subtitle">
                Synopsis
            </v-card-subtitle>
            <v-card-text class="font-weight-bold">
                {{info_page.synopsis}}
            </v-card-text>
        </v-sheet>
    </v-container>
</v-main>
</template>

<script>
import axios from 'axios'
export default {
    name:'Home',
    components:{
    },
    props: [],
    data(){
        return({
            info: null,
            api: 'http://api.jikan.moe/v3/anime/1',
        })
    },
    mounted () {
        axios
        .get(this.api)
        .then(response => (this.info = response));
    },
    methods:{
    },
    computed:{
        info_page: function(){
            return this.info.data;
        }
    }
}
</script>


<style scoped>
a{
    text-decoration: none;
}
.title{
    font-size: 36px;
}
.subtitle{
    font-size: 16px;
}
</style>