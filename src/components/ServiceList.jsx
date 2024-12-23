import React from 'react';

const ServiceList = ({ services }) => {
  return (
    <ul className="service-list">
      {services.map((service, index) => (
        <li key={index}>{service}</li>
      ))}
    </ul>
  );
};

export default ServiceList;