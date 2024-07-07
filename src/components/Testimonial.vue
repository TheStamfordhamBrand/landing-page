<template>
    <section ref="testimonySlider" class="w-full overflow-hidden relative z-[1]">
        <div class="flex flex-nowrap transitionItem"
        :style="{transform: `translateX(-${scrollAmount * 100}%)`}"
        >
            <article class="py-[5rem] pl-[1.125rem] shrink-0 w-full" 
            :style="{ background: testimony.bg}" 
            v-for="testimony in testimonials" :key="testimony.id">
                <div class="w-[70.81%] tab2:w-[80%] flex mob:w-[95%] mob:flex-col">
                    <div>
                        <QuoteIcon 
                        class="w-[5.61rem] h-[4.90rem] tab2:w-[5rem]"
                        :style="{color: testimony.quote }"
                        />
                    </div>
                    <div class="pt-[4.88rem] mob:pt-4">
                        <h3 class="font-helveticaBlack font-[400] text-textCol text-[2.44rem] tab2:text-[2rem] leading-[2.93rem] tab2:leading-[2.5rem] mob:text-[1.94rem] mob:leading-[2.33rem]">
                            {{ testimony.comment }}
                        </h3>
                        <div class="mt-6 flex items-center gap-6 mob:w-full mob:justify-center">
                            <div class="w-[5rem] h-[5rem] tab2:w-[4rem] tab2:h-[4rem] rounded-[6.25rem] overflow-hidden">
                                <img :src="getImgUrl(testimony.src)" alt="" class="object-fit">
                            </div>
                            <div class="flex items-start gap-[0.5rem] mob:flex-col mob:gap-0">
                                <h3 class="font-[400] text-[1.56rem] text-textCol tab2:text-[1.2rem]font-helveticaBlack leading-[1.88rem] uppercase">  {{ testimony.name }},</h3> 
                                <span class="font-monte font-[400] leading-[2.34rem] text-[1.56rem] text-textCol tab2:text-[1.2rem] mob:text-[1rem] mob:leading-[1.5rem]">{{ testimony.role }}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="track w-[95%] flex gap-[0.2rem] justify-end mob:justify-center mob:mt-[3.5rem]">
                    <span class="w-[1rem] h-[1rem] rounded-[100%] block border-2 border-textCol "
                    :class="testimony.id === 1? '!border-[#E84C00] bg-[#E84C00]': 'border-textCol'"
                    ></span>
                    <span class="w-[1rem] h-[1rem] rounded-[100%] block border-2 border-textCol "
                    :class="testimony.id === 2? '!border-[#6B4F47] bg-[#6B4F47]': 'border-textCol'"
                    ></span>
                    <span class="w-[1rem] h-[1rem] rounded-[100%] block border-2 border-textCol "
                    :class="testimony.id === 3? '!border-[#584020] bg-[#584020]': 'border-textCol'"
                    ></span>
                </div>
            </article>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import QuoteIcon from "@/components/QuoteIcon.vue"

const getImgUrl = (path) => {
    return new URL(`../../public/${path}`, import.meta.url).href;
};

const testimonials = ref([
    {
        id: 1,
        bg: '#FF8C54',
        track: '#E84C00',
        quote: '#FFB08A',
        comment: ` I describe The Stamfordham Team as “brutally and honestly efficient”.  I was in the market for a logo and visual identity. The process was well structured and her team was kind, professional and thorough. I’m even looking to justify projects I can bring their way, just to go through the pleasure of working with the team and the process again.`,
        src: 'deji.png',
        name: 'DEJI HAASTRUP',
        role: 'Founder of The Scale Studio'
    },
    {
        id: 2,
        bg: '#B58577',
        track: '#6B4F47',
        quote: '#FFBBA8',
        comment: `Before we engaged The Stamfordham Brand, we were juggling so much. Working with them has been a pleasure, we simply detailed the company’s objectives from the start and the content has aligned with those goals. They are prompt with responses to feedback and have been able to tell the brand story better than we would have`,
        src: 'amanda.jpeg',
        name: 'AMANDA ETUK',
        role: 'OF MESSENGER NG'
    },
    {
        id: 3,
        bg: '#946C37',
        track: '#584020',
        quote: '#BE8A46',
        comment: `I love that The Stamfordham always takes their time to understand what their client wants before moving forward. They have an amazing eye for branding and it has been a pleasure working with them!`,
        src: 'prince.png',
        name: 'PRINCE EBONGUKO',
        role: 'OF MONTY SUITES LEKKI'
    },

])

let scrollAmount = ref(0);

const nextSlide = () => {
  scrollAmount.value = (scrollAmount.value + 1) % testimonials.value.length;
};

let slideInterval;

onMounted(() => {
  slideInterval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
});

onUnmounted(() => {
  clearInterval(slideInterval);
});
  


    
</script>

<style scoped>

</style>