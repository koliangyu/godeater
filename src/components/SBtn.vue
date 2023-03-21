<script setup>
defineProps({
  href: String
})
</script>

<template>
  <a
    :href="href"
    class="relative block text-center text-[1.4rem] w-[70%] max-w-[300px] mx-auto my-0 bg-[#a9020a] border border-solid border-[#a9020a] px-0 py-[10px] font-oswald font-normal before:absolute before:top-0 before:left-0 before:bg-[url('/src/assets/images/common/bg_sbtn_left.png')] before:bg-no-repeat before:bg-left-top before:bg-contain before:w-[10%] before:h-full after:absolute after:top-0 after:right-0 after:bg-[url('/src/assets/images/common/bg_sbtn_right.png')] after:bg-no-repeat after:bg-right-top after:bg-contain after:w-[10%] after:h-full md:text-[2rem] md:duration-200 md:max-w-[240px] md:before:w-[111px] md:after:w-[111px] md:hover:opacity-60">
    <slot />
  </a>
</template>
