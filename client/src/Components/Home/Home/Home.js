import React from 'react';
import FeaturesServices from '../FeaturesServices.js/FeaturesServices';
import Header from '../Header/Header';
import MakeAppoinment from '../MakeAppoinment/MakeAppointment';
import Services from '../Services/Services';

const Home = () => {
  return (
    <div>
      <Header />
      <Services />
      <FeaturesServices />
      <MakeAppoinment />
    </div>
  );
};

export default Home;
