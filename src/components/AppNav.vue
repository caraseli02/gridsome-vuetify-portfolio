<template>
  <div>
    <v-app-bar
        class="gradient"
        absolute
    >
      <v-toolbar-title>
        <v-btn
            icon
            to="/home"
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
      <v-toolbar-items class="">
        <v-btn
            v-if="$route.path !== '/home'"
            to="/"
            text
            class="body-1"
        >
          {{ $t('navBar[0]') }}
        </v-btn>
        <v-btn
            text
            to="/contact"
            class="body-1"
        >
          {{ $t('navBar[1]') }}
        </v-btn>
        <!--<v-btn to="/login" text>
          <v-icon left>login</v-icon>
          login
        </v-btn>-->
        <LocaleSwitcher/>
      </v-toolbar-items>
    </v-app-bar>
  </div>
</template>

<script>
import LocaleSwitcher from "./LocaleSwitcher";
export default {
  components: {LocaleSwitcher},
  data() {
    return {
      items: [
        {title: 'Main.vue', link: '/', icon: 'Index.vue'},
        {title: 'Contact', link: 'contact', icon: 'phone'},
        {title: 'LoginOld.vue', link: 'login', icon: 'login'},
      ],
    }
  },
}
</script>

<style scoped>

</style>
