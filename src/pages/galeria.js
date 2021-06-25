import React from 'react';

import Layout from "../components/layout"
import SmallHero from '../components/SmallHero';
import Gallery from '../components/Gallery';

function Galeria() {
  return (
    <Layout>
      <SmallHero title="Galeria" />
      <Gallery />
    </Layout>
  )
}

export default Galeria
