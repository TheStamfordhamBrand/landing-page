<script setup>
import { RouterLink, RouterView } from 'vue-router'
import LandingPage from './components/LandingPage.vue'
import Footer from './components/Footer.vue';
</script>

<template>
  <div class="relative">
    <RouterView />
    <Footer />
  </div>
</template>

<style scoped>

</style>
