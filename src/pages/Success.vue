<template>
  <layout>
    <v-sheet width="100vw" height="100vh" class="d-flex justify-center align-center flex-column">
      <svg xmlns="http://www.w3.org/2000/svg" width="350" height="315" viewBox="0 0 570 511.675">
        <path
            d="M880,389.837a1,1,0,0,1-.571-.179L602.87,197.055a5.016,5.016,0,0,0-5.729.01L322.574,389.656a1,1,0,1,1-1.149-1.638L595.993,195.427a7.022,7.022,0,0,1,8.02-.013l276.559,192.6a1,1,0,0,1-.572,1.821Z"
            transform="translate(-315 -194.163)" fill="#3f3d56"/>
        <path d="M23.264,202.5,285.276,8.319l264,208-250.5,148.5-136-31Z" fill="#e6e6e6"/>
        <path d="M489.256,650.7H359.815a6.047,6.047,0,0,1,0-12.095h129.44a6.047,6.047,0,0,1,0,12.095Z"
              transform="translate(-315 -194.163)" fill="#23c2a8"/>
        <path d="M406.256,624.7h-46.44a6.047,6.047,0,0,1,0-12.095h46.44a6.047,6.047,0,0,1,0,12.095Z"
              transform="translate(-315 -194.163)" fill="#23c2a8"/>
        <path
            d="M603.96,504.822a7.564,7.564,0,0,1-2.869-.562L439.5,437.211V227.337a7.008,7.008,0,0,1,7-7h310a7.008,7.008,0,0,1,7,7v210.02l-.3.13-156.28,66.74a7.617,7.617,0,0,1-2.956.595Z"
            transform="translate(-315 -194.163)" fill="#fff"/>
        <path
            d="M603.96,505.322a8.072,8.072,0,0,1-3.06-.6L439,437.545V227.337a7.508,7.508,0,0,1,7.5-7.5h310a7.509,7.509,0,0,1,7.5,7.5V437.688l-156.888,67A8.11,8.11,0,0,1,603.96,505.322ZM441,436.209l160.663,66.665a6.118,6.118,0,0,0,4.668-.028L762,436.367V227.337a5.507,5.507,0,0,0-5.5-5.5h-310a5.507,5.507,0,0,0-5.5,5.5Z"
            transform="translate(-315 -194.163)" fill="#3f3d56"/>
        <path
            d="M878,387.837h-.2L763,436.857l-157.07,67.07a5.066,5.066,0,0,1-3.88.02L440,436.717l-117.62-48.8-.18-.08H322a7.008,7.008,0,0,0-7,7v304a7.008,7.008,0,0,0,7,7H878a7.008,7.008,0,0,0,7-7v-304A7.008,7.008,0,0,0,878,387.837Zm5,311a5,5,0,0,1-5,5H322a5,5,0,0,1-5-5v-304a5.011,5.011,0,0,1,4.81-5L440,438.877,601.28,505.8a7.121,7.121,0,0,0,5.44-.03L763,439.027l115.2-49.19a5.016,5.016,0,0,1,4.8,5Z"
            transform="translate(-315 -194.163)" fill="#3f3d56"/>
        <path
            d="M602.345,445.31a27.5,27.5,0,0,1-16.546-5.5l-.3-.222-62.311-47.708a27.683,27.683,0,1,1,33.674-43.949l40.36,30.948L692.6,254.5a27.682,27.682,0,0,1,38.813-5.124l-.593.805.608-.793a27.714,27.714,0,0,1,5.123,38.813L624.369,434.506A27.7,27.7,0,0,1,602.345,445.31Z"
            transform="translate(-315 -194.163)" fill="#5ac985"/>
      </svg>
      <h5 class="d-flex justify-center align-center display-1 mt-6">Mail sent</h5>
      <v-btn link to="/contact" class="mt-6"> Rediret to Home Page in {{ timerCount }}
        <v-btn text loading></v-btn>
      </v-btn>

    </v-sheet>
  </layout>
</template>

<script>
export default {
  name: "Success",
  data() {
    return {
      timerCount: 4
    }
  },
  created() {
    setTimeout(() => this.$router.push('/' + this.$context.locale.slice(0, 2) + '/'), 2000);
  },
  watch: {

    timerCount: {
      handler(value) {

        if (value > 0) {
          setTimeout(() => {
            this.timerCount--;
          }, 1000);
        }

      },
      immediate: true // This ensures the watcher is triggered upon creation
    }

  }
}
</script>

<style scoped>

</style>
