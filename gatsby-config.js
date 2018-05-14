module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-plugin-i18n',
      options: {        
        langKeyDefault: 'sv',
        useLangKeyLayout: false
      }
    }
  ],
}
