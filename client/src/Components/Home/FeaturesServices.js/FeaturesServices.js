import React from 'react';
import features from '../../../images/features.png';
import './FeaturesServices.css';

const FeaturesServices = () => {
  return (
    <section className="container features-container py-5">
      <div className="row d-flex align-items-center">
        <div className="col-md-5">
          <img className="img-fluid" src={features} alt="" />
        </div>
        <div className="col-md-7">
          <h1>
            Exceptional Dental <br /> Care , On Your Terms
          </h1>
          <p className="lead py-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            ipsam inventore nihil similique delectus repellat vero harum, hic
            debitis ullam error necessitatibus repudiandae doloribus id tenetur,
            sed molestias voluptatibus eius perspiciatis veniam? Dicta
            praesentium minus accusantium inventore eaque commodi voluptatum!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati
            ea alias culpa?
          </p>
          <button>Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesServices;
