import React from "react";
import Helmet from "react-helmet";
import Layout from "../components/layout";

const IndexPage = () => (
  <Layout>
    <div>
      <Helmet>
        <title>T12t</title>
      </Helmet>
      <h1>Hej webb&shy;tillgänglighet!</h1>
      <p>
        T12t, står för tillgänglighet och är den svenska motsvarigheten till
        a11y, accessibility. Här sysslar vi med tillgängligheten på webben. Vi
        har meetups och vi försöker att sprida kunskap och tips.
      </p>
      <h2 id="meetup">Våra meetups</h2>
      <p>
        Vi finns på{" "}
        <a href="https://www.meetup.com/t12t-Stockholm">
          meetup.com som t12t - Stockholm.
        </a>{" "}
        Vår målsättning är att arrangera ett par meetups varje år. Skulle du
        vilja vara värd för ett metup, tala eller har en idé angående ämne eller
        något annat så får du gärna höra av dig. Det gör du lättast på{" "}
        <a href="https://www.meetup.com/t12t-Stockholm/">vår meetup-sida.</a>
      </p>
      <h2 id="newsletter">Vårt nyhetsbrev</h2>
      <p>
        Från och med 2017 så testar vi att skicka ut ett nyhetsbrev. Målet är
        att sprida nyheter, artiklar och tips runt webbtillgänglighet. Om det
        går enligt planerna så blir det en till två gånger i månaden.
      </p>
      <p>
        Observera att nyhetsbrevet är på engelska. Mer info och anmälan finns{" "}
        <a href="/accessibility-newsletter">på nyhetsbrev-sidan.</a>
      </p>
    </div>
  </Layout>
);

export default IndexPage;
