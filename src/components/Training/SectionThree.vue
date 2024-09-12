<template>
    <section class="w-full bg-[#FFFEFE] py-[6.875rem] tab:pt-0">
        <div class="w-[83.333%] tab:w-[90%] mx-auto">
            <h3 class="text-[#111111] font-helveticaBlack font-[400] text-[3.06rem] leading-[3.675rem] uppercase mob:text-[2.44rem] mob:leading-[2.93rem]">Your Gateway to Digital Success</h3>
            <p class="font-monte text-[1rem] font-[400] leading-[1.5rem] mt-4 !mb-[3rem]">The Stamfordham Training Institute offers a comprehensive range of courses designed to equip you with the A-Z of becoming a professional marketer and launching a successful media agency.</p>
            <div class="flex flex-wrap tab3:flex-col">
                <article 
                class="flex flex-col gap-[1.2rem] border-[#B0B0B0] p-[2rem] basis-[50%] tab3:!border"
                v-for="item in points"
                :key="item"
                :class="item.class"
                >
                    <div>
                        <img :src="getImgUrl(item.src)">
                    </div>
                    <h3 class="text-[#000000] font-helveticaBlack font-[400] text-[1rem] leading-[1.2rem]">{{ item.title }}</h3>
                    <p class="font-[400] font-monte leading-[1.5rem] text-[#545454] text-[0.875rem]">{{ item.body }}</p>
                </article>
            </div>
        </div>
    </section>
</template>

<script setup>
const points = [
    {
        src: 'send.png',
        title:  'Launching an Agency',
        body: 'Learn the essential steps to starting your own social media agency, from business planning and legalities to building a strong brand identity and attracting clients.',
        class: 'border-l border-t border-r'
    },
    {
        src: 'medal.png',
        title:  'Social Media Marketing Mastery',
        body: 'Dive deep into the world of social media marketing, exploring various platforms, content creation strategies, campaign management, and data analysis.',
        class: 'border-t border-r'
    },
    {
        src: 'video.png',
        title:  'Content Creation for Engagement',
        body: 'Develop your skills in crafting compelling content that resonates with your target audience and drives engagement.',
        class: 'border-t border-l border-b border-r'
    },
    {
        src: 'global.png',
        title:  'Opportunities & Careers in Marketing',
        body: 'Gain insights into the diverse landscape of marketing careers, focusing specifically on the exciting and ever-growing field of social media.',
        class: 'border-t border-r border-b'
    },
]

const getImgUrl = (path) => {
    return new URL(`../../../public/${path}`, import.meta.url).href;
};

</script>

<style lang="scss" scoped>

</style>