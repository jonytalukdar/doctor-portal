import React from 'react';
import './Services.css';
import floride from '../../../images/floride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
import ServicesCard from './ServicesCard';

const servicesData = [
  {
    name: 'Floride Treatment',
    img: floride,
  },
  {
    name: 'Cavity Feeling',
    img: cavity,
  },
  {
    name: 'Teeth Whitening',
    img: whitening,
  },
];

const Services = () => {
  return (
    <section className="py-5 services-container">
      <div className="text-center">
        <h5>OUR SERVICES</h5>
        <h2>Services We Provide</h2>
      </div>
      <div className="d-flex justify-content-center text-center">
        <div className="row w-75">
          {servicesData.map((service) => (
            <ServicesCard services={service}></ServicesCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
