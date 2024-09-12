<template>
    <NavBar />
    <Header />
     <About />
     <Services />
     <Testimonial />
     <FAQ />
     <ContactUs />
   </template>
   
   <script setup>
   import { computed, onMounted, onUnmounted, ref } from 'vue';
   import NavBar from '@/components/NavBar.vue';
   import Slider from "@/components/Slider.vue"
   import Header from "@/components/Header.vue"
   import About from '@/components/About.vue';
   import Services from '@/components/Services.vue';
   import Testimonial from "@/components/Testimonial.vue"
   import FAQ from '@/components/FAQ.vue';
   import ContactUs from '@/components/ContactUs.vue';
   
   
   
   const getImgUrl = (path) => {
       return new URL(`../../public/MotionGraphics/${path}`, import.meta.url).href;
   };
   
   </script>
   
   <style  scoped>
     
   </style>