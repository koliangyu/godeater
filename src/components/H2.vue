<script setup></script>

<template>
  <h2 class="mx-auto my-0 px-0 py-[30px] font-oswald text-center text-[3.4rem] md:text-[5.5rem]">
    <span
      class="bg-[url('/src/assets/images/common/icon_arrow_red_left.png'),url('/src/assets/images/common/icon_arrow_red_right.png')] bg-[position:center_left,center_right] bg-no-repeat bg-[length:auto_70%] px-[90px] py-0 leading-none text-[#bb0009] md:bg-[length:auto_60%] md:px-[110px] md:py-0">
      <slot />
    </span>
  </h2>
</template>
