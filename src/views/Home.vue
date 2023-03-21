<script setup>
import { storeToRefs } from 'pinia'
import CategorySpan from '../components/CategorySpan.vue'
import H2 from '../components/H2.vue'
import NewsListColInner from '../components/NewsListColInner.vue'
import AppLayout from '../layouts/AppLayout.vue'
import { useBlogStore } from '../stores/blog'
import { useNewsStore } from '../stores/news'
import { useTopicStore } from '../stores/topic'
import { useTwitterStore } from '../stores/twitter'

const topicStore = useTopicStore()
const newsStore = useNewsStore()
const blogStore = useBlogStore()
const twitterStore = useTwitterStore()
const { topic } = storeToRefs(topicStore)
const { news } = storeToRefs(newsStore)
const { blog } = storeToRefs(blogStore)
const { twitter } = storeToRefs(twitterStore)
</script>

<template>
  <AppLayout :is-top="true">
    <section class="pb-[6%] md:pb-[60px] md:min-w-[1200px]">
      <H2>TOPICS</H2>
      <ul class="w-[94%] mx-auto my-0 flex justify-between flex-wrap md:w-[97%] md:max-w-[1800px]">
        <li
          v-for="item in topic"
          class="group w-[48%] border border-solid border-[#a9020a] mt-0 mx-0 mb-[3%] md:w-[23%]"
          :class="{ new: item.new }">
          <a
            :href="item.href"
            class="relative group-[&.new]:before:absolute group-[&.new]:before:top-0 group-[&.new]:before:left-0 group-[&.new]:before:block group-[&.new]:before:bg-[url('/src/assets/images/common/icon_new.png')] group-[&.new]:before:bg-no-repeat group-[&.new]:before:bg-left-top group-[&.new]:before:bg-contain group-[&.new]:before:w-[60px] group-[&.new]:before:h-[20px] group-[&.new]:before:z-[1] md:block md:duration-200 md:hover:opacity-60 md:group-[&.new]:before:w-[100px] md:group-[&.new]:before:h-[34px]">
            <dl class="">
              <dt><img :src="item.imgUrl" /></dt>
              <dd
                class="h-[8.4rem] text-[1.2rem] bg-[rgba(0,0,0,0.4)] p-[4%] box-border md:text-[1.4rem]">
                {{ item.title }}
              </dd>
              <dd
                class="text-[.9rem] font-bold bg-[rgba(0,0,0,0.4)] pt-0 px-[4%] pb-[3%] text-right">
                <CategorySpan :category="item.category"></CategorySpan>
              </dd>
            </dl>
          </a>
        </li>
      </ul>

      <div class="md:flex md:justify-between md:max-w-[1800px] md:w-[97%] md:mx-auto md:my-0">
        <NewsListColInner title="NEWS" href="/news/" :news="news"></NewsListColInner>

        <NewsListColInner
          title="BLOG"
          href="https://blog.godeater.jp/"
          target="_blank"
          :news="blog"></NewsListColInner>
      </div>
    </section>

    <section class="bg-[url('/src/assets/images/top/bg_tw.png')] bg-repeat bg-top">
      <H2>Twitter</H2>
      <div
        class="w-[94%] mx-auto my-0 md:w-[1200px] md:mx-auto md:my-0 md:pt-0 md:px-0 md:pb-[50px] md:flex md:justify-between">
        <ul
          class="w-full text-center mx-auto my-0 flex justify-center flex-wrap pt-0 px-0 pb-[8%] md:w-[1200px] md:p-0">
          <li
            v-for="item in twitter"
            class="w-[48%] p-[1%] md:mt-0 md:mx-0 md:mb-[26px] md:w-auto md:px-[1%] md:py-0">
            <a :href="item.href" class="md:duration-200 md:hover:opacity-60" target="_blank">
              <img :src="item.imgUrl" :alt="item.name" />
            </a>
          </li>
        </ul>
      </div>
    </section>

    <section class="mt-0 mx-0 mb-[6%] md:mt-0 md:mx-0 md:mb-[50px]">
      <H2>MOVIE</H2>
      <ul
        class="w-[94%] mt-0 mx-auto mb-[3%] md:flex md:justify-between md:flex-wrap md:w-[1200px] md:mt-0 md:mx-auto md:mb-[30px]">
        <li class="md:w-[580px] md:mx-auto md:my-0">
          <p class="relative pb-[56.25%] h-0 overflow-hidden mt-0 mr-0 mb-[3%] ml-0">
            <iframe
              class="absolute top-0 left-0 w-full h-full"
              width="560"
              height="315"
              src="https://www.youtube-nocookie.com/embed/mhI2Mbww-Po"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>
          </p>
        </li>
      </ul>
    </section>
  </AppLayout>
</template>
