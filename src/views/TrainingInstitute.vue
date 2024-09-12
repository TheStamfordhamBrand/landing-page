<template>
    <section class="">
        <div 
        class="loading_page preloader w-full h-[100vh] grid place-items-center text-center"
        v-if="showPreloader"
        >
         <div class="w-[40.417%] tab:w-[72.57%] mob:w-[90%] mx-auto">
             <div 
             class="w-[51.54%] mx-auto"
             :class="animateLogo? 'logo': ''"
             ref="logo_image"
             >
                 <img src="@/assets/images/loadingLogo.png" alt="Large Logo Image">
             </div>
             <div :class="animateLogo? 'opacity-0 z-[-1]': ''">
                 <h1 class="mt-[1.51rem] mb-[4rem] tab:mb-[3rem] mob:mb-4 font-helveticaBlack font-[400]text-[1.94rem] text-primary leading-[2.33rem]">STAMFORDHAM TRAINING INSTITUTE</h1>
                <div class="loader-container hidden">
                    <div class="progress-bar">
                        <div class="progress"></div>
                    </div>
                </div>
             </div>
         </div>
        </div>
        <div 
        class="main_page"
        v-if="showPage"
        >
            <header class="background bg-cover bg-[#FAF5ED] mob:bg-center bg-no-repeat min-h-[100vh] pb-[14rem] w-full py-4 top-0"
            :style="{backgroundImage: `url(${bgImage})`}"
            >
            <NavBar @why="scrollToSection('why')" @tutors="scrollToSection('tutors')" 
            @module="scrollToSection('module')" @benefit="scrollToSection('benefits')" />
            <div class="w-[69.17%] tab:w-[90%] mx-auto flex flex-col items-center text-center">
                <div>
                    <h1 class="font-helveticaBlack font-[400] text-[#000000] text-[3.06rem] leading-[3.675rem] mob:text-[2.44rem] mob:leading-[2.93rem]">Cutting-edge Courses <br class="hidden mob:block"> to Empower the Next Generation of 
                        <span class="font-nauticaBold font-[450] text-primary">Digital Professionals</span>
                    </h1>
                    <p class="font-[400] text-[1.25rem] leading-[1.875rem] font-monte text-[#333333] mt-[1.5rem] mb-[3.8rem]">Transform your passion into expertise with industry-led <br> trainings from top marketing professionals</p>
                </div>
                <div class="flex gap-4 items-center">
                    <button class="px-[0.75rem] py-4 bg-[#FFFEFE] border border-[#545454] rounded-[12.5rem] font-monte text-[#545454] font-[400] text-[1.25rem] leading-[1.9rem] shadow-btnShadow1" @click="scrollToSection('courses')">Learn More</button>
                    <a href="https://selar.co/7727z7" target="_blank">
                        <button class="px-[0.75rem] text-[#FFFFFF] py-4 bg-primary border border-[#6B2300] rounded-[12.5rem] font-monte font-[400] text-[1.25rem] leading-[1.9rem] shadow-btnShadow2 drop-shadow-btnDrop2">Apply Now</button>
                    </a>
                </div>
            </div>
         </header>
        <SectionOne id="why"/>
        <SectionTwo id="courses"/>
        <SectionThree id="benefits"/>
        <SectionFour />
        <SectionFive id="module"/>
        <SectionSix id="tutors"/>
        </div>
    </section>
</template>

<script setup>
import NavBar from '@/components/Training/NavBar.vue';
import SectionOne from '@/components/Training/SectionOne.vue';
import SectionTwo from '@/components/Training/SectionTwo.vue';
import SectionThree from '@/components/Training/SectionThree.vue';
import SectionFour from '@/components/Training/SectionFour.vue';
import SectionFive from '@/components/Training/SectionFive.vue';
import SectionSix from '@/components/Training/SectionSix.vue';
import { nextTick, onMounted, ref } from 'vue';

const showPreloader = ref(true)
const showPage = ref(false)
const animateLogo = ref(false)
const bgImage = new URL('@/assets/images/trainingBG.png', import.meta.url).href;
const logo_image = ref(null)

const handleAnimationEnd = () => {
  console.log("Logo has reached its final position!");
  showPreloader.value = false;
  showPage.value = true
};

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

onMounted(async() => {
    nextTick(()=>{
        const logo = logo_image.value;
        console.log(logo)
        logo.addEventListener('animationend', handleAnimationEnd);
    })
    setTimeout(() => {
        animateLogo.value = true
    }, 4000);
    
});

</script>

<style scoped>
    .background {
        background-position: center +70%;
    }

    .loader-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .progress-bar {
        width: 100%;
        max-width: 400px;
        height: 20px;
        background-color: #e0e0e0;
        border-radius: 10px;
        overflow: hidden;
    }

    .progress {
        width: 0;
        height: 100%;
        background-color: #FF5C35;
        animation: fill 4s infinite;
    }

    @keyframes fill {
        0% {
            width: 0;
        }
        100% {
            width: 100%;
        }
    }

    .logo {
        animation: moveLogo 3s forwards ease-in-out; /* Adjust timing as needed */
    }

    @keyframes moveLogo {
        0% {
            transform: translate(0, 0);
            width: 51.54%;
        }
        100% {
            transform: translate(-38vw, -27vh); /* Move to top-left */
            width: 3rem; /* Shrink width */
        }
    }

    @media screen and (max-width: 600px){
        @keyframes moveLogo {
            0% {
                transform: translate(0, 0);
                width: 51.54%;
            }
            100% {
                transform: translate(-28vw, -35vh); /* Move to top-left */
                width: 3rem; /* Shrink width */
            }
        }
    }
</style>