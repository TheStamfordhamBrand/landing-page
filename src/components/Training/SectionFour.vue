<template>
    <section class="background pb-[7rem] pt-[2.5rem] tab:pt-0">
        <div class="w-[83.333%] tab:w-[90%] mx-auto">
            <div class=" w-full flex justify-center mb-[3rem]">
                <h1 class="flex items-center font-helveticaBlack uppercase text-[3.81rem] leading-[4.58rem] font-[400] text-[#000000] tab3:text-[2rem] mob:text-[1.5rem] mob:leading-[2.93rem]">L<span class="mob:w-[1.5rem] tab3:w-[2rem]">
                    <img src="../../assets/images/rocket.png" alt="" class="w-full">
                </span>
                    UNCH YOUR DREAM</h1>
            </div>
            <div>
                <article 
                class="grid grid-cols-2 tab3:grid-cols-1 justify-between items-center border-t border-[#FF8C54] py-[2.5rem] tab3:pt-[5.5rem] pl-[3rem] tab3:pl-0"
                v-for="item in points"
                :key="item"
                >
                    <div class="relative">
                        <div 
                        class="absolute left-[-10px]"
                        :class="item.top"
                        >
                            <img :src="getImgUrl(item.src)" alt="">
                        </div>
                        <h1 class="font-[400] font-helveticaBlack text-[#000000] text-[2.44rem] leading-[2.93rem] tab3:text-[1.44rem] pl-4">{{ item.title }}</h1>
                    </div>
                    <div class="flex flex-col gap-[0.75rem]">
                        <div 
                        class="flex items-center gap-[0.5rem]"
                        v-for="point in item.answers"
                        >
                            <div class="w-[19px] h-[19px]">
                                <CheckTag />
                            </div>
                            <h3 class="font-[1rem] font-monte text-[1rem] leading-[1.5rem]">{{ point }}</h3>
                        </div>
                       
                    </div>
                </article>
            </div>
        </div>

    </section>
</template>

<script setup>
import CheckTag from '@/components/icons/CheckTag.vue';

const getImgUrl = (path) => {
    return new URL(`../../../public/${path}`, import.meta.url).href;
};

const points = [
    {
        src: 'question.png',
        title: 'WHO IT’S FOR',
        answers: [
            'Aspiring social media professionals',
            'Marketing enthusiasts ready to take the leap',
            'Entrepreneurs seeking to dominate the digital space'
        ],
        top: 'top-[-40px]'
    },
    {
        src: 'book.png',
        title: 'KEY TAKEAWAYS',
        answers: [
            'A comprehensive blueprint for launching your media agency',
            'Insider knowledge from industry veterans at The Stamfordham Brand',
            'Practical skills in client acquisition, pricing, and agency management',
            'Cutting-edge strategies for social media marketing success'
        ],
        top: 'top-[-70px]'
    },
    {
        src: 'star.png',
        title: 'BENEFITS',
        answers: [
            'Learn how to create a memorable and impactful brand identity that sets your agency apart from the competition, and gain the practical tools and strategies to build a successful and sustainable media agency'
        ],
        top: 'top-[-50px]'
    }
]


</script>

<style scoped>
    .background {
        background: linear-gradient(to top, #ffeee6, #ffffff);
    }
</style>