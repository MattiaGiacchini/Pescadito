<template>
  <div class="mx-auto px-[15%] py-10 flex flex-col sm:flex-row justify-between">
    <div class="flex flex-col   lg:w-1/2 md:pt-10">
      <div class="flex flex-col gap-1 md:w-5/6">
        <div class="text-3xl lg:text-5xl font-bold text-accent-500">{{$t('title')}}</div>
        <div class="text-md lg:text-xl font-light text-accent-500">{{$t('subtitle')}}</div>
      </div>
      <div class="flex flex-row gap-5 w-fit pt-5">
        <Button type="primary" @click="goToMenu">{{$t('menu_button')}}</Button>
      </div>
    </div>
    <img :src="`${require(`~/assets/images/chef.svg`)}`" class="w-1/2 xl:max-w-xl lg:max-w-lg hidden lg:block"/>
  </div>
</template>

<script>
import Button from './general/Button.vue';
  export default {
    components: { Button },
    methods: {
      goToMenu() {
        this.$emit("goToMenu");
      }
    }
}
</script>

<i18n>
{
  "en": {
    "title": "Eat and relax on the beach",
    "subtitle": "Fish foos and feet in the sand looking at the sea",
    "menu_button": "Menu"
  },
  "es": {
    "title": "Come y relajate en la playa",
    "subtitle": "Comida de pescado y pies en la arena mirando el mar",
    "menu_button": "Carta"
  }
}
</i18n>