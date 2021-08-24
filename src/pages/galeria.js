import React from 'react';

import Seo from "../components/seo"
import Layout from "../components/layout"
import SecondaryHero from '../components/Hero/SecondaryHero';
import Gallery from '../components/Gallery';

function Galeria() {
  return (
    <Layout>
      <Seo title="Galeria" />
      <SecondaryHero title="Galeria" />
      <Gallery />
    </Layout>
  )
}

export default Galeria
