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
h1, h2, h3, h4, h5, h6, strong {
  font-family: 'Russo One', sans-serif;
  font-weight: 500;
}

p, li, span, label, input, textarea {
  font-family: 'Roboto Mono', monospace;
}

.gradient {
  background: linear-gradient(to right, #16c0b0, #84cf6a);
}
</style>
