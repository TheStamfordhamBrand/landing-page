<template>
    <header id="hero" 
    class="bg-cover mob:bg-center bg-no-repeat h-auto w-full py-4 top-0"
    :style="{backgroundImage: `url(${bgImage})`}"
    >
   <section class="w-[72.57%] tab:w-[90%] mx-auto text-center">
    <div class="flex flex-col items-center gap-[1.5rem] mob:w-full mx-auto mt-[7rem] tab:mt-[10rem]">
      <h1 
      data-aos="fade-up"
      data-aos-duration="1000"
       class="font-helveticaBlack font-[400] text-[3.81rem] leading-[4.58rem] text-textCol mob:text-[2.44rem] mob:leading-[2.93rem]">Empowering <span class="font-nauticaBold font-[450] text-primary">Brands,</span> Elevating Stories</h1>
      <p 
      data-aos="fade-up"
      data-aos-delay="500"
     data-aos-duration="2500"
      class=" w-[70.53%] mob:w-full mx-auto font-monte font-[400] text-offWhite text-[1.56rem] mob:text-[1rem] leading-[2.34rem] mob:leading-[1.5rem]">Discover Creative Solutions, Distinguished Branding, and Bespoke Storytelling for Busy Business Owners</p>
      <div class="w-full flex justify-center"> 
        <button 
        data-aos="fade-up"
        data-aos-delay="1000"
       data-aos-duration="3000"
        class="btn">
          <a href="https://calendly.com/contactstamfordham/discoverycall" target="_blank">
            Book a call
          </a>
      </button>
      </div>
    </div>
   </section>

   <section class="w-[72.57%] mob:w-[90%] mx-auto text-center mt-[8rem] mb-[4.5rem]">
      <h3 class="font-monte font-[400] text-[#E6E6E6] text-[0.8rem] leading-[1.22rem] mb-[0.75rem]">
          Trusted by diverse portfolio of clients including
      </h3>
      <div class="w-[90%] mob:w-full mx-auto">
        <div class="logoSlider w-full mx-auto flex gap-5 overflow-x-auto items-center no-scrollbar" ref="logoSlider1">
          <div 
            class="flex justify-center items-center shrink-0 basis-[18%] tab2:basis-[30%]" 
            v-for="image in duplicatedLogos" 
            :key="image.id"
            :style="{ height: logoHeight, width: logoWidth }"
          >
            <img :src="getImgUrl1(image.src)" alt="Image Logo" class="h-full object-contain block" loading="lazy">
          </div>
        </div>
        <!-- <Slider :images="duplicatedLogos" :height="logoHeight" :width="logoWidth" :speed="logoSpeed"/> -->
      </div>
    </section>

    <section>
      <div class="w-full mb-5">
        <Slider :images="duplicatedEventsOne" :height="eventOneHeight" :width="eventOneWidth" :speed="eventOneSpeed" :basis="basis"/>
      </div>
      <div class="w-full">
        <SliderReverse :images="duplicatedEventsTwo" :height="eventOneHeight" :width="eventOneWidth" :speed="eventTwoSpeed" />
      </div>
    </section>
  </header>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref , nextTick} from 'vue';
import Slider from "@/components/Slider.vue"
import SliderReverse from '@/components/SliderReverse.vue';

const bgImage = new URL('@/assets/images/bg1.webp', import.meta.url).href;

import AOS from 'aos';

onMounted(() => {
  nextTick(() => {
    AOS.refresh();
  });
});

const logos = [
 {
  id: 1,
  src: 'ibom.png'
 },
 {
  id: 2,
  src: 'africanRoom.png'
 },
 {
  id: 3,
  src: 'ibomAitw.png'
 },
 {
  id: 4,
  src: 'ameTravel.png'
 },
 {
  id: 5,
  src: 'emergingAfrica.png'
 },
 {
  id: 6,
  src: 'unik.png'
 },
 {
  id: 7,
  src: 'monty.png'
 },
 {
  id: 8,
  src: 'fotoula.png'
 },
 {
  id: 9,
  src: 'fashionVerse.png'
 },
 {
  id: 10,
  src: 'messenger.png'
 },
]

const eventsRowOne = [
  {
    id:1,
    src: 'event1.png'
  },
  {
    id:2,
    src: 'event2.png'
  },
  {
    id:3,
    src: 'event3.png'
  },
  {
    id:4,
    src: 'event4.png'
  },
  {
    id:5,
    src: 'event5.png'
  },
]

const logoHeight = '3rem'
const logoWidth = '5rem'
const eventOneHeight = 'auto'
const eventOneWidth = 'auto'
const eventOneSpeed = 0.5
const eventTwoSpeed = 0.5
const basis = '80%'


const duplicatedLogos = computed(()=>[...logos, ...logos])

const duplicatedEventsOne = computed(()=>[...eventsRowOne, ...eventsRowOne])

const eventsRowTwo = [
  {
    id:1,
    src: 'ss1.png'
  },
  {
    id:2,
    src: 'ss2.png'
  },
  {
    id:3,
    src: 'ss3.png'
  },
  {
    id:4,
    src: 'ss4.png'
  },
  {
    id:5,
    src: 'ss5.png'
  },
  {
    id:6,
    src: 'ss6.png'
  },
  {
    id:7,
    src: 'ss7.png'
  },
  {
    id:8,
    src: 'ss8.png'
  },
]

const duplicatedEventsTwo = computed(()=>[...eventsRowTwo, ...eventsRowTwo])

const getImgUrl1 = (path) => {
    return new URL(`../../public/${path}`, import.meta.url).href;
};

let scrollAmount = 0
const logoSlider1 = ref(null)

const autoScroll = (num, element)=>{
  const slider = element.value
  const maxScrollLeft = slider.scrollWidth - slider.clientWidth

  if(scrollAmount >= maxScrollLeft){
    scrollAmount = 0
  } else {
    scrollAmount += num
  }
  slider.scrollLeft = scrollAmount
}

onMounted(()=>{
  const intervalId1 = setInterval(()=>autoScroll(0.3, logoSlider1), 10)

  onUnmounted(()=>{
    clearInterval(intervalId1)
  })
})
   
</script>

<style lang="scss" scoped>

</style>