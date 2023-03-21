import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useAssetsUrl } from '../composables/useAssetsUrl'

export const useTopicStore = defineStore('topic', () => {
  const topic = ref([
    {
      title: '『GOD EATER』徹底解剖10CONTENTS 第10回 GEの武器「神機」の秘密、教えます',
      href: 'https://www.godeater.jp/fanclub/contents/?p=613',
      imgUrl: useAssetsUrl('news_top/01.jpg'),
      category: 6,
      new: true
    },
    {
      title: 'GOD EATER 3 キャラクターノベル',
      href: 'https://www.godeater.jp/fanclub/contents/?cat=10',
      imgUrl: useAssetsUrl('news_top/02.jpg'),
      category: 1,
      new: false
    },
    {
      title: 'GEオンライン ストーリーノベル',
      href: 'https://www.godeater.jp/fanclub/contents/?cat=9',
      imgUrl: useAssetsUrl('news_top/03.jpg'),
      category: 6,
      new: false
    },
    {
      title: '『イーターくんがゆく！オリジナルグッズをつくろう！』',
      href: 'https://www.godeater.jp/goods_project/',
      imgUrl: useAssetsUrl('news_top/04.jpg'),
      category: 4,
      new: false
    }
  ])

  return { topic }
})
