import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
  'en': {
    about: {
      aboutMe: 'Studying computer engineering at Uskudar University, Istanbul.',
      interested: 'Interested in & Trying to master',
      // general info
      name: 'Veli Dönmez',
      city: 'istanbul',
      mail: 'velidonmez@mail.com',
      github: 'https://github.com/velidonmez',
      linkedin: 'https://www.linkedin.com/in/veli-d%C3%B6nmez-77811b136/',
      twitter: 'https://twitter.com/atarsavar',
      facebook: 'https://www.facebook.com/velidonmez0'
    },
    nav: {
      mobileAboutBtn: 'Navigate to About Page',
      mobileExpBtn: 'Navigate to Experience Page',
      about: 'about',
      experience: 'experience'
    },
    experience: {
      title: 'experience'
    }
  },
  'tr': {
    about: {
      aboutMe: 'Bilgisayar Mühendisliği, Üsküdar Üniversitesi, Istanbul.',
      interested: 'İlgi Alanları',
      name: 'Veli Dönmez',
      city: 'istanbul'
    },
    nav: {
      mobileAboutBtn: 'Hakkında Sayfası',
      mobileExpBtn: 'Deneyimler Sayfası',
      about: 'hakkında',
      experience: 'deneyim'
    },
    experience: {
      title: 'deneyim'
    }
  }
}

const i18n = new VueI18n({
  locale: 'en', // set locale
  fallbackLocale: 'tr', // set fallback locale
  messages // set locale messages
})

export default i18n
