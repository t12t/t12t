import React from "react";

const Mailchimpform = () => (
  <div id="mc_embed_signup">
    <form
      action="//t12t.us14.list-manage.com/subscribe/post?u=23907132d7bd3ae259858b057&amp;id=b8c09bd7b1"
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      className="validate"
      target="_blank"
      noValidate
    >
      <fieldset id="mc_embed_signup_scroll">
        <legend>Subscribe to the newsletter</legend>
        <div className="mc-field-group">
          <label htmlFor="mce-EMAIL">Email Address </label>
          <input
            type="email"
            value=""
            name="EMAIL"
            className="required email"
            id="mce-EMAIL"
          />
        </div>
        <div id="mce-responses" className="clear">
          <div
            className="response"
            id="mce-error-response"
            style={{ display: "none" }}
          />
          <div
            className="response"
            id="mce-success-response"
            style={{ display: "none" }}
          />
        </div>
        <div
          style={{ position: "absolute", left: `${-5000  }px` }}
          aria-hidden="true"
        >
          <input
            type="text"
            name="b_23907132d7bd3ae259858b057_b8c09bd7b1"
            tabIndex="-1"
            value=""
          />
        </div>
        <div className="clear">
          <input
            type="submit"
            value="Subscribe"
            name="subscribe"
            id="mc-embedded-subscribe"
            className="button"
          />
        </div>
      </fieldset>
    </form>
  </div>
);

export default Mailchimpform;
