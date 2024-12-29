import React from 'react';
import PropTypes from 'prop-types';

const DoctorCard = ({ name, specialty, experience }) => {
  return (
    <div className="doctor-card">
      <h3>{name}</h3>
      <p>Especialidad: {specialty}</p>
      <p>Años de Experiencia: {experience}</p>
    </div>
  );
};

DoctorCard.propTypes = {
  name: PropTypes.string.isRequired,
  specialty: PropTypes.string.isRequired,
  experience: PropTypes.number.isRequired,
};

export default DoctorCard;