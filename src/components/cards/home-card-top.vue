<template>
    <v-card 
      class="mx-auto"
      width="240"
      height="500px"
    > 
    <a :href="card.url">
     <v-img
        :src="card.image_url"
        height="300px"
        contain
      ></v-img>
    </a>

    
      <v-card-title>
        <a :href="card.url">{{card.title}}</a>
      </v-card-title>
    
      <v-card-subtitle>
        {{card.type}}
      </v-card-subtitle>
      <v-card-text class="card-footer">
        <v-row>
          <v-col cols="7">Episodes {{card.episodes}}</v-col>
          <v-col cols="5">{{card.start_date}}</v-col>
        </v-row>
      </v-card-text>
  
    </v-card>
</template>

<script>
export default {
    name: 'card-home',
    props:['card'],
    data: () => ({
        show: false,
    }),
}
</script>

<style scoped>
.card-footer{
  position: absolute;
  display: block;
  top: 450px;
  /*font*/
  color:gray;
  font-size: 16px;
}
a{
  text-decoration: none;
}
</style>