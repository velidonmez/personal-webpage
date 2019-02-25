import Vue from 'vue'
import VueI18n from 'vue-i18n'
import multilang from '@/plugins/lang.json'

Vue.use(VueI18n)

const messages = multilang

const i18n = new VueI18n({
  locale: 'en', // set locale
  fallbackLocale: 'tr', // set fallback locale
  messages // set locale messages
})

export default i18n
