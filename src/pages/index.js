import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import Hero from '../components/Hero';
import TopSection from '../components/TopSection';
import DoubleSection from "../components/DoubleSection"
import BottomSection from "../components/BottomSection"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <TopSection />
    <DoubleSection />
    <BottomSection />
  </Layout>
)

export default IndexPage
