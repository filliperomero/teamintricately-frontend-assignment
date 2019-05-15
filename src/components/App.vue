<template>
  <div id="app">
    <Header/>
    <router-view class="main"/>
    <Footer/>
  </div>
</template>

<script>
  import Header from './Header.vue'
  import Footer from './Footer.vue'

  export default {
    name: 'App',
    components: {
      Header,
      Footer
    }
  };
</script>

<style>

</style>
