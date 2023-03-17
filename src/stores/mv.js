import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useAssetsUrl } from '../composables/useAssetsUrl'

export const useMvStore = defineStore('mv', () => {
  const mv = ref([
    {
      name: '『GOD EATER』徹底解剖10CONTENTS',
      href: 'https://www.godeater.jp/fanclub/contents/?p=613',
      imgUrl: useAssetsUrl('bnr/01.jpg')
    },
    {
      name: 'ゴッドイーター3',
      href: 'https://ge3.godeater.jp/',
      imgUrl: useAssetsUrl('bnr/02.jpg')
    }
  ])

  return { mv }
})
