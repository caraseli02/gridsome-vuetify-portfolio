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
          <h4 class="d-flex justify-center items-center mb-4">
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
          <h4 class="mb-4">
            More about me
          </h4>
          <br>
          <p>
            I enjoy to build new projects, and study new awesome technologies.<br> A lot of my free time is dedicate
            for
            studying and practicing.
          </p>
          <p>I'm open to discover new things. <br>And my interest is to find a great team & projects.</p>
          <br>
          <h4 class="my-4">
            Looking For New Opportunities like
          </h4>
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
    data () {
      return {
        knowledges: [
          ['Design stage:', 'XD', 'Unsplash', 'Pexels'],
          ['Development stage:', 'Pycharm', 'Webstorm', 'VSCode'],
          ['Launch stage:', 'Heroku', 'Netlify', 'Digitalocean'],
        ],
      }
    },

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

</style>
