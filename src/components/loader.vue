<template>
  <v-sheet
      :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
      class="px-3 pt-16 pb-3 "
      width="100vw" height="100vh"
  >
    <v-skeleton-loader
        class="mx-auto mt-16"
        max-width="100vw"
        max-height="100vh"
        type="card"
    ></v-skeleton-loader>
    <v-skeleton-loader
        class="mx-auto mt-16"
        max-width="100vw"
        max-height="100vh"
        type="card"
    ></v-skeleton-loader>
  </v-sheet>
</template>


<script>
export default {
  // Vuetify components provide
  // a theme variable that is
  // used to determine dark
  inject: ['theme'],
}
</script>
