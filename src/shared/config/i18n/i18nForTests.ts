import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n
  .use(initReactI18next)
  .init({
    lng: 'ru',
    fallbackLng: 'ru',
    returnNull: false,
    debug: false,
    interpolation: {
      escapeValue: false, // not needed for react!!
    },
    resources: { ru: { translations: {} } },
  })
const i18nForTests = i18n
export default i18nForTests
