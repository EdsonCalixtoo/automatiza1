import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import ptTranslation from './locales/pt-BR.json';
import enTranslation from './locales/en-US.json';
import esTranslation from './locales/es-ES.json';

const resources = {
  'pt-BR': {
    translation: ptTranslation,
  },
  'en-US': {
    translation: enTranslation,
  },
  'es-ES': {
    translation: esTranslation,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'pt-BR',
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    detection: {
      order: ['path', 'localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupFromPathIndex: 0,
    },
  });

export default i18n;
