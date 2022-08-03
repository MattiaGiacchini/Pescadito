<template>
  <div class="mx-auto px-[10%] py-12 lg:px-[30%] lg:py-24 shadow-lg text-accent-500 flex flex-col gap-3">
    <div class="font-semibold text-2xl">{{$t('booking_title')}}</div>
    <form class="flex flex-col md:py-5">
      <div class="mb-4">
        <label for="name" class="block mb-1 text-sm font-medium ">{{$t('name')}}</label>
        <input type="name" id="name" v-model="name" class="bg-gray-50 border border-main-light-300 text-sm rounded-lg block w-full p-2.5" placeholder="Mattia" required>
      </div>
      <div class="mb-4">
        <label for="email" class="block mb-1 text-sm font-medium ">{{$t('email')}}</label>
        <input type="email" id="email" v-model="email" class="bg-gray-50 border border-main-light-300 text-sm rounded-lg block w-full p-2.5" placeholder="giacchini.mattia@gmail.com" required>
      </div>
      <div class="flex flex-row gap-2">
        <div class="mb-6 w-1/4">
          <label for="password" class="block mb-1 text-sm font-medium ">{{$t('persons')}}</label>
          <input type="number" id="persons" v-model="persons" class="bg-gray-50 border border-main-light-300 text-sm rounded-lg block w-full p-2.5" placeholder="2" required>
        </div>
        <div class="mb-6 w-3/4">
          <label for="password" class="block mb-1 text-sm font-medium ">{{$t('date')}}</label>
          <input type="date" id="date" v-model="date" class="bg-gray-50 border border-main-light-300 text-sm rounded-lg block w-full p-2.5" required>
        </div>
      </div>
      <Button type="primary" @click="submit" :disabled="!name || !email || !date || !persons" :loading="loading">{{$t('submit')}}</Button>
    </form>
  </div>
</template>

<script>
import Button from './general/Button.vue';
  export default {
    components: { Button },
    data() {
      return {
        name: null,
        email: null,
        date: null,
        persons: null,
        loading:false
      }
    },
    methods: {
      resetData() {
        this.name = null;
        this.email = null;
        this.persons = null;
        this.date = null;
      },
      submit() {
        this.loading = true;
        try {
          console.log(this.name, this.email, this.date, this.persons);
          this.resetData();
        } catch (error) {
          console.log(error)
        } finally {
          this.loading = false;
        }

      }
    }
}
</script>

<i18n>
{
  "en": {
    "booking_title": "Book now your table",
    "name": "Name",
    "email": "E-mail",
    "persons": "Persons",
    "date": "Date",
    "submit": "Book"
  },
  "es": {
    "booking_title": "Reserva ahora tu mesa",
    "name": "Nombre",
    "email": "Correo",
    "persons": "Personas",
    "date": "Fecha",
    "submit": "Reserva"
  }
}
</i18n>


