// Only one item MUST have the "default: true" key

module.exports = {
  en: {
    path: `en`,
    locale: `en-US`,
    dateFormat: `DD/MM/YYYY`,
    siteLanguage: `en`,
    ogLanguage: `en_US`,
    defaultTitle: `Using i18n with Gatsby`,
    defaultDescription: `Gatsby example site using MDX and dependency-free i18n`
  },
  sv: {
    default: true,
    path: `sv`,
    locale: `sv`,
    dateFormat: `DD.MM.YYYY`,
    siteLanguage: `sv`,
    ogLanguage: `sv`,
    defaultTitle: `i18n används med Gatsby`,
    defaultDescription: `Gatsby exempel-sida använder MDX och i18n utan beroenden`
  }
};
