import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { locales } from '../context/locale';
import ZH from './languages/zh';
import EN from './languages/en';

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  [locales[0]]: {
    translation: ZH,
  },
  [locales[1]]: {
    translation: EN,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: [locales[0]],
    lng: [locales[0]], // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
