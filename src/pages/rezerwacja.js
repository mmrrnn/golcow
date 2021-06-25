import React from 'react';

import Layout from "../components/layout"
import SmallHero from '../components/SmallHero';
import Reservation from '../components/Reservation';

function Kontakt() {
  return (
    <Layout>
      <SmallHero title="Rezerwacja" />
      <Reservation />
    </Layout>
  )
}

export default Kontakt
