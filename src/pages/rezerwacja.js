import React from 'react';

import Layout from "../components/layout"
import SecondaryHero from '../components/Hero/SecondaryHero';
import Reservation from '../components/Reservation';

function Kontakt() {
  return (
    <Layout>
      <SecondaryHero title="Rezerwacja" />
      <Reservation />
    </Layout>
  )
}

export default Kontakt
