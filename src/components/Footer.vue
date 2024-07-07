<template>
    <section class="w-full bg-[#000000] py-[2rem]">
        <div class="w-[85.07%] tab2:w-[90%] mx-auto">
            <div class="flex justify-between tab:flex-col tab:items-center tab:gap-6">
                <div class="w-[23.94%] tab:!w-[90%] tab:items-center flex flex-col gap-6">
                    <div>
                        <img src="../assets/images/logo.png" alt="" class="object-fit">
                    </div>
                    <div class="flex gap-[1.88rem]">
                        <a href="https://www.instagram.com/thestamfordhambrand?igsh=cTJmNHhmZXZtN211" target="_blank" class="cursor-pointer">
                            <InstagramIcon class="w-[3.19rem] h-[3.19rem]"/>
                        </a>
                        <a href="https://www.tiktok.com/@thestamfordham?_t=8niNlTQwoaL&_r=1" target="_blank" class="cursor-pointer">
                            <TikTokIcon class="w-[3.19rem] h-[3.19rem]"/>
                        </a>
                        <a href="mailto:contactstamfordham@gmail.com" target="_blank" class="cursor-pointer">
                            <MailIcon class="w-[3.19rem] h-[3.19rem]"/>
                        </a>
                        <a href="https://www.threads.net/@thestamfordhambrand?igshid=MzRlODBiNWFlZA==" target="_blank" class="cursor-pointer">
                            <ThreadIcon class="w-[3.19rem] h-[3.19rem]"/>
                        </a>
                        <a href="https://www.facebook.com/stamfordhambrand?mibextid=kFxxJD" target="_blank" class="cursor-pointer">
                            <FacebookIcon class="w-[3.19rem] h-[3.19rem]"/>
                        </a>
                    </div>
                </div>
                <div class="flex flex-col w-[33.17%] tab2:w-[40%] tab:items-center tab:gap-6 tab:!w-[90%] tab:text-center">
                    <div class="bg-textCol p-[0.75rem] pl-6 rounded-[2.25rem] flex justify-between items-center">
                        <input type="email" placeholder="Email Address" class="font-monte focus:outline-0 font-[400] text-[#545454] text-[1rem] leading-[1.5rem]">
                        <button class="btn">Subscribe</button>
                    </div>
                    <h3 class="mt-[0.75rem] font-monte font-[400] text-[1rem] leading-[1.5rem] text-textCol">Subscribe to our newsletter for weekly marketing tips, updates from the team and exclusive deals and offers. That's right, being part of our mailing list gives you firsthand information on what we have going on in our creative vineyard plus, great tips to help your digital journey.</h3>
                </div>
            </div>
            <div>
                <hr class="border-[#333333] w-full my-[3rem]">
                <p class="text-center text-textCol font-monte font-[400] text-[1rem] leading-6">© 2024 The Stamfordham Brand. All rights reserved.</p>
            </div>
        </div>
    </section>
</template>

<script setup>
import TikTokIcon from "@/components/icons/TikTokIcon.vue"
import FacebookIcon from "@/components/icons/FacebookIcon.vue"
import ThreadIcon from "@/components/icons/ThreadIcon.vue"
import InstagramIcon from "@/components/icons/InstagramIcon.vue"
import MailIcon from "@/components/icons/MailIcon.vue"

</script>

<style scoped>

</style>