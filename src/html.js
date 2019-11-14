import React from "react";

export default function HTML(props) {
  const {
    htmlAttributes,
    bodyAttributes,
    headComponents,
    preBodyComponents,
    body,
    postBodyComponents
  } = props;
  const { lang } = htmlAttributes;
  const { bodyClass } = bodyAttributes;
  return (
    <html lang={lang}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {headComponents}
      </head>
      <body className={bodyClass}>
        {preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key="body"
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: body }}
        />
        {postBodyComponents}
      </body>
    </html>
  );
}
