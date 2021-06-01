import React from 'react';
import chair from '../../../images/chair.png';

const HeaderMain = () => {
  return (
    <main style={{ height: '550px' }} className="row d-flex align-items-center">
      <div className="col-md-4 offset-md-1">
        <h1 style={{ color: '#3a4256' }}>
          Your New Smile <br /> Starts Here
        </h1>
        <p className="text-muted">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel sapiente
          repellat explicabo eaque esse dolore provident quod, error harum
          rerum.
        </p>
        <button className="btn btn-primary"> Get Appoinment</button>
      </div>
      <div className="col-md-6">
        <img className="img-fluid" src={chair} alt="" />
      </div>
    </main>
  );
};

export default HeaderMain;
