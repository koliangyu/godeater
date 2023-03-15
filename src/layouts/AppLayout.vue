<script setup>
import Footer from '../components/Footer.vue'
import Header from '../components/Header.vue'
import PageTop from '../components/PageTop.vue'

defineProps({
  isTop: Boolean
})
</script>

<template>
  <div
    id="container"
    class="relative before:fixed before:top-0 before:left-0 before:z-[-1] before:w-screen before:h-screen before:bg-[url('/src/assets/images/common/bg_sp.jpg')] before:bg-no-repeat before:bg-cover md:before:bg-[url('/src/assets/images/common/bg.jpg')] md:before:bg-no-repeat md:before:bg-top md:before:bg-black">
    <Header />
    <main class="pt-[70px] [&.top]:relative [&.top]:p-0 md:pt-[80px]" :class="{ top: isTop }">
      <slot />
    </main>
    <PageTop />
    <Footer />
  </div>
</template>
