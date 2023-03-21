import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useAssetsUrl } from '../composables/useAssetsUrl'

export const useTwitterStore = defineStore('twitter', () => {
  const twitter = ref([
    {
      name: '「ゴッドイーター」シリーズ公式Twitter',
      href: 'https://twitter.com/project_ge',
      imgUrl: useAssetsUrl('top/bnr_tw_ge.png')
    },
    {
      name: 'イーターくん公式Twitter',
      href: 'https://twitter.com/ge_fans',
      imgUrl: useAssetsUrl('top/bnr_tw_fans.png')
    }
  ])

  return { twitter }
})
