<template class="">
  <v-sheet
    height="100vh"
    class="d-flex flex-column flex-md-row justify-space-around justify-sm-end pt-sm-16 pt-8 pb-6 pb-sm-0"
    :class="this.$vuetify.theme.dark ? 'setBGDark' : 'setBGLight'"
  >
    <div class="ml-2 pr-2 py-2 intro order-0 setPosition">
      <p class="d-flex text-right justify-end text--primary">
        First, solve the problem.<br />
        Then, write the code.
      </p>
      <span class="d-flex justify-end font-italic text-body-2"
        >" John Johnson "</span
      >
    </div>
    <div
      class="intro introImg flex-xl-grow-1 self-end align-self-end d-flex justify-center justify-space-around justify-sm-end"
      :class="$vuetify.breakpoint.xsOnly ? 'order-1' : 'order-2'"
    >
      <picture class="d-flex justify-center justify-sm-end pictureSize">
        <source
          srcset="
            @/assets/img/profile_945.webp 1x,
            @/assets/img/profile_945.webp 2x
          "
          type="image/webp"
        />
        <source
          srcset="@/assets/img/profile_945.png 1x  @/assets/img/profile_945.png 2x"
          type="image/png"
        />

        <g-image
          v-if="$vuetify.breakpoint.xlOnly"
          src="@/assets/img/profile_945.png"
          fit="contain"
          alt="Vlad Caraseli"
          quality="75"
        />
        <g-image
          v-if="
            $vuetify.breakpoint.smOnly ||
            $vuetify.breakpoint.mdOnly ||
            $vuetify.breakpoint.lgOnly
          "
          src="@/assets/img/profile_945.png"
          fit="contain"
          width="730"
          height="650"
          alt="Vlad Caraseli"
          quality="75"
        />
        <g-image
          v-if="$vuetify.breakpoint.xsOnly"
          src="@/assets/img/profile_945.png"
          fit="contain"
          height="300"
          alt="Vlad Caraseli"
          quality="75"
          class="d-flex justify-center"
        />
      </picture>
    </div>
    <div
      :class="
        $vuetify.breakpoint.xsOnly
          ? 'order-2 intro absolute mr-6 pl-6 d-flex justify-between flex-column'
          : 'align-center align-self-start align-self-lg-end mb-16 intro pl-4 flex-xl-grow-1'
      "
    >
      <h4
        class="font-weight-bold mb-4"
        :class="$vuetify.breakpoint.smAndDown ? 'subtitle-1' : 'subtitle-2'"
      >
        <span class="Color1">{{ $t("textIntro[0]") }}</span>
        {{ $t("textIntro[1]") }}
      </h4>
      <div class="" :style="$vuetify.breakpoint.xsOnly ? '' : 'width: 70%;'">
        <h1 class="introSubtitle mb-2"></h1>
          {{ $t("textIntro[2]") }}
        </h1>
      </div>
    </div>
  </v-sheet>
</template>

<script>
import { gsap } from "gsap";

export default {
  data() {
    return {
      myFilename: this.$vuetify.breakpoint.xsOnly
        ? "profile_302.png"
        : "profile_945.png",
    };
  },
  methods: {
    getImgUrl() {
      return require("!!assets-loader!@/assets/img/" + this.myFilename);
    },
  },
};
</script>

<style scoped>
.introImg {
  margin: 0 auto;
}

.pictureSize {
  width: 100vw;
  overflow: hidden;
}

.setBorderLT {
  background: rgba(128, 131, 129, 0.2);
  border-radius: 15px 0 0 15px;
  box-shadow: 10px 10px 10px rgba(46, 54, 68, 0.03);
  border-left: 2px solid #16c0b0;
}

.introSubtitle {
  font-size: clamp(1.5rem, 3.5vw, 3.5rem);
  margin-bottom: 1rem;
  line-height: 1.3;
}

@media (min-width: 700px) and (max-width: 1024px) {
  .setBGDark {
    background-image: url("../../assets/fondoBlack.svg");
    background-size: contain;
    background-position: 50% 40%;
  }
  .setBGLight {
    background-image: url("../../assets/fondo.svg");
    background-size: contain;
    background-position: 50% 40%;
  }

  .setPosition {
    position: absolute;
    right: 0;
    top: 7.5vh;
    padding: 0 5% 0 5%;
    margin-left: 2%;
    width: 40%;
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
  .setPosition {
    position: absolute;
    left: 5px;
    top: 5%;
    padding: 0 5% 0 5%;
    margin-left: 2%;
  }

  .introSubtitle {
    margin-bottom: 1rem;
    line-height: 1.3;
  }

  .pictureSize {
    width: 70vw;
  }
}

@media (min-width: 1424px) {
  .introSubtitle {
    margin-bottom: 1rem;
  }
}
</style>
