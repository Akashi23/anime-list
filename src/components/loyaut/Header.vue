<template>
<v-container class="inspire">
    <v-app-bar
      app
      dark
      color="indigo"
    >
      <router-link to="/">
        <v-toolbar-title>Anime</v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>
  
      <v-toolbar-items class="hidden-sm-and-down">
        <v-divider vertical></v-divider>
        <v-btn text to="/news">
          News
        </v-btn>
  
        <v-divider vertical></v-divider>
  
        <v-btn text to="/catalog">
          Catalog
        </v-btn>
  
        <v-divider vertical></v-divider>

      </v-toolbar-items>
    </v-app-bar>
  </v-container>
</template>

<script>
  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: false,
      hideside: false,
    }),
  }
</script>

<style scoped>
a{
  text-decoration: none;
  color: white;
}
</style>