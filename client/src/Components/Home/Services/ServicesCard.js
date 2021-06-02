import React from 'react';

const ServicesCard = ({ services }) => {
  return (
    <div className="col-md-4 pt-5">
      <img style={{ width: '50px' }} src={services.img} alt="" />
      <h5 className="py-2">{services.name}</h5>
      <p className="text-secondary">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, minima.
      </p>
    </div>
  );
};

export default ServicesCard;
