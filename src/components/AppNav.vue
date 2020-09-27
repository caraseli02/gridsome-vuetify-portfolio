<template>
  <div>
    <v-app-bar
        :class=" overlay? 'gradient menu-opened' : 'gradient'"
        fixed
    >
      <v-toolbar-title v-if="!overlay">
        <v-btn
            icon
            :to="$route.path.slice(0, 3)"
        >
          <svg
              xmlns="http://www.w3.org/2000/svg"
              width="38"
              height="38"
              viewBox="0 0 38 38"
          >
            <g transform="translate(-9 -13)">
              <g transform="translate(9 13)">
                <rect
                    width="38"
                    height="38"
                    rx="8"
                    fill="#2c2a2a"
                />
              </g>
              <g
                  transform="translate(14 18)"
                  fill="#fff"
                  stroke="rgba(250,250,250,0)"
                  stroke-width="1"
              >
                <rect
                    width="28"
                    height="28"
                    rx="14"
                    stroke="none"
                />
                <rect
                    x="0.5"
                    y="0.5"
                    width="27"
                    height="27"
                    rx="13.5"
                    fill="none"
                />
              </g>
              <g transform="translate(21 18.529)">
                <line
                    x1="11"
                    y1="14"
                    transform="translate(2.5 5.5)"
                    fill="none"
                    stroke="#ddbb57"
                    stroke-width="2"
                />
                <text
                    fill="#356c9b"
                    font-size="20"
                    font-family="Monaco"
                >
                  <tspan
                      x="0"
                      y="20"
                  >K
                  </tspan>
                </text>
              </g>
              <path
                  d="M5.689,9.169,2.835,4.375.969,1.495,0,0"
                  transform="translate(17.811 29.658)"
                  fill="none"
                  stroke="rgba(112,112,112,0.07)"
                  stroke-width="2"
              />
            </g>
          </svg>
        </v-btn>
      </v-toolbar-title>
      <v-spacer/>
      <v-switch v-if="!overlay" class="mt-6 "
                v-model="$vuetify.theme.dark"
                inset
                persistent-hint
                :color=" this.$vuetify.theme.dark ? 'black' : 'white'"
      ></v-switch>
      <LocaleSwitcher/>
      <div class="burger-container" @click="overlay = !overlay">
        <div id="burger">
          <div class="bar topBar"></div>
          <div class="bar btmBar"></div>
        </div>
      </div>

      <v-overlay
          :absolute="absolute"
          :opacity="opacity"
          :value="overlay"
          color="transparent"
          class="mr-16"
      >
        <v-toolbar-items v-if="overlay">
          <g-link

              :to="$route.path.slice(0, 3)"
              :class="this.$route.path.includes('contact') ? 'navBtn' : 'navBtn inRoute'"
          >
            {{ $t('navBar[0]') }}
          </g-link>
          <g-link
              text
              :to="this.$context.locale.slice(0, 2) + '/' + contact"
              :class="!this.$route.path.includes('contact') ? 'navBtn' : 'navBtn inRoute'"
          >
            {{ $t('navBar[1]') }}
          </g-link>
        </v-toolbar-items>
      </v-overlay>
    </v-app-bar>
  </div>
</template>

<script>
import LocaleSwitcher from "./LocaleSwitcher";

export default {
  components: {LocaleSwitcher},
  data() {
    return {
      contact: 'contact',
      home: this.$i18n.locale.toString().slice(0, 0),
      menuOpen: false,
      absolute: true,
      opacity: 1,
      overlay: false,
    }
  }
}
</script>

<style scoped>
.navBtn {
  text-decoration: none;
  color: #1a1919;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;
}

.getHover:hover {
  font-weight: bolder;
}

.inRoute {
  cursor: not-allowed;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 0.5rem;
}

.themeIcon {
  font-size: 2rem;
}

.fixIconWidth {
  font-size: 2.5rem;
}

.burger-container {
  position: relative;
  display: inline-block;
  height: 50px;
  width: 50px;
  cursor: pointer;
  -webkit-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: all 0.3s cubic-bezier(0.4, 0.01, 0.165, 0.99);
  transition: all 0.3s cubic-bezier(0.4, 0.01, 0.165, 0.99);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
}

.burger-container #burger {
  width: 18px;
  height: 8px;
  position: relative;
  display: block;
  margin: -4px auto 0;
  top: 50%;
}

.burger-container #burger .bar {
  width: 100%;
  height: 1px;
  display: block;
  position: relative;
  background: #0c0c0c;
  -webkit-transition: all 0.3s cubic-bezier(0.4, 0.01, 0.165, 0.99);
  transition: all 0.3s cubic-bezier(0.4, 0.01, 0.165, 0.99);
  -webkit-transition-delay: 0s;
  transition-delay: 0s;
}

.burger-container #burger .bar.topBar {
  -webkit-transform: translateY(0px) rotate(0deg);
  transform: translateY(0px) rotate(0deg);
}

.burger-container #burger .bar.btmBar {
  -webkit-transform: translateY(6px) rotate(0deg);
  transform: translateY(6px) rotate(0deg);
}

.menu-opened .burger-container {
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
}

.menu-opened .burger-container #burger .bar {
  -webkit-transition: all 0.4s cubic-bezier(0.4, 0.01, 0.165, 0.99);
  transition: all 0.4s cubic-bezier(0.4, 0.01, 0.165, 0.99);
  -webkit-transition-delay: 0.2s;
  transition-delay: 0.2s;
}

.menu-opened .burger-container #burger .bar.topBar {
  -webkit-transform: translateY(4px) rotate(45deg);
  transform: translateY(4px) rotate(45deg);
}

.menu-opened .burger-container #burger .bar.btmBar {
  -webkit-transform: translateY(3px) rotate(-45deg);
  transform: translateY(3px) rotate(-45deg);
}
</style>
