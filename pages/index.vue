<template>
  <div class="h-full bg-stripes max-h-full">
    <Header></Header>
    <Hero @goToMenu="goToMenu" class="mt-16"></Hero>
    <Menu ref="menu"></Menu>
    <Contact ref="contact" id="contact"></Contact>
    <Footer></Footer>
  </div>
</template>

<script>
import Menu from '../components/Menu.vue';
import Contact from '../components/Contact.vue';
import Footer from '../components/Footer.vue';
export default {
    name: "IndexPage",
    components: { Menu, Contact, Footer },
    methods: {
      goToMenu() {
        console.log(this.$refs)
        this.$refs["menu"].$el.scrollIntoView({ behavior: "smooth" });
      },
    },
    head() {
      return {
        title: "Pescadito"
      }
    }
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