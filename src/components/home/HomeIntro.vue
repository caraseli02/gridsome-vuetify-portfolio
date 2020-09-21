<template class="">
  <v-sheet
    height="98vh"
    class="px-6 d-flex flex-column justify-space-around justify-sm-space-between pt-sm-16 pt-8 pb-sm-6 pb-xl-0"
  >
    <div class="setBorderLT order-0">
      <p class="pt-4 d-flex text-right justify-end pt-4 text--primary">
        First, solve the problem.<br> Then, write the code.
      </p>
      <span class="d-flex justify-end font-italic text-body-2">" John Johnson "</span>
    </div>
    <div
      class="setBG"
      :class="$vuetify.breakpoint.xsOnly? 'order-1' : 'order-2 d-flex justify-end'"
    >
      <g-image
        :src="getImgUrl()"
        contain
        alt="Vlad Caraseli"
      />
    </div>
    <div :class="$vuetify.breakpoint.xsOnly? 'order-2' : 'order-1 setWidth mt-12 pl-4'">
      <h4
        class="font-weight-bold"
        :class="$vuetify.breakpoint.smAndDown? 'display-1' : 'display-2'"
      >
        <span class="Color1">Hi,</span>
        my name is Vlad.
      </h4>
      <div
        class="text-body-1 d-none d-sm-block"
        :style="$vuetify.breakpoint.xsOnly ? '' : 'width: 50%;'"
      >
        <p class="mt-2">
          I’m programmer, developer and designer.
        </p>
        <p>
          My passion is to build modern and fast by default web apps.
        </p>
      </div>
    </div>
    <v-btn
      class="setZindex order-3 d-sm-none"

      outlined
      @click="$vuetify.goTo('#homeProjects')"
    >
      <v-icon>mdi-chevron-double-down</v-icon>
      checkup my projects
    </v-btn>
  </v-sheet>
</template>

<script>
  import { gsap } from 'gsap'

  export default {
    data () {
      return {
        myFilename: this.$vuetify.breakpoint.xsOnly ? 'profile_302.png' : 'profile_945.png',
      }
    },
    methods: {
      beforeEnter (el) {
        el.style.opacity = 0
        el.style.transform = 'scale(0,0)'
      },
      enter (el, done) {
        gsap.to(el, {
          duration: 1,
          opacity: 1,
          scale: 1,
          ease: 'left',
          onComplete: done,
        })
      },
      getImgUrl () {
        return require('@/assets/img/' + this.myFilename)
      },
    },
  }
</script>

<style scoped>

.Color1 {
  color: #4CC78D;
}

.setBorderRB {
  border-bottom: 2px solid #19C0AE;
  border-right: 2px solid #19C0AE;
}

.setBorderLT {
  border-top: 2px solid #19C0AE;
  border-left: 2px solid #19C0AE;
}

@media (min-width: 700px) and (max-width: 1024px) {
  .setBG {
    background-image: url("../../assets/fondo.svg");
  }
}

@media (min-width: 1024px) {
  .setBG {
    background-image: url("../../assets/fondoXL.svg");
    background-size: contain;
  }
}

</style>
