<script setup>
import { storeToRefs } from 'pinia'
import { register } from 'swiper/element/bundle'
import { useMvStore } from '../stores/mv'

register()

const store = useMvStore()
const { mv } = storeToRefs(store)

const swiperParams = {
  navigation: {
    nextEl: '.swiper-buttons-next',
    prevEl: '.swiper-buttons-prev'
  },
  pagination: {
    bulletActiveClass: 'active',
    bulletClass: 'swiper-pagination-thumb',
    horizontalClass: 'null',
    el: '.slide_pagination',
    clickable: true,
    renderBullet: function () {
      return `<li class="group swiper-pagination-thumb relative inline-block h-auto w-[50px] mx-[10px] my-0 p-0 cursor-pointer">
        <button class="border-0 bg-transparent block h-auto w-[50px] outline-none leading-[0px] text-[0px] text-transparent p-[5px] cursor-pointer before:absolute before:top-0 before:left-0 before:border-t before:border-solid before:border-[#8a8a8a] before:w-[50px] before:h-[1px] before:text-[6px] before:leading-[20px] before:text-center before:text-black group-[.active]:before:border-t group-[.active]:before:border-solid group-[.active]:before:border-[#a9020a] group-[.active]:before:text-black"></button>
      </li>`
    }
  }
}
</script>

<template>
  <div class="mb-[30px] pt-[70px] md:pt-[80px]">
    <swiper-container
      :slides-per-view="1"
      :speed="500"
      :loop="true"
      :autoplay-pause-on-mouse-enter="true"
      :navigation="swiperParams.navigation"
      :pagination="swiperParams.pagination"
      class="w-full">
      <swiper-slide v-for="item in mv">
        <a :href="item.href" class="flex justify-center" target="_blank">
          <img :src="item.imgUrl" class="md:hover:opacity-80" :alt="item.name" />
        </a>
      </swiper-slide>

      <div slot="container-end">
        <div
          class="hidden absolute top-[37%] w-[127px] h-[106px] z-[10] cursor-pointer left-0 bg-[url('/src/assets/images/top/btn_prev.png')] bg-no-repeat bg-top md:block swiper-buttons-prev"></div>
        <div
          class="hidden absolute top-[37%] w-[127px] h-[106px] z-[10] cursor-pointer right-0 bg-[url('/src/assets/images/top/btn_next.png')] bg-no-repeat bg-top md:block swiper-buttons-next"></div>
      </div>
    </swiper-container>

    <ul
      class="slide_pagination absolute list-none block text-center m-0 w-full h-[30px] pt-[7px] bg-black box-border md:pt-[3px]"></ul>
  </div>
</template>
