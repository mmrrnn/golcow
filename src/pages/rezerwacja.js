import React from 'react';

import Seo from "../components/seo"
import Layout from "../components/layout"
import SecondaryHero from '../components/Hero/SecondaryHero';
import Reservation from '../components/Reservation';

function Kontakt() {
  return (
    <Layout>
      <Seo title="Rezerwacja" />
      <SecondaryHero title="Rezerwacja" />
      <Reservation />
    </Layout>
  )
}

export default Kontakt
