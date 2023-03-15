<script setup>
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import { useNavigationStore } from '../stores/navigation'

const store = useNavigationStore()
const { navigation } = storeToRefs(store)
const isActive = ref(false)
</script>

<template>
  <header
    class="fixed bg-black p-[15px] box-border w-full h-[70px] z-[2] border border-solid border-[#383838] md:flex md:justify-between md:p-0 md:min-w-[1200px] md:h-[80px]">
    <h1
      class="w-[74%] pt-[7px] box-border max-w-[512px] md:mt-[20px] md:mr-0 md:mb-0 md:ml-[20px] md:p-0">
      <a href="/" class="md:duration-200 md:hover:opacity-80">
        <img
          src="@/assets/images/common/logo_officialweb.png"
          alt="ゴッドイーター オフィシャルウェブ" />
      </a>
    </h1>
    <div
      class="flex bg-black text-[#bb0009] text-center w-[55px] h-[55px] absolute top-[10px] right-[20px] z-10 justify-center items-center md:hidden">
      <div
        class="group relative w-[48px] h-[19px] inline-block transition-all duration-[.4s]"
        :class="{ active: isActive }"
        @click="isActive = !isActive">
        <span
          class="inline-block transition-all duration-[.4s] absolute left-0 w-full h-[2px] bg-[#a9020a] rounded-[4px] top-0 group-[.active]:translate-y-[8px] group-[.active]:scale-0"></span>
        <span
          class="inline-block transition-all duration-[.4s] absolute left-0 w-full h-[2px] bg-[#a9020a] rounded-[4px] top-[8px] after:absolute after:top-0 after:left-0 after:w-full after:h-[2px] after:bg-[#a9020a] after:rounded-[4px] after:transition-all after:duration-[.4s] group-[.active]:-rotate-45 group-[.active]:after:rotate-90"></span>
        <span
          class="inline-block transition-all duration-[.4s] absolute left-0 w-full h-[2px] bg-[#a9020a] rounded-[4px] bottom-0 group-[.active]:translate-y-[-8px] group-[.active]:scale-0"></span>
      </div>
    </div>
    <div
      class="bg-[rgba(0,0,0,0.9)] pt-[50px] px-[15px] pb-[10px] fixed top-0 left-0 w-full h-full box-border overflow-y-scroll transition-opacity duration-300 ease-in [&.hide]:opacity-0 [&.hide]:invisible [&.hide]:overflow-hidden md:bg-none md:h-auto md:static md:p-0 md:overflow-hidden md:transition-none md:[&.hide]:opacity-100 md:[&.hide]:visible"
      :class="{ hide: !isActive }">
      <ul class="md:flex md:justify-end md:h-[80px] md:mx-auto md:my-0 md:overflow-hidden">
        <li v-for="item in navigation">
          <a
            :href="item.href"
            :target="item.target"
            class="block border-b border-solid border-[#a9020a] px-0 py-[15px] text-center text-[2rem] font-anton md:relative md:inline-block md:border-none md:text-[1.8rem] md:pt-[26px] md:box-border md:min-w-[95px] md:duration-200 md:hover:text-[#bb0009]">
            {{ item.name }}
          </a>
        </li>
      </ul>
    </div>
  </header>
</template>
