<template>
    <section class="py-[6.06rem]">
        <div class="w-[83.333%] tab:w-[90%] mx-auto">
            <h1 class="font-[400] font-helveticaBlack text-[#000000] text-[3.06rem] leading-[3.68rem] text-center mob:text-[2.44rem] mob:leading-[2.93rem]">MODULE</h1>
            <div class="mt-[1.5rem] grid grid-cols-customGrid gap-[1.5rem] tab3:grid-cols-1">
                <article 
                v-for="item in modules"
                :key="item"
                class=""
                >
                    <div class="bg-[#FFCAB0] rounded-t-[20px] py-[1.25rem] pl-[0.81rem]">
                        <h3 class="font-[400] font-helveticaBlack text-[1rem] leading-[1.5rem] text-[#000000]">{{ item.title }}</h3>
                    </div>
                    <ul class="py-[2rem] px-[0.81rem] border border-[#FFCAB0] rounded-b-[20px] flex flex-col gap-[0.5rem]">
                        <li 
                        v-for="point in item.list"
                        class="flex item-center gap-[0.69rem]">
                            <CheckTag />
                            <p class="font-[400] font-monte text-[#000000] text-[0.81rem] leading-[1.22rem]">{{ point }}</p>
                        </li>
                    </ul>
                </article>
            </div>
            <div class="flex justify-center w-full mt-[3rem]">
                <a href="https://selar.co/7727z7" target="_blank">
                    <button class="btn capitalize">apply now</button>
                </a>
            </div>

        </div>
    </section>
</template>

<script setup>
import CheckTag from '../icons/CheckTag.vue';

const modules = [
    {
        title: 'Understanding the Media Agency Landscape',
        list: [
            'The role of media agencies in the modern marketing landscape',
            'Types of media agencies (full-service, specialized, boutique)',
            'Key challenges and opportunities in the industry',
            ' Case studies of successful media agencies'
        ]
    },
    {
        title: 'Crafting Your Unique Media Agency Brand',
        list: [
            `Defining your agency's mission, vision, and values`,
            'Identifying your target market and ideal clients',
            ' Developing a compelling brand story and messaging',
            'Creating a strong visual identity (logo, website, collateral)',
            'Leveraging social media to build your brand online'
        ]
    },
    {
        title: 'Creating Structures and Systems that Set Your Agency for Success',
        list: [
            'Developing efficient workflows and processes',
            'Implementing project management tools and software',
            'Establishing clear communication channels and protocols',
            'Building a strong team culture and fostering collaboration',
            'Setting financial goals and tracking performance metrics'
        ]
    },
]

</script>

<style scoped>

</style>