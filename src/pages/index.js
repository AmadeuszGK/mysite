import React from "react"
import Helmet from "react-helmet";
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Amadesz Grzesiak - Front-end Developer | Strony i sklepy internetowe" description="Cześć, nazywam się Amadeusz i jestem kreatywnym front-end developerem z Jeleniej Góry. Stwórzmy coś razem!" keywords={[`front-end`, `developer`, `wrocław`, 'strony internetowe', 'sklepy internetowe']} />
    <Helmet>
        <title>Amadesz Grzesiak - Front-end Developer | Strony i sklepy internetowe</title>
        <meta name="description" content="Cześć, nazywam się Amadeusz i jestem kreatywnym front-end developerem z Jeleniej Góry. Stwórzmy coś razem!" />
    </Helmet>
  </Layout>
)

export default IndexPage
