<template>
  <div>
    <v-app-bar
        class="gradient"
        fixed
    >
      <v-toolbar-title>
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
      <v-toolbar-items class="">
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
      contact: 'contact',
      home: this.$i18n.locale.toString().slice(0, 0)
    }
  },
  created() {
    if(this.$route.path.includes('contact')){
      console.log('include')
    }else{
      console.log(' no include')
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
  background-color: rgba(0 , 0 , 0, 0.1 );
  padding: 0.5rem;
}

</style>
