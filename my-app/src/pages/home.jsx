import React from 'react';
import Header from '../components/header/header';
import Banner from '../components/banner/banner';
import Cards from '../components/cards/cards';
import Footer from '../components/footer/footer';

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Cards />
      <Footer />
    </div>
  );
};

export default Home;