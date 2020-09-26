<template>
  <article class="setOrizontalScroll mx-4 justify-lg-space-around items-lg-center">
    <!--Dynamic Option problem with translation and srcset-->
    <!--<v-card
        v-for="project in projects"
        :key="project.subtitle"
        class="ml-2 mb-4 card pa-2"
        max-width="344"
    >
      <picture>
        <source :srcset="`@/assets/img/apimosa2.webp 1x, @/assets/img/apimosa2.webp 2x`" type="image/webp">
        <source :srcset="`@/assets/img/apimosa2.jpg 1x,  @/assets/img/apimosa2.jpg 2x`" type="image/jpg">
        <g-image
            :src="require(`!!assets-loader!@img/apimosa2.jpg`)"
            :alt="project.alt"
            quality="75"
            class="imgSize"
        />
      </picture>
      <v-card-title>
        {{ project.title }}
      </v-card-title>

      &lt;!&ndash;v-card-subtitle>
        {{ project.subtitle }}
      </v-card-subtitle>&ndash;&gt;

      <v-card-actions>
        <v-btn
            :href="project.github"
            link
        >
          Github
        </v-btn>

        <v-btn
            color="teal"
            link
            :href="project.demo"
        >
          Demo
        </v-btn>

        <v-spacer/>
      </v-card-actions>
    </v-card>-->
    <v-card
        class="ml-2 mb-4 card pa-2"
        max-width="344"
    >
      <picture>
        <source srcset="@/assets/img/apimosa2.webp 1x, @/assets/img/apimosa2.webp 2x" type="image/webp">
        <source srcset="@/assets/img/apimosa2.jpg 1x,  @/assets/img/apimosa2.jpg 2x" type="image/jpg">
        <g-image
            src="@/assets/img/apimosa2.jpg"
            alt="Apimosa Paint service"
            quality="75"
            class="imgSize"
        />
      </picture>
      <v-card-title>
        Apimosa
      </v-card-title>

      <v-card-subtitle>
        {{ $t('apimosaText') }}
      </v-card-subtitle>

      <v-card-actions>
        <v-btn
            href="https://github.com/caraseli02/apimosavue"
            link
        >
          Github
        </v-btn>

        <v-btn
            color="teal"
            link
            href="http://apimosa.es"
        >
          Demo
        </v-btn>

        <v-spacer/>
      </v-card-actions>
    </v-card>
    <v-card
        class="ml-2 mb-4 card pa-2"
        max-width="344"
    >
      <picture>
        <source srcset="@/assets/img/dailystyle.webp 1x, @/assets/img/dailystyle.webp 2x" type="image/webp">
        <source srcset="@/assets/img/dailystyle.jpg 1x,  @/assets/img/dailystyle.jpg 2x" type="image/jpg">
        <g-image
            src="@/assets/img/dailystyle.jpg"
            alt="DailyStyle Fashion Blog"
            quality="75"
            class="imgSize"
        />
      </picture>
      <v-card-title>
        DailyStyle Fashion Blog
      </v-card-title>

      <v-card-subtitle>
        {{ $t('DsText') }}
      </v-card-subtitle>

      <v-card-actions>
        <v-btn
            href="https://github.com/caraseli02/apimosavue"
            link
        >
          Github
        </v-btn>

        <v-btn
            color="teal"
            link
            href="https://dailystylelooks.com/"
        >
          Demo
        </v-btn>

        <v-spacer/>
      </v-card-actions>
    </v-card>
    <v-card
        class="ml-2 mb-4 card pa-2"
        max-width="344"
    >
      <picture>
        <source srcset="@/assets/img/barber.webp 1x, @/assets/img/barber.webp 2x" type="image/webp">
        <source srcset="@/assets/img/barber.jpg 1x,  @/assets/img/barber.jpg 2x" type="image/jpg">
        <g-image
            src="@/assets/img/barber.jpg"
            alt="Vuetify Barber Shop"
            quality="75"
            class="imgSize"
        />
      </picture>
      <v-card-title>
        Vuetify Barber Shop
      </v-card-title>

      <v-card-subtitle>
        {{ $t('BarberText') }}
      </v-card-subtitle>

      <v-card-actions>
        <v-btn
            href="https://github.com/caraseli02/vuetify-responsive-barbershop"
            link
        >
          Github
        </v-btn>

        <v-btn
            color="teal"
            link
            href="https://barbershopwebapp.netlify.app/#/"
        >
          Demo
        </v-btn>

        <v-spacer/>
      </v-card-actions>
    </v-card>
  </article>
</template>

<script>
import gsap from 'gsap'

export default {
  data() {
    return {
      projects: [
        {
          title: 'Apimosa',
          img: 'apimosa2',
          alt: 'Aimosa Paint service',
          subtitle: this.$i18n.t('ApimosaText'),
          text: 'This webpage is made width gridsome',
          github: 'https://github.com/caraseli02/apimosavue',
          demo: 'http://apimosa.es',
        },
        {
          title: 'DailyStyleBlog',
          img: 'dailystyle',
          alt: 'DailyStyle Fashion Blog',
          subtitle: this.$i18n.t('DsText'),
          text: 'This webpage is made width gridsome and gets data from contenteful',
          github: 'https://github.com/caraseli02/apimosavue',
          demo: 'https://dailystylelooks.com/',
        },
        {
          title: 'Vuetify Barber Shop',
          img: 'barber',
          alt: 'barbershop',
          subtitle: 'Barber Shop Web Page',
          text: 'This webpage is made width vue that use vuetify',
          github: 'https://github.com/caraseli02/vuetify-responsive-barbershop',
          demo: 'https://barbershopwebapp.netlify.app/#/',
        }, /*
    {
      title: 'Apimosa', img: 'apimosa2.jpg', subtitle: 'web page for paint company',
      text: 'This webpage is made width gridsome that use vue and graphql',
      github: 'https://github.com/caraseli02/apimosavue', demo: 'http://apimosa.es'
    }, */
      ],
    }
  },

  mounted() {
    gsap.from('.card', {
      duration: 0.8,
      opacity: 0,
      scale: 0,
      y: 200,
      ease: 'power1',
      stagger: {
        from: 'edges',
        each: 0.1,
      },
    })
  },

}
</script>

<style scoped>
.setOrizontalScroll {
  display: flex;
  overflow-x: auto;
  width: 95vw;
}

.setOrizontalScroll::-webkit-scrollbar {
  display: none;
}

.imgSize {
  width: 330px;
  height: 230px;
}
</style>
