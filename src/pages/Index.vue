<template>
  <Layout class="home">
    <br>
    <!--Link to projects section-->
    <v-sheet
      width="100vw"
      height="100vh"
      class="d-none align-self-end d-sm-flex justify-center align-end align-sm-center setPosition"
    >
      <v-btn
        class="setZindex"

        outlined
        @click="$vuetify.goTo('#homeProjects')"
      >
        <v-icon>mdi-chevron-double-down</v-icon>
        checkup my projects
      </v-btn>
    </v-sheet>
    <home-intro />
    <home-projects id="homeProjects" />
    <v-lazy
      v-model="isActive"
      :options="{
        threshold: .5
      }"
      min-height="200"
      transition="fab-transition"
    >
      <home-about />
    </v-lazy>/
  </Layout>
</template>

<script>

  import HomeAbout from '@/components/home/HomeAbout'
  import HomeIntro from '@/components/home/HomeIntro'
  import HomeProjects from '@/components/home/HomeProjects'
  export default {
    components: { HomeProjects, HomeIntro, HomeAbout },
  }
</script>

<style scoped>
.setPosition {
  position: absolute;
  background: transparent;
}
.setZindex{
  z-index: 99;
}
</style>
