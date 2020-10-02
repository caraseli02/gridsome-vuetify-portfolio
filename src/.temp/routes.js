const c1 = () => import(/* webpackChunkName: "page--src--pages--success-vue" */ "/Users/vlad/Documents/VueCurse/gridsome-vuetify-portfolio/src/pages/Success.vue")
const c2 = () => import(/* webpackChunkName: "page--src--pages--contact-vue" */ "/Users/vlad/Documents/VueCurse/gridsome-vuetify-portfolio/src/pages/Contact.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/Users/vlad/Documents/VueCurse/gridsome-vuetify-portfolio/src/pages/About.vue")
const c4 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/vlad/Documents/VueCurse/gridsome-vuetify-portfolio/node_modules/gridsome/app/pages/404.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/vlad/Documents/VueCurse/gridsome-vuetify-portfolio/src/pages/Index.vue")

export default [
  {
    path: "/ro/success/",
    component: c1,
    meta: {
      locale: "ro-md"
    }
  },
  {
    path: "/ru/success/",
    component: c1,
    meta: {
      locale: "ru"
    }
  },
  {
    path: "/en/success/",
    component: c1,
    meta: {
      locale: "en-gb"
    }
  },
  {
    path: "/es/success/",
    component: c1,
    meta: {
      locale: "es"
    }
  },
  {
    path: "/ro/contact/",
    component: c2,
    meta: {
      locale: "ro-md"
    }
  },
  {
    path: "/ru/contact/",
    component: c2,
    meta: {
      locale: "ru"
    }
  },
  {
    path: "/ro/about/",
    component: c3,
    meta: {
      locale: "ro-md"
    }
  },
  {
    path: "/ru/about/",
    component: c3,
    meta: {
      locale: "ru"
    }
  },
  {
    name: "404__ro-md",
    path: "/ro/404/",
    component: c4,
    meta: {
      locale: "ro-md"
    }
  },
  {
    name: "404__ru",
    path: "/ru/404/",
    component: c4,
    meta: {
      locale: "ru"
    }
  },
  {
    path: "/en/contact/",
    component: c2,
    meta: {
      locale: "en-gb"
    }
  },
  {
    path: "/es/contact/",
    component: c2,
    meta: {
      locale: "es"
    }
  },
  {
    path: "/en/about/",
    component: c3,
    meta: {
      locale: "en-gb"
    }
  },
  {
    path: "/es/about/",
    component: c3,
    meta: {
      locale: "es"
    }
  },
  {
    name: "404__en-gb",
    path: "/en/404/",
    component: c4,
    meta: {
      locale: "en-gb"
    }
  },
  {
    name: "404__es",
    path: "/es/404/",
    component: c4,
    meta: {
      locale: "es"
    }
  },
  {
    name: "__ro_slug",
    path: "/ro/:slug+",
    component: c4,
    meta: {
      dataPath: "/ro/_slug_plus.json",
      dynamic: true,
      locale: "ro-md"
    }
  },
  {
    name: "__ru_slug",
    path: "/ru/:slug+",
    component: c4,
    meta: {
      dataPath: "/ru/_slug_plus.json",
      dynamic: true,
      locale: "ru"
    }
  },
  {
    name: "__en_slug",
    path: "/en/:slug+",
    component: c4,
    meta: {
      dataPath: "/en/_slug_plus.json",
      dynamic: true,
      locale: "en-gb"
    }
  },
  {
    name: "__es_slug",
    path: "/es/:slug+",
    component: c4,
    meta: {
      dataPath: "/es/_slug_plus.json",
      dynamic: true,
      locale: "es"
    }
  },
  {
    path: "/success/",
    component: c1,
    meta: {
      locale: "en-gb"
    }
  },
  {
    name: "home__ro-md",
    path: "/ro/",
    component: c5,
    meta: {
      locale: "ro-md"
    }
  },
  {
    name: "home__ru",
    path: "/ru/",
    component: c5,
    meta: {
      locale: "ru"
    }
  },
  {
    name: "home__en-gb",
    path: "/en/",
    component: c5,
    meta: {
      locale: "en-gb"
    }
  },
  {
    name: "home__es",
    path: "/es/",
    component: c5,
    meta: {
      locale: "es"
    }
  },
  {
    path: "/contact/",
    component: c2,
    meta: {
      locale: "en-gb"
    }
  },
  {
    path: "/about/",
    component: c3,
    meta: {
      locale: "en-gb"
    }
  },
  {
    name: "404",
    path: "/404/",
    component: c4,
    meta: {
      locale: "en-gb"
    }
  },
  {
    name: "home",
    path: "/",
    component: c5,
    meta: {
      locale: "en-gb"
    }
  },
  {
    name: "*",
    path: "*",
    component: c4,
    meta: {
      locale: "en-gb"
    }
  }
]
