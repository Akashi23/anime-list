<template>
    <v-card
      class="mx-auto"
      max-width="300"
      height="430"
    >
    <a :href="card.url">
      <v-img 
        :src="card.image_url"
        height="200px"
      ></v-img>
    </a>

    
      <v-card-title>
        <a :href="card.url">{{card.title}}</a>
      </v-card-title>
    

      <v-card-subtitle class="font">
        {{card.type}}
      </v-card-subtitle>
      <v-card-text class="card-footer font" v-if="card.start_date != null">
        Coming soon by {{card.start_date}}
      </v-card-text>
      <v-card-text class="card-footer font" v-else>
        Release date Unknown
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
  top: 380px;

}
.font{
  color:gray;
  font-size: 16px;
}
a{
  text-decoration: none;
}

</style>