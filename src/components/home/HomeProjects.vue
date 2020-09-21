<template>
  <v-lazy

    v-model="isActive"
    :options="{
      threshold: .5
    }"
    min-height="200"
    transition="fade-transition"
  >
    <v-parallax
      dark
      :src="require('@/assets/parallax.jpg')"
      height="700px"
    >
      <v-row class="d-flex justify-center ">
        <article class="flex-fill py-12">
          <h4 class="display-1 text-center d-flex justify-center mb-8">
            Recent Projects
          </h4>
          <HomeProjectsCard/>
          <div class="d-flex d-lg-none justify-center align-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="42.079"
              viewBox="0 0 55 72.079"
            ><g transform="translate(-48.577)"><path
              d="M266.722,23.484h9.2a1.757,1.757,0,0,0,2.5,2.468l2.983-2.983a1.758,1.758,0,0,0,0-2.486L278.429,17.5a1.757,1.757,0,0,0-2.5,2.468h-9.2a1.758,1.758,0,1,0,0,3.516Z"
              transform="translate(-178.349 -13.999)"
              fill="#fff"
            /><path
              d="M280.17,77.444h-9.2a1.757,1.757,0,0,0-2.5-2.468l-2.983,2.983a1.758,1.758,0,0,0,0,2.486l2.983,2.983a1.757,1.757,0,0,0,2.5-2.468h9.2a1.758,1.758,0,0,0,0-3.516Z"
              transform="translate(-178.35 -61.372)"
              fill="#fff"
            /><path
              d="M90.138,35.633a8.034,8.034,0,0,0-2.723.478,7.646,7.646,0,0,0-6.75-4.07,8.183,8.183,0,0,0-1.9.223l0-24.618a7.647,7.647,0,0,0-15.293-.126v2.3A8.219,8.219,0,0,0,61.557,9.6a7.656,7.656,0,0,0-7.647,7.647V40.037A7.819,7.819,0,0,0,48.6,47.251c-.161,5.726.31,12.973,5.424,18.233,4.314,4.437,11.056,6.594,20.609,6.594,8.6,0,14.967-2.535,18.919-7.534,2.776-3.511,4.243-8.24,4.243-13.674l-.013-7.6A7.655,7.655,0,0,0,90.138,35.633Zm-15.5,32.93c-20.143,0-22.829-10.211-22.519-21.213a4.353,4.353,0,0,1,4.221-4.221V48c0,.612.424.683.551.683s.537-.07.537-.682V17.248a4.132,4.132,0,0,1,4.131-4.132,3.841,3.841,0,0,1,4.093,3.577c0,.008-.015,19.7-.015,19.7a.673.673,0,0,0,1.346,0V7.579a4.131,4.131,0,0,1,8.261.068l0,31.609a.663.663,0,1,0,1.325,0v-.171c0-2.077,2.019-3.527,4.1-3.527a4.124,4.124,0,0,1,4.123,4.132l.008,3.028a.645.645,0,1,0,1.289,0l0-.23c0-1.889,2.044-3.338,4.055-3.338A4.132,4.132,0,0,1,94.27,43.28l.013,7.591C94.283,57.931,91.538,68.563,74.636,68.563Z"
              transform="translate(0)"
              fill="#fff"
            /></g></svg>
          </div>
        </article>
      </v-row>
    </v-parallax>
  </v-lazy>
</template>

<script>

  import HomeProjectsCard from '@/components/home/HomeProjectsCard'
  export default {
    components: { HomeProjectsCard },
    data () {
      return {
        isActive: false,
      }
    },
  }
</script>

<style scoped>

</style>
