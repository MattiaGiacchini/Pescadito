<template>
  <div class="h-screen bg-stripes">
    <Header></Header>
    <div class="flex flex-col md:flex-row px-[10%] md:px-20% pt-10 mt-16 gap-5" v-if="!loading">
      <div class="w-1/2">
        <img :src="plate.image" :alt="plate.title" class="w-full rounded-lg">
      </div>
      <div class="w-1/2 flex flex-col p-2 text-accent-500">
        <div class="text-3xl font-bold">{{plate.title}}</div>
        <div class="text-lg font-light pt-1">{{plate.restaurantChain}}</div>
        <div class="text-lg font-semibold pt-5">{{plate.price || "25.00€"}}</div>
        <div class="pt-10 flex flex-col">
          <div class="text-sm font-bold">{{$t('values')}}</div>
          <div class="flex flex-col text-sm">
            <div>{{$t('carbs')}}: {{plate.nutrition.fat}}</div>
            <div>{{$t('protein')}}: {{plate.nutrition.protein}}</div>
            <div>{{$t('fat')}}: {{plate.nutrition.carbs}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      plate: {},
      loading: false,
    }
  },    
  head() {
    return {
      title: `Pescadito - ${this.plate.title}`
    }
  },
  async fetch() {
    this.loading = true;
    const response = await fetch(`https://api.spoonacular.com/food/menuItems/${this.$route.params.plate}?apiKey=da752c68625d49e9b243f84515103be2`).then(res => res.json());
    this.plate = response;
    this.loading = false;
  },
}
</script>

<style lang="scss" scoped>
.bg-stripes {
  background: repeating-linear-gradient(
    to right,
    #ebdece66,
    #ebdece66 10px,
    #c5b69b66 10px,
    #c5b69b66 20px
  );
}
</style>

<i18n>
{
  "en": {
    "values": "Values",
    "carbs": "Carbs",
    "protein": "Protein",
    "fat": "Fat"
  },
  "es": {
    "values": "Valores",
    "carbs": "Carbohidratos",
    "protein": "Proteínas",
    "fat": "Grasas"
  }
}
</i18n>