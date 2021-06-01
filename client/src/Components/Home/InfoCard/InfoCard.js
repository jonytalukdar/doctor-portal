import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const InfoCard = ({ info }) => {
  return (
    <div className="col-md-4">
      <div>
        <FontAwesomeIcon icon={info.icon}></FontAwesomeIcon>
      </div>
      <div>
        <h6>{info.title}</h6>
        <small>{info.description}</small>
      </div>
    </div>
  );
};

export default InfoCard;
