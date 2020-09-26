<template>
  <Layout class="home">
    <!--<v-sheet v-if="loading" width="100vh" height="100vh" class="d-flex flex-column justify-space-between align-baseline" >
      <Loader/>
    </v-sheet>-->
    <main >
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
      >{{ $t('projectsBtn') }}</v-btn>
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
    </main>
  </Layout>
</template>

<script>

  import HomeAbout from '@/components/home/HomeAbout'
  import HomeIntro from '@/components/home/HomeIntro'
  import HomeProjects from '@/components/home/HomeProjects'
  import Loader from "../components/loader";
  export default {
    data() {
      return {
        loading: true
      }
    },
    components: {Loader, HomeProjects, HomeIntro, HomeAbout },
    /*mounted() {
      setTimeout(() => this.loading = false, 500);
    }*/
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
