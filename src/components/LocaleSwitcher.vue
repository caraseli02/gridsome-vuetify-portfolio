<template>
  <select class="select-box__current" v-model="currentLocale" @change="localeChanged">
    <option class="select-box__value" v-for="locale in availableLocales" :key="locale" :value="locale">
      {{ locale.toLocaleUpperCase() }}
    </option>
  </select>
  <!--<article class="d-flex justify-center align-center">
    <div class="select-box">
      <div class="select-box__current ml-6" tabindex="1">
        <img class="select-box__icon" src="http://cdn.onlinewebfonts.com/svg/img_295694.svg" alt="Arrow Icon"
             aria-hidden="true"/>
        <div class="select-box__value" v-for="(locale, index) in availableLocales">
          <input class="select-box__input" type="radio" :id="index" value="1" name="Ben" checked="checked"/>
          <p class="select-box__input-text">{{ locale.toLocaleUpperCase() }}</p>
        </div>
      </div>
      <ul class="select-box__list">
        <li v-for="(locale, index) in availableLocales">
          <label class="select-box__option" :for="index" aria-hidden="aria-hidden">{{
              locale.toLocaleUpperCase()
            }}</label>
        </li>
      </ul>
    </div>
  </article>-->
</template>

<script>
export default {
  name: "LocaleSwitcher",
  data: function () {
    return {
      currentLocale: this.$i18n.locale.toString(),
      availableLocales: this.$i18n.availableLocales
    }
  },
  methods: {
    localeChanged() {
      this.$router.push({
        path: this.$tp(this.$route.path, this.currentLocale, true)
      })
    }
  }
}
</script>

<style scoped>
select {
  font-size: 0.9rem;
  font-weight: 200;
  max-width: 100px;
  padding: 8px 24px 8px 10px;
  border: none;
  background-color: transparent;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

select:active,
select:focus {
  outline: none;
  box-shadow: none;
}


</style>
