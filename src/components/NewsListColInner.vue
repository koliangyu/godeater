<script setup>
import CategorySpan from '../components/CategorySpan.vue'
import H3 from '../components/H3.vue'
import SBtn from '../components/SBtn.vue'
import SpBr from '../components/SpBr.vue'

defineProps({
  title: String,
  href: String,
  target: String,
  news: Array
})
</script>

<template>
  <div
    class="peer w-[94%] mx-auto my-0 md:mt-0 md:mr-[1%] md:mb-0 md:ml-0 md:peer-[]:my-0 md:peer-[]:mr-0 md:peer-[]:ml-[1%]">
    <H3>{{ title }}</H3>
    <ul class="mt-0 mx-0 mb-[5%] md:mt-0 md:mx-0 md:mb-[30px]">
      <li
        v-for="item in news"
        class="relative h-48 bg-black border border-solid border-[#a9020a] mt-0 mx-0 mb-[2%] p-[2%] box-border">
        <a
          :href="item.href"
          class="relative md:block md:duration-200 md:hover:opacity-60"
          :target="item.target">
          <dl>
            <dt
              class="mt-0 mx-0 mb-[2%] font-oswald text-[#bb0009] text-[1.4rem] md:mt-0 md:mx-0 md:mb-[5px] md:text-[1.6rem]">
              {{ item.date }}
              <template v-if="item.category">
                <SpBr />
                <p
                  class="text-[1.4rem] font-bold text-[#616161] md:inline-block md:mr-0 md:my-0 md:ml-[10px]">
                  /
                  <CategorySpan
                    class="text-base md:text-[1.1rem]"
                    :category="item.category"></CategorySpan>
                </p>
              </template>
            </dt>
            <dd class="text-[1.2rem] text-white md:text-[1.4rem]">
              {{ item.title }}
              <template v-if="item.subtitle">
                <br />
                <span class="text-[1.2rem] text-[#acacac]">{{ item.subtitle }}</span>
              </template>
            </dd>
          </dl>
        </a>
      </li>
    </ul>
    <SBtn :href="href" :target="target">MORE</SBtn>
  </div>
</template>
