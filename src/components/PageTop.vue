<script setup>
import { onBeforeMount, onMounted, ref } from 'vue'

const isShow = ref(false)
const style = ref(null)

const handleScroll = () => {
  const footer = document.getElementById('footer')

  if (window.scrollY > 0) {
    style.value = (window.scrollY + window.innerHeight > footer.offsetTop) ? `position: absolute; bottom: ${footer.offsetHeight}px;` : 'position: fixed; bottom: 0px;'
    isShow.value = true
  } else {
    isShow.value = false
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeMount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <Transition enter-active-class="ease-out duration-300" enter-from-class="opacity-0" enter-to-class="opacity-100"
    leave-active-class="ease-in duration-300" leave-from-class="opacity-100" leave-to-class="opacity-0">
    <div v-show="isShow" class="text-right w-[40px] right-[10px] md:w-[60px] md:right-[30px] md:duration-200"
      :style="style">
      <a href="#container" @click.prevent="scrollToTop">
        <img src="https://www.godeater.jp/images/common/ptop.png" alt="" />
      </a>
    </div>
  </Transition>
</template>
