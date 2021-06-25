import React from 'react';

import Layout from "../components/layout"
import SecondaryHero from '../components/Hero/SecondaryHero';
import Gallery from '../components/Gallery';

function Galeria() {
  return (
    <Layout>
      <SecondaryHero title="Galeria" />
      <Gallery />
    </Layout>
  )
}

export default Galeria
