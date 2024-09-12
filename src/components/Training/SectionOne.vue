<template>
    <section class="sectionOne grid grid-cols-2 tab3:grid-cols-1">
        <div class="py-[8rem] pl-[7.5rem] pr-[1.75rem] bg-[#FFEEE6] tab3:px-0">
            <div class="tab3:w-[90%] mx-auto tab3:text-justify">
                <h3 class="bg-[#FFCAB0] p-[0.625rem] rounded-[200px] w-fit font-helveticaBlack font-[400] text-[0.8rem] leading-[1.22rem] text-[#E84C00]">The Stamfordham Training Institute</h3>
                <div class="intro mt-[3rem] flex flex-col gap-4">
                    <p>
                        The Stamfordham Training Institute is the educational arm of The Stamfordham Brand.
                    </p>
                    <p>
                        We leverage our agency's expertise and industry knowledge to provide exceptional training programs designed to empower individuals, teams and businesses to navigate the ever-evolving digital media landscape.
                    </p>
                    <p>
                        Our curriculum is meticulously crafted, combining the latest industry trends with practical applications. Whether you're an aspiring creative professional or a business seeking to upskill your team, we offer a comprehensive range of courses to equip you with the skills and knowledge you need to succeed.
                    </p>
                </div>
            </div>
        </div>
        <div class="py-[8rem] pr-[7.5rem] pl-[1.75rem] bg-[#000000] tab3:px-0">
            <div class="tab3:w-[90%] mx-auto">
                <h3 class="text-[#FFFFFF] text-[1.94rem] font-[400] font-helveticaBlack leading-[2.325rem]">Here's what sets us apart</h3>
                <div class="mt-[3rem] flex flex-col gap-[1.5rem]">
                    <article 
                    class="flex gap-4 items-center"
                    v-for="item in points"
                    :key="item.id"
                    >
                        <div class="w-[3rem] h-[3rem]">
                            <img :src="getImgUrl(item.src)" alt="" class="w-full">
                        </div>
                        <div class="flex flex-col">
                            <h3 class="font-[400] text-[1.563rem] text-[#FFFFFF] leading-[1.875rem] font-helveticaBlack">{{ item.title }}</h3>
                            <p class="text-[#B0B0B0] font-[400] font-monte text-[1rem] leading-[1.5rem] mt-[0.7rem]">
                                {{ item.body }}
                            </p>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

const getImgUrl = (path) => {
    return new URL(`../../../public/${path}`, import.meta.url).href;
};

const points = [
    {
        id: 1,
        src: 'Frame1.png',
        title: 'Industry-Driven Training',
        body: 'Taught by experienced practitioners and informed by real-world agency experience.'
    },
    {
        id: 2,
        src: 'Frame2.png',
        title: 'Focus on Practical Skills',
        body: 'Gain hands-on experience through interactive workshops and exercises.'
    },
    {
        id: 3,
        src: 'Frame3.png',
        title: 'Experienced Instructors',
        body: 'Learn from the best – our instructors are industry leaders and passionate educators.'
    },
    {
        id: 4,
        src: 'Frame4.png',
        title: 'Supportive Learning Environment',
        body: 'We are all about blossoming a collaborative and engaging atmosphere where you can thrive.'
    },
]

</script>

<style lang="scss" scoped>

</style>