import React from 'react';

const BookAppointment = ({ date }) => {
  return (
    <section>
      <h2 style={{ color: '#1CC7C1' }} className="text-center">
        Availaible Appointment On {date.toDateString()}{' '}
      </h2>
    </section>
  );
};

export default BookAppointment;
