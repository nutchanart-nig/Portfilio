import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)
const messages = {
  '1': {
    HELLO: "Hello"
  },
  '2': {
    HELLO: "สวัสดี"
  }
}

const i18n = new VueI18n({
  locale: "2", // set locale
  messages //set locale messages
})

export default i18n