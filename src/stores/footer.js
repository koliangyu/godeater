import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useAssetsUrl } from '../composables/useAssetsUrl'

export const useFooterStore = defineStore('footer', () => {
  const share = ref([
    {
      name: 'Twitter',
      href: 'https://twitter.com/intent/tweet?text=%E3%82%B4%E3%83%83%E3%83%89%E3%82%A4%E3%83%BC%E3%82%BF%E3%83%BC%20%E3%82%AA%E3%83%95%E3%82%A3%E3%82%B7%E3%83%A3%E3%83%AB%E3%82%A6%E3%82%A7%E3%83%96%20%7C%20%E3%83%90%E3%83%B3%E3%83%80%E3%82%A4%E3%83%8A%E3%83%A0%E3%82%B3%E3%82%A8%E3%83%B3%E3%82%BF%E3%83%BC%E3%83%86%E3%82%A4%E3%83%B3%E3%83%A1%E3%83%B3%E3%83%88%E5%85%AC%E5%BC%8F%E3%82%B5%E3%82%A4%E3%83%88&url=https%3A%2F%2Fwww.godeater.jp%2F',
      imgUrl: useAssetsUrl('common/btn_twitter.png')
    },
    {
      name: 'facebook',
      href: 'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.godeater.jp%2F',
      imgUrl: useAssetsUrl('common/btn_fb.png')
    },
    {
      name: 'LINE',
      href: 'https://line.me/R/msg/text/%E3%82%B4%E3%83%83%E3%83%89%E3%82%A4%E3%83%BC%E3%82%BF%E3%83%BC%20%E3%82%AA%E3%83%95%E3%82%A3%E3%82%B7%E3%83%A3%E3%83%AB%E3%82%A6%E3%82%A7%E3%83%96%20%7C%20%E3%83%90%E3%83%B3%E3%83%80%E3%82%A4%E3%83%8A%E3%83%A0%E3%82%B3%E3%82%A8%E3%83%B3%E3%82%BF%E3%83%BC%E3%83%86%E3%82%A4%E3%83%B3%E3%83%A1%E3%83%B3%E3%83%88%E5%85%AC%E5%BC%8F%E3%82%B5%E3%82%A4%E3%83%88%20https%3A%2F%2Fwww.godeater.jp%2F',
      imgUrl: useAssetsUrl('common/btn_line.png')
    }
  ])

  const bnr = ref([
    {
      name: 'GOD EATER 3',
      href: 'https://ge3.godeater.jp/',
      imgUrl: useAssetsUrl('common/bnr_ge3.jpg')
    },
    {
      name: 'GOD EATER 究極一閃',
      href: 'https://www.sansei-rd.com/products18/p_god_eater_ki/',
      imgUrl: useAssetsUrl('common/bnr_ki.jpg')
    }
  ])

  return { share, bnr }
})
