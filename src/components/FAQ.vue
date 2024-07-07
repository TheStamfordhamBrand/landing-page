<template>
    <section class="w-full bg-[#000000] py-[5rem]">
        <div>
            <h3 class="font-helveticaBlack font-[400] text-[#ffffff] text-[3.06rem] leading-[3.68rem] mob:text-[2.44rem] mob:leading-[2.39rem] mb-5 text-center">FAQ</h3>
            <div class="w-[56.11rem] tab:w-[90%] mx-auto flex flex-col gap-4">
                <article 
                class="w-full bg-[#333333] rounded-[1.25rem] px-[1.75rem] py-[1.5rem] transitionItem"
                v-for="(question, index) in questions"
                :key="index"
                @click="toggleModal(index)"
                >
                    <div 
                    class="w-full flex gap-[0.5rem] justify-between"
                    >
                        <h3 class="text-textCol font-helveticaBlack font-[400] text-[1.563rem] leading-[1.88rem] tab2:text-[1.2rem]">{{ question.quest }}</h3>
                        <div
                        class="!relative modalSvg w-[24px] h-[24px] cursor-pointer">
                            <svg 
                            class="transitionItem"
                            :class="!isModalOpen(index)? 'opacity-100': 'opacity-0 z-0'"
                            width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 12H18" stroke="#FFFEFE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M12 18V6" stroke="#FFFEFE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <svg 
                            class="absolute top-0 transitionItem"
                            :class="isModalOpen(index)? 'opacity-100': 'opacity-0 z-0'"
                             width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 12H18" stroke="#FFFEFE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                    <div 
                    class="mt-5 transitionItem"
                    :class="isModalOpen(index)? 'h-auto': 'h-0 !m-0 overflow-hidden'"
                    >
                        <p class="text-[#E8E3DD] font-monte font-[400] leading-7 text-[1.2rem] tab2:text-[1rem]">
                            {{ question.answer }}
                        </p>
                    </div>
                </article>
            </div>
        </div>

    </section>
</template>

<script setup>
import { ref } from 'vue';

const activeIndex = ref(false)

const questions = ref([
    {
        id: 1,
        quest: `WHAT SERVICES DO YOU OFFER?`,
        answer: `Social media management Community engagement Email marketing Social media brand development Content creation Social media strategy (one-time or on retainer) Logo creation and visual identity Paid campaigns Creative staff recruitment for your company Web and Product Design`
    },
    {
        id: 2,
        quest: `HOW LONG IS YOUR ONBOARDING PROCESS?`,
        answer: `The client onboarding process is a crucial phase in establishing a successful partnership with our clients. Our onboarding process is 7-14 days. During that time, we send clients an onboarding form and welcome packet, Set up their workspaces, collect brand assets and guidelines, create and present their strategy, optimize their profile, and create their first batch of content.`
    },
    {
        id: 3,
        quest: `DO YOU SPECIALIZE IN AN INDUSTRY OR NICHE?`,
        answer: `Our ideal client is a personal or business brand that is looking to establish itself as an expert in their field through content marketing. We primarily work with service-based businesses however, we serve a wide range of clients, transforming brands into trailblazers in their respective industries.`
    },
    {
        id: 4,
        quest: `DDOES CONTENT CREATION COME WITH YOUR SOCIAL MEDIA MANAGEMENT SERVICE?`,
        answer: `We have 3 packages catered to various social media management needs. Two of these packages contain content creation so you do not have to worry about content, we have got that covered!`
    },
    {
        id: 5,
        quest: `DOES MY CONTENT CREATION PACKAGE COVER EVENTS?`,
        answer: `Yes, you can use your content creation quota for your events and we will be there to cover them!`
    },
    {
        id: 6,
        quest: `CAN I CUSTOMIZE MY PACKAGE?`,
        answer: `Depending on the type of product or service and the work to be done, you can cherry-pick or customise your package based on your needs. Terms and conditions apply.`
    },
    {
        id: 7,
        quest: `CAN I SWITCH SERVICES BEFORE MY CONTRACT EXPIRES?`,
        answer: `Yes, you can switch your service or package. We require a 14-day advance notice to make the change effective.`
    },
    {
        id: 8,
        quest: `DOES COMMUNITY ENGAGEMENT COME WITH SOCIAL MEDIA MANAGEMENT?`,
        answer: `Please note that the social media management packages do not include customer service and community engagement services. This is a separate charge.`
    },
    {
        id: 9,
        quest: `WHO WILL BE WORKING ON MY ACCOUNT?`,
        answer: `The Stamfordham Brand works as a collective, with Department Heads and Account Managers. Your account is being worked on by all of us collectively, working on different aspects of your brand to deliver exceptional results.`
    },
])

const toggleModal = (index)=>{
    if (activeIndex.value === index) {
        activeIndex.value = null;
    } else {
        activeIndex.value = index;
    }
}

const isModalOpen = (index) => {
    return activeIndex.value === index;
};

</script>

<style scoped>
.transitionItem {
  transition: all 0.3s linear;
}

.modalSvg svg {
    width: 100%;
    min-width: 24px;
    height: 100%;
    min-height: 24px;
}

</style>