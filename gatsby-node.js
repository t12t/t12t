 "use strict"

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ boundActionCreators, graphql }) => {
  // need createRedirect action in boundActionCreators collection
  // to make the redirection magic happen.
  // https://www.gatsbyjs.org/docs/bound-action-creators/
  const { createRedirect } = boundActionCreators

  // One-off redirect, note trailing slash missing on fromPath and
  // toPath here.
  createRedirect({
    fromPath: `/`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/sv`,
  })
}
