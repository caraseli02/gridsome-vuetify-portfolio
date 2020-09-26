<template>
  <v-stepper
    v-model="step"
    vertical
  >
    <v-stepper-step
      :complete="step > 1"
      step="1"
    >
      Thinking stage
      <small>Ideas, research, define functionality </small>
    </v-stepper-step>

    <v-stepper-content step="1">
      <g-image
        src="@/assets/img/thinking.webp"
        class="mb-12"
        height="200px"
        contain
        quality="75"
        alt="work thinking"
      />
      <v-btn
        color="primary"
        @click="step = 2"
      >
        Next
      </v-btn>
    </v-stepper-content>

    <v-stepper-step
      :complete="step > 2"
      step="2"
    >
      Design stage
      <small>Adobe XD Prototyping</small>
    </v-stepper-step>

    <v-stepper-content step="2">
      <g-image
        src="@/assets/img/design.webp"
        class="mb-12"
        height="200px"
        contain
        quality="75"
        alt="xd design"
      />
      <v-btn
        color="primary"
        @click="step = 3"
      >
        Next
      </v-btn>
    </v-stepper-content>

    <v-stepper-step
      :complete="step > 3"
      step="3"
    >
      Development stage
      <small>PyCharm, WebStorm, VSCode</small>
    </v-stepper-step>

    <v-stepper-content step="3">
      <g-image
        src="@/assets/img/development.webp"
        class="mb-12"
        height="200px"
        contain
        quality="75"
        alt="web development"
      />
      <v-btn
        color="primary"
        @click="step = 4"
      >
        Next
      </v-btn>
    </v-stepper-content>

    <v-stepper-step step="4">
      Launch stage
      <small class="text-body-2">Heroku, Netlify, DigitalOcean</small>
    </v-stepper-step>
    <v-stepper-content step="4">
      <g-image
        src="@/assets/img/deploy.webp"
        class="mb-12"
        height="200px"
        contain
        quality="75"
        alt="web deploy"
      />
      <v-btn
        color="primary"
        @click="step = 1"
      >
        Next
      </v-btn>
    </v-stepper-content>
  </v-stepper>
</template>

<script>

  export default {
    data () {
      return {
        step: 1,
      }
    },

  }
</script>

<style scoped>
small{
  margin-top: 8px;
}
</style>
