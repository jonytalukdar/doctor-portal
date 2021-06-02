import React from 'react';
import doctor from '../../../images/doctor.png';
import './MakeAppointment.css';

const MakeAppoinment = () => {
  return (
    <section className="appointment-container container py-5">
      <div className="row  appointment-row text-white">
        <div className="col-md-5">
          <img className="img-fluid" src={doctor} alt="" />
        </div>
        <div className="col-md-7 pt-5">
          <h4>APPOINTMENT</h4>
          <h1>
            Make An Appointment <br /> Today
          </h1>
          <p className="lead">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
            autem deserunt quibusdam.
          </p>
          <button>Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default MakeAppoinment;
