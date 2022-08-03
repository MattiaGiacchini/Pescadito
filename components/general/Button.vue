<template>
    <button
    class="box-border transition-all duration-100 flex w-full disabled:opacity-70 disabled:pointer-events-none disabled:cursor-not-allowed border border-transparent text-sm font-medium focus:outline-none justify-center align-middle items-center px-5 py-2.5 rounded-lg"
    :class="`${type}`"
    :disabled="disabled || loading"
    @click.prevent="handleClick"
    v-bind="$attrs"
    :aria-disabled="disabled || loading"
  >
    <Loading
      v-if="loading"
      :class="type === 'primary' ? 'fill-main-light-500' : 'fill-accent-500'"
    />
    <slot></slot>
  </button>
</template>

<script>
import Loading from './Loading.vue';
  export default {
    props: {
        loading: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        type: {
            type: String,
            values: () => ["primary", "secondary", "tertiary"],
            required: true,
        }
    },
    methods: {
        handleClick(event) {
            this.$emit("click", event);
        },
    },
    components: { Loading }
}
</script>

<style lang="scss" scoped>
  .primary {
    @apply bg-accent-500 text-main-light-500 border-2 hover:bg-main-light-500 hover:text-accent-500 border-accent-500;
  }
  .secondary {
    @apply bg-main-light-500 text-accent-500 border-collapse border-2 border-accent-500 hover:bg-accent-500 hover:text-main-light-500 ;
  }
  .tertiary {
    @apply text-accent-500 border-2 border-transparent hover:border-accent-500;
  }
</style>