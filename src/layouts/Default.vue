<template>
  <v-app>
    <app-nav />
    <slot />
    <app-footer />
  </v-app>
</template>

<script>

  import AppNav from '@/components/AppNav'
  import AppFooter from '@/components/AppFooter'

  export default {
    components: {
      AppFooter,
      AppNav,
    },
  }
</script>

<style>
* {
  font-family: 'Roboto Mono', monospace;
}

.gradient {
  background: linear-gradient(to right, #16c0b0, #84cf6a);
}
</style>
