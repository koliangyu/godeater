import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useNavigationStore = defineStore('navigation', () => {
  const navigation = ref([
    { name: 'TOP', href: '/', target: null },
    { name: 'ABOUT GE', href: '/about', target: null },
    { name: 'GAME', href: '/game', target: null },
    { name: 'CONTENTS', href: '/fanclub/contents', target: null },
    {
      name: 'MOVIE',
      href: 'https://www.youtube.com/watch?v=u_any1RCq14&list=PL0DnZpV_rwVt9shPIsZFu-jPLYqtijHaI',
      target: '_blank'
    },
    {
      name: 'GOODS',
      href: 'https://www.bandainamcoent.co.jp/goods/detail.html?q=%7B%22keywords%22%3A%22%22%2C%22category%22%3A%22%22%2C%22series%22%3A%22HJzbDbbBU9f%22%7D',
      target: '_blank'
    },
    { name: 'BLOG', href: 'https://blog.godeater.jp/', target: '_blank' }
  ])

  return { navigation }
})
