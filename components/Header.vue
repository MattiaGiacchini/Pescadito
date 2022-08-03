<template>
  <div class="mx-auto px-[10%] h-16 flex flex-row justify-between bg-main-light-500 items-center fixed top-0 w-full shadow-lg">
    <nuxt-link to="/" class="text-accent-500 font-bold text-4xl flex flex-row gap-2 align-middle items-center">
      <img :src="`${require('~/assets/images/logo.svg')}`" class="w-10 h-10" />
      {{$t('company_name')}}
    </nuxt-link>
    <div class="flex flex-row gap-5 text-accent-500 font-semibold">
      <nuxt-link to="/" class="text-border">{{$t('home')}}</nuxt-link>
      <nuxt-link :to="{ path: '/', hash:'contact' }" class="text-border">{{$t('book')}}</nuxt-link>
      
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
  .text-border:hover {
    text-shadow: 2px 0 #fff2e2, -2px 0 #fff2e2, 0 2px #fff2e2, 0 -2px #fff2e2,
               1px 1px #fff2e2, -1px -1px #fff2e2, 1px -1px #fff2e2, -1px 1px #fff2e2;
  }
</style>

<i18n>
{
  "en": {
    "company_name": "Pescadito",
    "book": "Book",
    "home": "Home"
  },
  "es": {
    "company_name": "Pescadito",
    "book": "Reserva",
    "home": "Home"
  }
}
</i18n>
