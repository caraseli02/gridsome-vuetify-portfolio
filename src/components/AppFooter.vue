<template>
  <v-footer
    dark
    padless
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title :class="$vuetify.breakpoint.xsOnly? 'gradiant d-flex flex-column' : 'gradiant' ">
        <span class="pa-0 d-flex justify-center">
          My social networks!
        </span>

        <v-spacer />
        <span v-for="icon in icons">
          <v-btn
            :key="icon.id"
            class="mx-4 my-2"
            dark
            icon
            :href="icon.link"
          >
            <v-btn :color="icon.color" class="text-body-1" link rounded>{{ icon.name }}</v-btn>
          </v-btn></span>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Vlad Portfolio</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script >
  export default {
    data () {
      return {
        icons: [
          { color: '#0D8CF0' ,name: 'f', link: 'https://www.facebook.com/profile.php?id=100004768486469' },
          { color: '#0073B0' ,name: 'in', link: 'https://www.linkedin.com/in/caraseli-vadislav-61549b136/' },
          { color: 'red' ,name: 'g', link: 'mailto:vladwebapp@gmail.com' },
        ],
      }
    },
  }

</script>

<style scoped>
.gradiant {
  background: linear-gradient(to left, #16c0b0, #84cf6a);
}
</style>
