import React from 'react';
import Header from '../components/header/header';

import CardsPageLocation from "../components/cardSlider/cardSlider"
import Footer from '../components/footer/footer';

const CardsPage = () => {
  return(
    <div>
      <Header />
      <CardsPageLocation />
      <Footer />
    </div>
  )

};

export default CardsPage;