import React from 'react';
import PropTypes from 'prop-types';

const ServiceList = ({ services }) => {
  return (
    <ul className="service-list">
      {services.map((service, index) => (
        <li key={index}>{service}</li>
      ))}
    </ul>
  );
};

// Definición de PropTypes
ServiceList.propTypes = {
  services: PropTypes.arrayOf(PropTypes.string).isRequired, // Valida que 'services' sea un array de strings
};

export default ServiceList;