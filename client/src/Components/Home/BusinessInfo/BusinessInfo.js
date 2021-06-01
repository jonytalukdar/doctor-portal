import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClock,
  faMapMarker,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';

const dataInfos = [
  {
    title: 'Open Hours',
    description: 'We Are Open 7 days',
    icon: faClock,
    background: 'primary',
  },
  {
    title: 'Visit Our Location',
    description: 'Brokyl New York',
    icon: faMapMarker,
    background: 'dark',
  },
  {
    title: 'Call Us Now',
    description: '27401247301',
    icon: faPhone,
    background: 'primary',
  },
];

const BusinessInfo = () => {
  return (
    <section className="row">
      {dataInfos.map((info) => (
        <InfoCard info={info}></InfoCard>
      ))}
    </section>
  );
};

export default BusinessInfo;
