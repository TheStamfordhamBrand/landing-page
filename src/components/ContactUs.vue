<template>
  <section class="w-full bg-[#FFFEFE] py-[7.56rem] mob:py-[4.75rem]">
    <div class="w-[85%] tab:w-[90%] mx-auto bg-[#000000] rounded-[1.25rem] pt-[6.38rem] pb-[3.56rem] mob:pt-[4.94rem]">
        <div class="w-[48.94%] mob:w-[90%] tab2:w-[60%] mx-auto text-center flex flex-col gap-4 mb-[3.44rem]">
            <h3 class="font-helveticaBlack font-[400] text-[2.44rem] text-textCol leading-[2.93rem]">Ready to <span class="font-nauticaBold font-[450] text-primary">Elevate</span> Your Brand?</h3>
            <p class="font-monte font-[400] text-[1rem] text-[#E8E3DD] leading-[1.5rem] w-[80%] mx-auto">Book a call with us today and discover how we can help your brand thrive.</p>
            <button class="btn w-[30%] mob:w-[50%] mx-auto">
              <a href="https://calendly.com/contactstamfordham/discoverycall" target="_blank">
                Book a call
              </a>
            </button>
        </div>
        <div class="w-full">
            <div class="logoSlider w-full mx-auto flex gap-5 overflow-x-auto items-center no-scrollbar" ref="logoSlider">
          <div 
            class="flex justify-center items-center shrink-0 basis-[18%] tab2:basis-[30%] mob:basis-[100%] border-8 border-[#545454] w-[21.88rem] h-[47.38rem] rounded-[0.92rem] overflow-hidden" 
            v-for="clip in eventClips" 
            :key="clip.id"
            :data-id="clip.id"
          >
            <video :src="getImgUrl(clip.src)" autoplay muted loop class="h-full w-full object-cover"></video>
          </div>
        </div>
        </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

const eventClips = [
  {
    id: 1,
    src: 'Reel1.mp4'
  },
  {
    id: 2,
    src: 'Reel2.mp4'
  },
  {
    id: 3,
    src: 'Reel3.mp4'
  },
  {
    id: 4,
    src: 'Reel4.mp4'
  },
  {
    id: 6,
    src: 'Reel6.mp4'
  },
  {
    id: 7,
    src: 'Reel7.mp4'
  },
]

const getImgUrl = (path) => {
    return new URL(`../../public/${path}`, import.meta.url).href;
};

let scrollAmount = 0
const logoSlider = ref(null)

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
  const intervalId = setInterval(()=>autoScroll(0.4, logoSlider), 10)

  onUnmounted(()=>{
    clearInterval(intervalId)
  })
})

</script>

<style scoped>

</style>