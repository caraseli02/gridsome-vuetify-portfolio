<template class="">
  <v-sheet
      height="100vh"
      class="px-6 d-flex flex-column justify-space-around justify-sm-space-between pt-sm-16 pt-8 pb-sm-6 pb-md-0"
  >
    <div class="setBorderLT order-0">
      <p class="pt-4 d-flex text-right justify-end pt-4 text--primary">
        First, solve the problem.<br> Then, write the code.
      </p>
      <span class="d-flex justify-end font-italic text-body-2">" John Johnson "</span>
    </div>
    <div
        class="setBG d-flex justify-center justify-sm-end"
        :class="$vuetify.breakpoint.xsOnly? 'order-1' : 'order-2 d-flex justify-center justify-sm-end'"
    >
      <picture>
        <source srcset="@/assets/img/profile_945.webp 1x, @/assets/img/profile_945.webp 2x" type="image/webp">
        <source srcset="@/assets/img/profile_945.jpg 1x  @/assets/img/profile_945@2x.jpg 2x" type="image/jpg">
        <g-image v-if="$vuetify.breakpoint.smAndUp"
                 src="@/assets/img/profile_945.jpg"
                 fit="cover"
                 width="550"
                 height="550"
                 alt="Vlad Caraseli"
                 quality="75"
        />
        <g-image v-if="$vuetify.breakpoint.xsOnly"
                 src="@/assets/img/profile_945.jpg"
                 fit="cover"
                 width="300"
                 height="300"
                 alt="Vlad Caraseli"
                 quality="75"
        />
      </picture>

    </div>
    <div :class="$vuetify.breakpoint.xsOnly? 'order-2' : 'order-1 setWidth mt-12 pl-4'">
      <h4
          class="font-weight-bold"
          :class="$vuetify.breakpoint.smAndDown? 'display-1' : 'display-2'"
      >
        <span class="Color1">{{ $t('textIntro[0]')}}</span>
        {{ $t('textIntro[1]') }}
      </h4>
      <div
          class="text-body-1 d-none d-sm-block"
          :style="$vuetify.breakpoint.xsOnly ? '' : 'width: 50%;'"
      >
        <p class="mt-2 ">
          {{ $t('textIntro[2]') }}
        </p>
        <p>
          {{ $t('textIntro[3]') }}
        </p>
      </div>
    </div>
    <v-btn
        class="setZindex order-3 d-sm-none"
        outlined
        @click="$vuetify.goTo('#homeProjects')"
    >
      <v-icon class="mr-2">&#8595;</v-icon>
      {{ $t('projectsBtn') }}
    </v-btn>
  </v-sheet>
</template>

<script>
import {gsap} from 'gsap'

export default {
  data() {
    return {
      myFilename: this.$vuetify.breakpoint.xsOnly ? 'profile_302.png' : 'profile_945.png',
    }
  },
  methods: {
    beforeEnter(el) {
      el.style.opacity = 0
      el.style.transform = 'scale(0,0)'
    },
    enter(el, done) {
      gsap.to(el, {
        duration: 1,
        opacity: 1,
        scale: 1,
        ease: 'left',
        onComplete: done,
      })
    },
    getImgUrl() {
      return require('!!assets-loader!@/assets/img/' + this.myFilename)
    },
  },
}
</script>

<style scoped>


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
p{
  font-size: 1.2rem;
}

</style>
