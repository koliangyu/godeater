<script setup>
import { storeToRefs } from 'pinia'
import { useFooterStore } from '../stores/footer'

const store = useFooterStore()
const { share, bnr } = storeToRefs(store)
</script>

<template>
  <footer id="footer">
    <div class="md:relative md:w-[1200px] md:mx-auto md:my-0 md:flex md:justify-between">
      <ul
        class="border-b border-solid border-[#383838] flex justify-center px-0 py-[2%] text-center md:border-none md:justify-start md:whitespace-nowrap">
        <li
          class="px-[3%] py-0 box-border text-[1.2rem] md:px-[15px] md:py-0 md:first:pt-0 md:first:pr-[15px] md:first:pb-0 md:first:pl-0">
          <a href="/docs/contact" class="hover:underline">お問い合わせ</a>
        </li>
      </ul>
      <div class="md:flex md:justify-end">
        <p
          class="px-0 py-[3%] text-white font-oswald text-center text-2xl md:bg-[url('/src/assets/images/common/icon_arrow_wht_s.png')] md:bg-no-repeat md:bg-left-top md:bg-[length:12px_auto] md:mt-[25px] md:mr-[10px] md:mb-0 md:ml-0 md:pt-0 md:pr-0 md:pb-0 md:pl-[20px] leading-none">
          SHARE
        </p>
        <ul
          class="flex justify-center md:w-[150px] md:justify-around md:mt-[20px] md:mr-0 md:mb-0 md:ml-0">
          <li v-for="item in share" class="px-[3%] py-0">
            <a :href="item.href" class="md:duration-200 md:hover:opacity-60" target="_blank">
              <img :src="item.imgUrl" :alt="item.name" />
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div
      class="w-[90%] mt-[3%] mx-auto mb-[2%] md:border-t md:border-solid md:border-[#383838] md:w-full md:mx-auto md:my-0">
      <ul
        class="flex justify-between flex-wrap md:max-w-[1200px] md:mx-auto md:my-0 md:justify-center">
        <li
          v-for="item in bnr"
          class="w-[48%] mx-0 my-[2%] md:w-[186px] md:h-auto md:mx-[6px] md:my-[15px] md:duration-200">
          <a :href="item.href" class="md:duration-200 md:hover:opacity-60" target="_blank">
            <img :src="item.imgUrl" :alt="item.name" />
          </a>
        </li>
      </ul>
    </div>
    <div
      class="border-t border-solid border-[#383838] px-0 py-[2%] text-white text-center text-[.9rem] md:px-0 md:py-[15px] md:text-[1.2rem]">
      <p
        class="w-[94%] mt-0 mx-auto mb-[3%] text-[#cbcbcb] md:w-full md:mt-0 md:mr-0 md:mb-[5px] md:ml-0">
        <span
          class="block w-[80%] mx-auto my-0 max-w-[463px] md:bg-[url('/src/assets/images/common/txt_footer_pc.png')] md:bg-no-repeat md:bg-top md:w-full md:max-w-[854px] md:min-h-[16px]">
          <img src="@/assets/images/common/txt_footer_sp.png" class="md:hidden" alt="" />
        </span>
        STEAM および STEAM ロゴは、米国およびまたはその他の国の Valve Corporation
        の商標およびまたは登録商標です。<br />
        &copy;2017 Nintendo　※Nintendo Switchのロゴ・Nintendo Switch・Joy-Conは任天堂の商標です。<br />
        Apple、Appleロゴは米国その他の国で登録されたApple Inc.の商標です。App StoreはApple
        Inc.のサービスマークです。<br />
        Google Play、Google Play ロゴはGoogle LLCの商標です。
      </p>
      &copy;BANDAI NAMCO Entertainment Inc.
    </div>
  </footer>
</template>
