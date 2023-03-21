import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useNewsStore = defineStore('news', () => {
  const news = ref([
    {
      title: '「GOD EATER OFFICIAL FANCLUB MEMBERS」会員サービス終了のお知らせ',
      href: '/news/detail/89',
      date: '2022.03.02',
      category: 6
    },
    {
      title: '【10周年】イベントスケジュールを掲載いたしました！',
      href: 'https://www.godeater.jp/10thanniversary/',
      date: '2020.12.11',
      category: 3,
      target: '_blank'
    },
    {
      title: '『GOD EATER』徹底解剖10CONTENTS　第10回　GEの武器「神機」の秘密、教えます',
      href: 'https://www.godeater.jp/fanclub/contents/?p=613',
      date: '2020.09.29',
      category: 6,
      target: '_blank'
    }
  ])

  return { news }
})
