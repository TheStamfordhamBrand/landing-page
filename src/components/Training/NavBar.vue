<template>
    <div class="trainingNav w-full z-[999] bg-[#FAF5ED] mt-[1.19rem] !mb-[10.375rem]">
      <nav class="top-0 w-[83.3%] mob:w-[90%] mx-auto flex items-center justify-between p-4 !bg-none">
        <div class="w-[3.41rem]">
            <img src="@/assets/images/navLogo.png" alt="" class="w-full">
        </div>
      <ul class="flex items-center gap-[2rem] tab3:hidden">
        <li class="cursor-pointer" @click="handleWhy">Why Choose Us</li>
        <li class="cursor-pointer" @click="handleBenefit">Benefits</li>
        <li class="cursor-pointer" @click="handleTutors">Tutors</li>
        <li class="cursor-pointer" @click="handleModule">Module</li>
      </ul>
      <button class="btn mob:!px-4 mob:!py-[0.5rem]">
        <a href="https://selar.co/7727z7" target="_blank">
          Apply Now
        </a>
      </button>
     </nav>
    </div>
</template>

<script setup>
const emit = defineEmits(['why', 'tutors', 'module', 'benefit'])

const handleWhy = ()=>{
  emit('why')
}
const handleModule = ()=>{
  emit('module')
}
const handleTutors = ()=>{
  emit('tutors')
}
const handleBenefit = ()=>{
  emit('benefit')
}

</script>

<style lang="scss" scoped>

</style>