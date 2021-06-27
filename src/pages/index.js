import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import PrimaryHero from '../components/Hero/PrimaryHero';
import TripleSection from '../components/TripleSection';
import DoubleSection from "../components/DoubleSection"
import BottomSection from "../components/BottomSection"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <PrimaryHero />
    <TripleSection />
    <DoubleSection />
    <BottomSection />
  </Layout>
)

export default IndexPage
