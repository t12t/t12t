import React from "react";
import { Link } from "gatsby";
import Helmet from "react-helmet";

import logo from "../goods/t12t-logo.svg";
import "../goods/css/t12t-style.scss";

const Header = () => (
  <header>
    <Link to="/" className="our-wellknown-logo">
      <picture>
        <source type="image/svg+xml" srcSet={logo} alt="t12t" />
        <img src="/niceness/t12t-logo.png" alt="t12t" />
      </picture>
    </Link>
  </header>
);

const Underground = () => (
  <div className="underground">
    <aside className="related-feet">
      <h2>Mer om webbtillgänglighet</h2>
      <ul>
        <li>
          <a href="http://www.webbriktlinjer.se/">Webbriktlinjer.se</a>
        </li>
        <li>
          <a href="http://webaim.org/">WebAIM</a>
        </li>
        <li>
          <a href="http://a11yproject.com/">The Accessibility Project</a>
        </li>
      </ul>
      <p>
        Vår meetup-grupp{" "}
        <a href="http://www.meetup.com/t12t-Stockholm/">
          t12t Stockholm finns på meetup.com.
        </a>
      </p>
    </aside>
  </div>
);

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      htmlAttributes={{
        lang: "en"
      }}
      title="T12t"
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" },
        { name: "theme-color", content: "#2b1f1a" },
        {
          name: "msapplication-config",
          content: `${__PATH_PREFIX__}/favicons/browserconfig.xml`
        }
      ]}
    >
      <link
        rel="stylesheet"
        href="//fonts.googleapis.com/css?family=Patua+One:300,400,700"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={`${__PATH_PREFIX__}/favicons/apple-touch-icon.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`${__PATH_PREFIX__}/favicons/favicon-32x32.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`${__PATH_PREFIX__}/favicons/favicon-16x16.png`}
      />
      <link rel="manifest" href={`${__PATH_PREFIX__}/favicons/manifest.json`} />
      <link
        rel="mask-icon"
        href={`${__PATH_PREFIX__}/favicons/safari-pinned-tab.svg`}
        color="#f95e00"
      />
      <link
        rel="shortcut icon"
        href={`${__PATH_PREFIX__}/favicons/favicon.ico`}
      />
    </Helmet>
    <Header />
    <div className="main-package">
      <main role="main">{children}</main>
    </div>
    <Underground />
  </div>
);

export default TemplateWrapper;
