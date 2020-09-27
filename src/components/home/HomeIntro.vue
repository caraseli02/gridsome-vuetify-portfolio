<template class="">
  <v-sheet
      height="100vh"
      class=" px-6 d-flex flex-column flex-md-row justify-space-around justify-sm-end pt-sm-16 pt-8 pb-6 pb-sm-0"
      :class="this.$vuetify.theme.dark? 'setBGDark' : 'setBGLight' "
  >
    <div class="setBorderLT intro order-0 setPosition">
      <p class="pt-4 d-flex text-right justify-end pt-4 text--primary">
        First, solve the problem.<br> Then, write the code.
      </p>
      <span class="d-flex justify-end font-italic text-body-2">" John Johnson "</span>
    </div>
    <div
        class="intro flex-xl-grow-1 self-end align-self-end d-flex justify-space-around justify-sm-end"
        :class="$vuetify.breakpoint.xsOnly? 'order-1' : 'order-2'"
    >
      <picture class="d-flex justify-end">
        <source srcset="@/assets/img/profile_945.webp 1x, @/assets/img/profile_945.webp 2x" type="image/webp">
        <source srcset="@/assets/img/profile_945.png 1x  @/assets/img/profile_945.png 2x" type="image/png">

        <g-image v-if="$vuetify.breakpoint.xlOnly"
                 src="@/assets/img/profile_945.png"
                 fit="contain"
                 alt="Vlad Caraseli"
                 quality="75"
        />
        <g-image v-if="$vuetify.breakpoint.smOnly || $vuetify.breakpoint.mdOnly || $vuetify.breakpoint.lgOnly"
                 src="@/assets/img/profile_945.png"
                 fit="contain"
                 width="730"
                 height="650"
                 alt="Vlad Caraseli"
                 quality="75"
        />
        <g-image v-if="$vuetify.breakpoint.xsOnly"
                 src="@/assets/img/profile_945.jpg"
                 fit="cover"
                 width="350"
                 height="300"
                 alt="Vlad Caraseli"
                 quality="75"
        />
      </picture>

    </div>
    <div :class="$vuetify.breakpoint.xsOnly? 'order-2 intro ' : 'flex-xl-grow-1  align-center align-self-end mb-16 intro pl-4'">
      <h4
          class="font-weight-bold"
          :class="$vuetify.breakpoint.smAndDown? 'display-1' : 'display-2'"
      >
        <span class="Color1">{{ $t('textIntro[0]')}}</span>
        {{ $t('textIntro[1]') }}
      </h4>
      <div
          class="text-body-1"
          :style="$vuetify.breakpoint.xsOnly ? '' : 'width: 50%;'"
      >
        <p class="introSubtitle mt-2 ">
          {{ $t('textIntro[2]') }}
        </p>
        <p class="introSubtitle">
          {{ $t('textIntro[3]') }}
        </p>
      </div>
    </div>
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
  mounted() {
    gsap.from('.intro', {
      duration: 0.8,

      opacity: 0,
      scale: 0,
      y: 200,
      ease: 'power1',
      stagger: {
        from: 'start',
        each: 0.2,
      },
    })
  },
  methods: {
    getImgUrl() {
      return require('!!assets-loader!@/assets/img/' + this.myFilename)
    },
  },
}
</script>

<style scoped>


.setBorderLT {
  border-top: 2px solid #19C0AE;
  border-left: 2px solid #19C0AE;
}

@media (min-width: 700px) and (max-width: 1024px) {
  .setBGDark {
    background-image: url("../../assets/fondoBlack.svg");
    background-size: contain;
    background-position: 50% 40%;
  }
  .setBGLight{
    background-image: url("../../assets/fondo.svg");
    background-size: contain;
    background-position: 50% 40%;
  }

  .setPosition{
    position: absolute;
    left: 5px;
    top: 5%;
    padding:0 5% 0 5%;
    margin-left: 2%;
    width: 100%;
  }
}

@media (min-width: 1024px) {
  .setBGDark {
    background-image: url("../../assets/fondoXLBlack.svg");
    background-size: contain;
    background-position: 50% 20%;
  }
  .setBGLight {
    background-image: url("../../assets/fondoXL.svg");
    background-size: contain;
    background-position: 50% 30%;
  }
  .setPosition{
    position: absolute;
    left: 5px;
    top: 5%;
    padding:0 5% 0 5%;
    margin-left: 2%;
  }

  .introSubtitle{
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
}

@media (min-width: 1424px) {

  .introSubtitle {
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }

}



</style>
