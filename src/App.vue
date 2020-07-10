<template>
  <v-app>
    <Layout>
      <keep-alive>
      <router-view></router-view>
      </keep-alive>
    </Layout>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
    Layout: ()=> import('./components/Layout')
  },
  data(){
    return({
    })
  }
}
</script>

<style>

</style>
