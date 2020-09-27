<template>
  <transition
    appear
    :css="false"
    @before-enter="beforeEnter"
    @enter="onIntersect"
  >
    <v-container class="py-12">
      <v-row no-gutters>
        <v-col
          class="d-flex flex-column justify-center items-center mb-9"
          cols="12"
          md="6"
        >
          <h4 class="d-flex justify-center items-center mb-4 display-1">
            How I Work:
          </h4>
          <HomeStepper/>
        </v-col>
        <v-col
          cols="12"
          md="5"
          offset="1"
          class="d-flex justify-center flex-column"
        >
          <h3 class="">
            {{ $t('AboutMe[0]') }}
          </h3>
          <br>
          <p>
            {{ $t('AboutMe[1]') }}<br> {{ $t('AboutMe[2]') }}
          </p>
          <p>{{ $t('AboutMe[3]') }} <br>{{ $t('AboutMe[4]') }}</p>
          <br>
          <h3 class="my-4">
            {{ $t('Opportunities') }}
          </h3>
          <p>Fullstack developer with focus on<br> Python(Flask, FastAPI) + Vue</p>
          <p>Fullstack developer Python</p>
          <p>FrontEnd developer Vue</p>
        </v-col>
      </v-row>
    </v-container>
  </transition>
</template>

<script>
  import { gsap } from 'gsap'
  import HomeStepper from '@/components/home/HomeStepper'

  export default {
    components: { HomeStepper },

    methods: {
      beforeEnter (el) {
        el.style.opacity = 0
        el.style.transform = 'scale(0,0)'
      },
      onIntersect (el, done) {
        gsap.to(el, {
          duration: 1,
          opacity: 1,
          scale: 1,
          ease: 'left',
          onComplete: done,
        })
      },
    },
  }
</script>

<style scoped>
ul > li:first-child {
  font-weight: 900;
  font-size: 20px;
}

li {
  list-style-type: none;
}

@media (min-width: 760px) {
  h3{
    font-size: 2rem;
  }
  p{
    font-size: 1.3rem;
    width: 80%;
  }
}

</style>
