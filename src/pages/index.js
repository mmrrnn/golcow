import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import PrimaryHero from '../components/Hero/PrimaryHero';
import TopSection from '../components/TopSection';
import DoubleSection from "../components/DoubleSection"
import BottomSection from "../components/BottomSection"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <PrimaryHero />
    <TopSection />
    <DoubleSection />
    <BottomSection />
  </Layout>
)

export default IndexPage
