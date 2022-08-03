<template>
  <nuxt-link :to="`products/${id}`" class="bg-main-light-500 flex flex-col w-[300px] hover:cursor-pointer" @click="click">
    <div class="text-lg text-accent-500 font-bold truncate ... max-w-full">{{title}}</div>
    <div class="text-sm font-extralight">{{restaurant}}</div>
    <img :src="image" class="w-full max-h-[200px] min-h-[200px] pt-1"/>
  </nuxt-link>
</template>

<script>
  export default {
    props: {
      id: {
        type: Number, 
        required: true,
      },
      title: {
        type: String, 
        required: true,
      },
      image: {
        type: String, 
        required: true,
      },
      restaurant: {
        type: String, 
        required: true,
      },
    },
    methods: {
      click() {
        console.log(this.id)
      }
    }
}
</script>
