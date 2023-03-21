<script setup>
import { computed } from 'vue'

const props = defineProps({
  category: Number
})

const categoryTitle = computed(() => {
  switch (props.category) {
    case 1:
      return '家庭用ゲーム'
    case 2:
      return 'アプリゲーム'
    case 3:
      return 'キャンペーン'
    case 4:
      return 'グッズ'
    case 5:
      return 'イベント'
    case 6:
      return 'その他'
    default:
      return ''
  }
})
</script>

<template>
  <span
    v-bind="$attrs"
    class="[&.ca1]:text-[#326f3f] [&.ca2]:text-[#2180d0] [&.ca3]:text-[#863190] [&.ca4]:text-[#bf5d0d] [&.ca5]:text-[#cf3685] [&.ca6]:text-[#2920ed]"
    :class="`ca${category}`">
    {{ categoryTitle }}</span
  >&nbsp;&nbsp;
</template>
