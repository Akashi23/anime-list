<template>
<v-container class="inspire">
    <v-app-bar
      app
      dark
      color="indigo"
    >
      <router-link to="/"><v-toolbar-title>Anime</v-toolbar-title></router-link>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn v-for="item in menu" :key="item.id" :to="item.link" flat>{{
          item.title
        }}</v-btn>
      </v-toolbar-items>
      <v-menu class="hidden-md-and-down">
        <v-toolbar-side-icon slot="activator"></v-toolbar-side-icon>
        <v-list>
          <v-list-tile v-for="item in menu" :key="item.id" >
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
            <v-divider vertical inset></v-divider> 
          </v-list-tile>
        </v-list>
      </v-menu>

  
      <!--<v-toolbar-items class="hidden-sm-and-down">
        <v-btn text>
          News
        </v-btn>
  
        <v-divider vertical></v-divider>
  
        <v-btn text>
          Catalog
        </v-btn>
  
        <v-divider vertical></v-divider>
  
      </v-toolbar-items>-->
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
      menu:[
        {
          id: 1,
          title: 'News',
          link: '/about',
        },
        {
          id: 2,
          title: 'Catalog',
          link: '/catalog',
        },
      ],
    }),
    methods:{
      menuItems() {
        return this.menu;
    }
    }
  }
</script>

<style scoped>

a{
  text-decoration: none;
  color: white;
}
</style>