import React from "react";
import Helmet from "react-helmet";
import Layout from "../components/layout";

import Archive from "../components/archive";
import Mailchimpform from "../components/mailchimpform";

const Newsletter = props => {
  const { pageContext } = props;
  return (
    <Layout>
      <Helmet
        htmlAttributes={{
          lang: pageContext.locale
        }}
      >
        <title>T12t - Accessibility Newsletter</title>
      </Helmet>
      <div>
        <h1>Newsletter</h1>
        <p>
          The goal is to spread news, articles and tips regarding web
          accessibility. This will be more than a bunch of links in an email,
          there will be opinions. Focus will be on digital a11y news from Sweden
          and Europe since these are the physical locations where this
          particular newsletter will be crafted. But the scope will be broad and
          cute animals will be featured.
        </p>
        <p>
          If everything goes according to the plan the newsletter will be sent
          out once every month but with no fixed schedule.
        </p>
        <Mailchimpform />
        <p>
          <em>
            We use <a href="https://mailchimp.com">Mailchimp</a> for our
            newsletter. We promise to not share your email with a third party.
            There will be a link in the newsletter where you can unsubscribe.
          </em>
        </p>
        <h2>Archive</h2>
        <Archive />
      </div>
    </Layout>
  );
};

export default Newsletter;
