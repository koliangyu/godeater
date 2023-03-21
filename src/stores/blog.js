import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useBlogStore = defineStore('blog', () => {
  const blog = ref([
    {
      title: '10/9(金)~25(日)開催！「GOD EATER展 10th ANNIVERSARY」のご紹介③ ～物販編～',
      subtitle: '皆さま、こんにちは。 商品企画部隊のブルーです。 &#160; 2020年10月9日からGOD E...',
      href: 'https://blog.godeater.jp/?p=1416',
      date: '2020.10.16',
      target: '_blank'
    },
    {
      title: '10/9(金)~25(日)開催！「GOD EATER展 10th ANNIVERSARY」のご紹介②～展示編～',
      subtitle: '皆さま、こんにちは。 商品企画部隊のブルーです。 &#160; 2020年10月9日からGOD E...',
      href: 'https://blog.godeater.jp/?p=1414',
      date: '2020.10.16',
      target: '_blank'
    },
    {
      title: '10/9(金)~25(日)開催！「GOD EATER展 10th ANNIVERSARY」のご紹介①',
      subtitle: '皆さま、こんにちは。 商品企画部隊のブルーです。 &#160; 2020年10月9日からGOD E...',
      href: 'https://blog.godeater.jp/?p=1409',
      date: '2020.10.15',
      target: '_blank'
    }
  ])

  return { blog }
})
