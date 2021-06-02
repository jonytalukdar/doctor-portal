import React from 'react';
import FeaturesServices from '../FeaturesServices.js/FeaturesServices';
import Header from '../Header/Header';
import Services from '../Services/Services';

const Home = () => {
  return (
    <div>
      <Header />
      <Services />
      <FeaturesServices />
    </div>
  );
};

export default Home;
