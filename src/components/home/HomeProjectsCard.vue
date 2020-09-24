<template>
  <article class="setOrizontalScroll mx-4 justify-lg-space-around items-lg-center">
    <v-card
        v-for="project in projects"
        :key="project.subtitle"
        class="ml-2 mb-4 card pa-2"
        max-width="344"
    >
      <g-image
          :src="require(`!!assets-loader!@img/${project.img}`)"
          :alt="project.alt"
          quality="75"
          class="imgSize"
      />

      <v-card-title>
        {{ project.title }}
      </v-card-title>

      <!--v-card-subtitle>
        {{ project.subtitle }}
      </v-card-subtitle>-->

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
          img: 'apimosa2.webp',
          alt: 'Aimosa Paint service',
          subtitle: this.$i18n.t('ApimosaText'),
          text: 'This webpage is made width gridsome',
          github: 'https://github.com/caraseli02/apimosavue',
          demo: 'http://apimosa.es',
        },
        {
          title: 'DailyStyleBlog',
          img: 'dailystyle.webp',
          alt: 'DailyStyle Fashion Blog',
          subtitle: this.$i18n.t('DsText'),
          text: 'This webpage is made width gridsome and gets data from contenteful',
          github: 'https://github.com/caraseli02/apimosavue',
          demo: 'https://dailystylelooks.com/',
        },
        {
          title: 'Vuetify Barber Shop',
          img: 'barber.webp',
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
