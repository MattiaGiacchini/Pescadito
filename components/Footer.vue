<template>
  <div class="mx-auto px-[10%] py-5 lg:py-2 flex lg:flex-row-reverse flex-col gap-5 lg:gap-0 justify-between bg-accent-500 text-main-light-500 items-center w-full shadow-lg">
    <nuxt-link to="/" class="font-bold text-4xl flex flex-row gap-2 align-middle items-start lg:justify-end w-full">
      <img :src="`${require('~/assets/images/logo.svg')}`" class="w-10 h-10" />
      {{$t('company_name')}}
    </nuxt-link>
    <div class="flex flex-col md:flex-row w-full">
      <div class="flex flex-col">
        <p class="font-bold pb-1">{{$t('contacts')}}</p>
        <p>{{$t('phone')}}: <a href="tel:+393662050235">+39 366 20 50 235</a></p>
        <p>{{$t('email')}}: <a href="mailto:giacchini.mattia@gmail.com">giacchini.mattia@gmail.com</a></p>
      </div>
      <div class="flex flex-col">
      </div>
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
    "contacts": "Contacts",
    "phone": "Phone",
    "email": "E-mail"
  },
  "es": {
    "company_name": "Pescadito",
    "contacts": "Contactos",
    "phone": "Tel",
    "email": "Correo"
  }
}
</i18n>