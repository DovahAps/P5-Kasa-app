import React from 'react';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import ErrorPage from '../components/notFound/errorPage';

const notFound = () => {
  return (
    <div>
      <Header />
      <ErrorPage/>
      <Footer />
    </div>
  );
};

export default notFound;