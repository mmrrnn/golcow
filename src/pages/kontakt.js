import React from 'react';

import Seo from "../components/seo"
import Layout from "../components/layout"
import SecondaryHero from '../components/Hero/SecondaryHero';
import Map from '../components/Map';

function Kontakt() {
  return (
    <Layout>
      <Seo title="Kontakt" />
      <SecondaryHero title="Kontakt" />
      <Map />
    </Layout>
  )
}

export default Kontakt
