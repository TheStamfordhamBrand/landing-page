<template>
    <section class="w-full bg-[#000000] pt-[3.63rem] pb-[6.63rem]">
        <div class="text-center w-[56.11%] mob:w-[90%] mx-auto mb-[3rem]">
            <h2 class="font-helveticaBlack text-textCol text-[3.06rem] font-[400] w-[80%] mx-auto leading-[3.68rem] mob:text-[2.44rem] mob:leading-[2.93rem]">Tailored <span class="font-nauticaBold font-[350] text-primary">Solutions</span> for Success.</h2>
            <p class="text-[#B5B1AD] font-monte font-[400] text-[1.25rem] leading-[1.88rem] mt-5 mob:text-[1rem] mob:leading-[1.5rem]">
                We offer a comprehensive range of services designed to elevate your brand presence and drive meaningful engagement. Our expertise spans across various key areas, including
            </p>
        </div>
        <div class="w-[73.47%] mob:w-[90%] mx-auto grid grid-cols-2 gap-x-[11rem] tab:gap-x-[5rem] gap-y-[2rem] mob:gap-[4rem] mob:grid-cols-1">
            <article class="max-w-[27.13rem] h-[17.31rem] tab2:h-auto mob:w-full mx-auto flex items-center flex-col gap-4" v-for="service in services" :key="service.id">
                <div class="w-[3rem] h-[2.94rem]">
                    <img src="../assets/images/bullet.png" alt="bullet for each service" class="object-contain"
                    loading="lazy"
                    >
                </div>
                <h3 class="font-heveticaBlack font-[400] text-textCol text-[1.56rem] text-center leading-[1.88rem]">
                    {{ service.title }}
                </h3>
                <p class="text-[#B5B1AD] font-monte font-[400] leading-5 text-[1rem] text-center">
                    {{ service.descr }}
                </p>
            </article>
        </div>
        <div class="mt-[11rem]">
            <div class="logoSlider w-full mx-auto flex gap-5 overflow-x-auto items-center no-scrollbar" ref="logoSlider">
            <div 
                class="flex justify-center items-center shrink-0 basis-[18%] tab2:basis-[30%] mob:basis-[90%]" 
                v-for="clip in headerClips" 
                :key="clip.id"
            >
                <video :src="getImgUrl(clip.src)" autoplay muted loop class=" h-[21rem] w-full object-fill"></video>
          </div>
        </div>
        </div>

    </section>
</template>

<script setup>
import { onMounted, onUnmounted, ref} from 'vue';
let scrollAmount = 0
const logoSlider = ref(null)


const services = [
    {
        id: 1,
        title: 'Social Media Management',
        descr: 'We specialize in crafting and executing tailored social media strategies that resonate with your target audience. From content creation to community management, we ensure your brand shines across popular social platforms.'
    },
    {
        id: 2,
        title: 'Brand Development',
        descr: 'We work closely with you to define and refine your brand identity. Through meticulous research and strategic planning, we create cohesive and impactful brand experiences that leave a lasting impression.'
    },
    {
        id: 3,
        title: 'Email Marketing',
        descr: 'Harness the power of email to connect with your audience on a more personal level. Our email marketing campaigns are designed to engage, nurture, and convert leads into loyal customers.'
    },
    {
        id: 4,
        title: 'Graphic Design',
        descr: `Our talented team of designers brings ideas to life through visually stunning graphics. From eye-catching logos to captivating visuals, we create designs that communicate your brand's essence.`
    },
    {
        id: 5,
        title: 'Content Strategy',
        descr: `We help you develop a strategic roadmap for your content efforts. From editorial calendars to content distribution plans, we ensure your brand's messaging is consistent and impactful.`
    },
    {
        id: 6,
        title: 'Social Media Strategy',
        descr: `Our social media strategists analyze trends, insights, and audience behaviors to develop data-driven strategies that maximize your brand's social media impact.`
    },
    {
        id: 7,
        title: 'Consultation',
        descr: `Tap into our expertise and experience through our consultation services. Whether you need guidance on digital marketing or brand positioning, we provide valuable insights to help you make informed decisions.`
    },
    {
        id: 8,
        title: 'Visual Identity',
        descr: `A strong logo and cohesive visual identity are essential for brand recognition. Our designers create unique logos and develop comprehensive visual systems that embody your brand's personality`
    },
    {
        id: 9,
        title: 'Content Creation',
        descr: `Compelling and authentic content lies at the heart of effective storytelling. Our content creators craft engaging copy, captivating visuals, and immersive multimedia that captivate your audience.`
    },
    {
        id: 10,
        title: 'Web and Product Design',
        descr: `Innovative designs that drive engagement and conversions for your websites and your products.`
    },
]

const headerClips = [
  {
    id: 1,
    src: 'Vid1.mp4'
  },
  {
    id: 2,
    src: 'Vid2.mp4'
  },
  {
    id: 3,
    src: 'Vid3.mp4'
  },
  {
    id: 4,
    src: 'Vid4.mp4'
  },
  {
    id: 5,
    src: 'Vid5.mp4'
  },
  {
    id: 6,
    src: 'Vid6.mp4'
  },
  {
    id: 7,
    src: 'Vid7.mp4'
  },
]

const getImgUrl = (path) => {
    return new URL(`../../public/${path}`, import.meta.url).href;
};

const autoScroll = (num, element)=>{
  const slider = element.value
  const maxScrollLeft = slider.scrollWidth - slider.clientWidth

  if(scrollAmount >= maxScrollLeft){
    scrollAmount = 0
  } else {
    scrollAmount += num
  }
  slider.scrollLeft = scrollAmount
}

onMounted(()=>{
  const intervalId = setInterval(()=>autoScroll(0.5, logoSlider), 10)

  onUnmounted(()=>{
    clearInterval(intervalId)
  })
})
   
</script>

<style scoped>

</style>