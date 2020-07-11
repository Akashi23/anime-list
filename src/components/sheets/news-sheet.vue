<template>
<v-container>
    <v-sheet
        min-height="100px"
        max-height="800px"
        elevation="15"
    >
        <v-card-title>
            <a :href="sheet.url">{{sheet.title}}</a>
        </v-card-title>
        <div class="d-flex flex-no-wrap justify-space-between">
            <v-avatar
                class="ma-3"
                size="200"
                tile
            >
                <v-img :src="sheet.image_url" contain></v-img>
            </v-avatar>
            
            <v-card-text class="headline font-weight-bold">
                {{sheet.intro}}
                <v-btn small :href="sheet.url">
                    read more...
                </v-btn>
            </v-card-text>
        </div>
    </v-sheet>
</v-container>
</template>

<script>
export default {
    name:'NewsSheet',
    props:['sheet'],
}
</script>

<style scoped>
a{
    text-decoration: none;
}
</style>