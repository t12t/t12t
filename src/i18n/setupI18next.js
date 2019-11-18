import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-xhr-backend";
import { initReactI18next } from "react-i18next";

export default () => {
  const langOptions = {
    // order and from where user language should be detected
    order: [
      "querystring",
      "navigator",
      "cookie",
      "localStorage",
      "htmlTag",
      "path",
      "subdomain"
    ],

    // keys or params to lookup language from
    lookupQuerystring: "lng",
    lookupCookie: "i18next",
    lookupLocalStorage: "i18nextLng",
    lookupFromPathIndex: 0,
    lookupFromSubdomainIndex: 0,

    // cache user language on
    caches: ["localStorage", "cookie"],

    // only detect languages that are in the whitelist
    checkWhitelist: true
  };

  i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      debug: process.env.NODE_ENV === "development",
      detection: langOptions,
      fallbackLng: "en",
      keySeparator: false, // we do not use keys in form messages.welcome
      interpolation: {
        escapeValue: false // react already safes from xss
      },
      react: { useSuspense: false }
    });

  return i18n;
};
