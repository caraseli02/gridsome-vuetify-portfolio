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
      <picture>
        <source srcset="@/assets/img/thinking.webp 1x, @/assets/img/thinking.webp 2x" type="image/webp">
        <source srcset="@/assets/img/thinking.jpg 1x,  @/assets/img/thinking.jpg 2x" type="image/jpg">
        <g-image
            src="@/assets/img/thinking.jpg"
            class="mb-12"
            height="200px"
            contain
            quality="75"
            alt="work thinking"
        />
      </picture>
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
      <picture>
        <source srcset="@/assets/img/design.webp 1x, @/assets/img/design.webp 2x" type="image/webp">
        <source srcset="@/assets/img/design.jpg 1x,  @/assets/img/design.jpg 2x" type="image/jpg">
        <g-image
            src="@/assets/img/design.jpg"
            class="mb-12"
            height="200px"
            contain
            quality="75"
            alt="xd design"
        />
      </picture>
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
      <picture>
        <source srcset="@/assets/img/development.webp 1x, @/assets/img/development.webp 2x" type="image/webp">
        <source srcset="@/assets/img/development.jpg 1x,  @/assets/img/development.jpg 2x" type="image/jpg">
        <g-image
            src="@/assets/img/development.jpg"
            class="mb-12"
            height="200px"
            contain
            quality="75"
            alt="web development"
        />
      </picture>
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
      <picture>
        <source srcset="@/assets/img/deploy.webp 1x, @/assets/img/deploy.webp 2x" type="image/webp">
        <source srcset="@/assets/img/deploy.jpg 1x,  @/assets/img/deploy.jpg 2x" type="image/jpg">
        <g-image
            src="@/assets/img/deploy.jpg"
            class="mb-12"
            height="200px"
            contain
            quality="75"
            alt="web deploy"
        />
      </picture>
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
  data() {
    return {
      step: 1,
    }
  },

}
</script>

<style scoped>
small {
  margin-top: 8px;
}
</style>
