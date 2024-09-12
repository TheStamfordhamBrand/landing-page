<template>
    <section 
    class="relative tutors w-full bg-[#BE8A46] py-[4.5rem]"
    :class="showProfile? 'bg-[#FFFFFF] pt-0': ''"
    
    >
        <div class="w-[83.333%] mx-auto h-full" v-if="!showProfile">
            <h1 class="text-center font-[400] font-helveticaBlack text-[#FFFEFE] text-[3.813rem] leading-[4.58rem] tab3:text-[3rem] mob:text-[2.44rem] mob:leading-[2.93rem]">MEET YOUR TUTORS</h1>
            <div class="mt-[4.5rem] grid grid-cols-customGrid2 gap-[1.5rem]" v-if="!showProfile">
                <article 
                v-for="tutor in tutors"
                :key="tutor"
                class="cursor-pointer"
                @click="handleProfile(tutor)"
                >
                    <div class="min-w-[17.5px] w-full rounded-[32px] overflow-hidden">
                        <img :src="getImgUrl(tutor.src)" alt="tutor profile" class="w-full object-contain">
                    </div>
                    <h3 class="text-[#FFFFFF] font-helveticaBlack text-[1.5rem] leading-[1.875rem] mt-[0.75rem] tab3:text-[1.2rem] mob:text-[1rem]">{{ tutor.name }}</h3>
                </article>
                <article class="more min-w-[17.5px] min-h-[21.5rem] w-full rounded-[32px] overflow-hidden grid place-items-center">
                    <h3 class="text-center text-[#000000] font-helveticaBlack text-[1.5rem] leading-[1.875rem]">More Tutors <br> Announced Soon</h3>
                </article>
            </div>
        </div>
        <div class="w-full h-full bg-[#FFFFFF] pt-[2.5rem]" v-if="showProfile">
            <div class="w-[83.33%] tab:w-[90%] mx-auto flex gap-[2.9rem] h-full tab3:flex-col mb-[3rem]">
                <div class="min-w-[17.63rem] min-h-[21.5rem] lg:max-h-[21.5rem] rounded-[2rem] overflow-hidden tab3:!max-h-[auto] tab3:w-[50%] mx-auto mob:w-full">
                    <img :src="getImgUrl(src)" alt="" class="w-full object-cover">
                </div>
                <div class="">
                    <div class="flex justify-between items-center">
                        <h3 class="font-[400] text-[1.5rem] leading-[1.875rem] font-helveticaBlack text-[#000000]">{{ name }}</h3>
                        <span 
                        class="p-[0.5rem] font-[400] font-helveticaBlack cursor-pointer text-[#000] text-[1rem]"
                        @click="closeProfile"
                        >X</span>
                    </div>

                    <div 
                    class="mt-[2.5rem] text-[1rem] leading-[1.5rem] font-[400] font-monte text-[#333333] whitespace-pre-line ">
                        {{ profile }}
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

const name = ref('')
const profile = ref('')
const src = ref('')
const showProfile = ref(false)
const getImgUrl = (path) => {
    return new URL(`../../../public/${path}`, import.meta.url).href;
};

const handleProfile = (tutor)=>{
    name.value = tutor.name
    profile.value = tutor.profile
    src.value = tutor.src
    showProfile.value = true
}
const closeProfile = ()=>{
    name.value = ''
    profile.value = ''
    src.value = ''
    showProfile.value = false
}

const tutors = [
    {
        src: 'tutu.png',
        name: 'TUTU ADETUNMBI',
        profile: `Tutu Adetunmbi is a leading Social Media Branding Marketer and Social Media Communications Specialist helping individuals, brands, and companies across various industries with different aspects of their Social Media strategy. 

        Her journey started in an entry-level marketing role in Lagos, where Tutu recognized the gap between startup founders and the vital marketing support required for business growth. This realization sparked Tutu's drive to become an expert in social media strategy, brand strategy, and storytelling. Through her exceptional skills, Tutu has brought brands to life across the realms of beauty, skincare, fashion, lifestyle, automobile, and hospitality, collaborating with notable names such as ORIKI Group, Mitsubishi Motors, L'Oreal, and Coca Cola, Jobberman, Shea Moisture, Delta Soap, Sterling Bank among others.
        
        Whether strategizing social media campaigns, crafting compelling brand narratives, or empowering fellow African millennials, Tutu's unwavering commitment to connection, creativity, and multi-potentiality shines through in all facets of her life.
        
        Beyond her professional endeavors, Tutu's passion for connection and storytelling permeates her personal life. She leverages the power of social media to build bridges, foster meaningful relationships, and amplify voices that deserve to be heard. Tutu's ability to create authentic connections through her strategic approach leaves an indelible impact on those she encounters.`
    },
    {
        src: 'hawau.png',
        name: 'HAWAW ABUBAKAR',
        profile: `Hawaw Abubakar is the General Manager at The Stamfordham Brand.

        In the fast-paced business world, the synergy between strategic vision and operational efficiency is crucial for success. Hawaw Abubakar brings over five years of experience in digital marketing, specializing in social media strategy, and three years as a project manager and operations specialist. 

        She excels in aligning brand goals with operational efficiency, establishing effective structures, and enhancing processes. Additionally, she is skilled in creating brand and social media strategies to boost market presence and drive growth.

        Her extensive experience integrates strategic vision with operational excellence, proving her ability to achieve impactful results.

        Hawaw is committed to leveraging her strategic vision and operational skills to help organizations navigate challenges and achieve sustained growth.`
    },
    {
        src: 'jumoke.png',
        name: 'ADEJUMOKE ADEFILA',
        profile: `
            Adejumoke Adefila aka JD is the Lead Strategist for The StamfordHam Brand. 

            With over 4 years of experience in the social media space, this strategy-obsessed, copywriting-loving, research-rockstar has worked with brands across various sectors, making them shine online.

            As a passionate storyteller with a head for business and a heart for people, Adejumoke has a knack for gathering opinions and perspectives to craft social content that resonates. With exceptional communication and interpersonal skills, she helps build strong relationships with teams and clients alike.

            When she's not busy being a creative genius, you'll catch her eager to contribute to efforts in promoting mental well-being and achieving sustainable development goals in Nigeria.
        `
    },
    {
        src: 'awoyemi.png',
        name: 'EMMANUEL AWOYEMI',
        profile: `
            Emmanuel is a seasoned graphic and brand designer with over four years of professional experience. He is presently a fifth-year student of Obafemi Awolowo University seeking a degree in Building. Emmanuel has managed to combine a successful design career with his academic endeavors. He is proficient in industry-standard programs such as Adobe Photoshop, Illustrator, After Effects, Corel Draw, and Filmora. Emmanuel has also expanded his skill set into video editing and motion graphic design in addition to his graphic design expertise, demonstrating creativity in these areas.
            Emmanuel has provided creative solutions that have enhanced marketing initiatives while working with a diverse range of clients. He is committed to achieving both strategic and aesthetic objectives with his designs by fusing creativity and functionality.
            Emmanuel aspires to continue growing his impact in the design industry and further his knowledge in motion graphics and video editing. He is committed to staying at the forefront of design innovation while concentrating on telling powerful stories through impactful visual narratives.
        `
    },
    {
        src: 'bisola.png',
        name: 'BISOLA AKINSUNLOLA',
        profile: `
            Bisola Akinsunlola is a the Head of Content at The Stamfordham Brand. 

            Known for her obsession with content creation, Bisola seamlessly blends creativity with strategic thinking to produce compelling narratives and visuals that captivate and engage diverse audiences. With over three years of experience in the social media space, She has successfully collaborated with several brands across various industries, enhancing their online presence and impact.

            Her approach is unconventional, blending brand goals with deep audience resonance. Her projects are innovative and fun, ensuring engaging and effective content.

            When she’s not busy crafting exceptional content or brainstorming her next big idea, Bisola is pursuing her dream of stepping into the director’s chair, aiming to bring her creative vision life.
        `
    }

]

</script>

<style scoped>
.more {
        background: linear-gradient(to top, #ffeee6, #ffffff);
    }

</style>