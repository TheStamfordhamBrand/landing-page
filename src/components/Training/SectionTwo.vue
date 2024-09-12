<template>
  <section class="w-full bg-[#FFFEFE] py-[6.875rem]">
    <div class="w-[83.333%] tab:w-[90%] mx-auto">
        <h3 class="uppercase font-helveticaBlack font-[400] text-[#111111] text-[3.063rem] leading-[3.675rem] mob:text-[2.44rem] mob:leading-[2.93rem]">OUR courses</h3>
        <div class="mt-[1.5rem] grid grid-cols-2 gap-[1.5rem] tab3:grid-cols-1">
            <div class="p-[1.5rem] border border-[#8A8A8A] rounded-[44px] cursor-pointer" @click="handleOverlay">
                <div class="min-h-[20.25rem] h-full max-h-[20.25rem]">
                    <img src="../../assets/images/course1.png" alt="" class="h-full w-full object-fit">
                </div>
                <h3 class="text-[#111111] font-helveticaBlack font-[400] text-[1rem] leading-[1.875rem] mt-[1.5rem]">LAUNCH YOUR DREAM</h3>
            </div>
            <div class="p-[1.5rem] border border-[#8A8A8A] rounded-[44px] h-full">
                <div class="bg-[#FFCAB0] h-fit rounded-[20px] py-[3.06rem] px-[2.38rem] min-h-[20.25rem] relative"
                :style="{backgroundImage: `url(${bgImage})`}"
                >
                    <div>
                        <h3 class="font-[400] text-[1.56rem] leading-[1.875rem] font-helveticaBlack text-[#111111]">Coming Soon...</h3>
                        <p class="mt-4 text-[#000000] font-monte leading-[1.5rem]">Get notified when it’s here</p>
                    </div>
                    <div class="mt-[4rem] w-full">
                        <input type="email" class="p-[0.75rem] w-full rounded-[36px] font-[400] font-monte text-[1rem] text-[#545454] leading-[1.5rem]" placeholder="Email Address">
                    </div>
                    <button class="btn absolute bottom-[-8%] left-[50%]  translate-x-[-50%]">Enter</button>
                </div>
            </div>
        </div>
    </div>
    <div id="overlay" 
    class="fixed top-0 left-0 bg-[rgba(0,0,0,0.5)] w-full min-h-screen h-full backdrop-blur-sm transitionItem duration-500 transitionItem cursor-pointer grid place-items-center"
    :class="!showOverlay? 'opacity-[-1] z-[-1]': 'opacity-100 z-10'"
    @click.self="closeOverlay"
    >
    <div 
    class="top-0 left-0 transitionItem"
    :class="!showOverlay? 'opacity-[-1] z-[-1]': 'opacity-100 z-10'"
    >
        <div class=" grid place-items-center" @click="closeOverlay">
            <div class="w-[80%] h-[80vh] relative">
                <img src="../../assets/images/banner.png" alt="" class="h-full w-full object-contain">
            </div>
        </div>
    </div>
    </div>
  </section>
</template>

<script setup>

import { ref } from 'vue';
const bgImage = new URL('@/assets/images/comingSoonBG.png', import.meta.url).href;
const showOverlay = ref(false)

const handleOverlay = ()=>{
    showOverlay.value = true
}
const closeOverlay = ()=>{
    showOverlay.value = false
}

</script>

<style lang="scss" scoped>

</style>