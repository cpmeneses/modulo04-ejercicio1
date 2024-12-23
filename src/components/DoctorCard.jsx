import React from 'react';

const DoctorCard = ({ name, specialty, experience }) => {
  return (
    <div className="doctor-card">
      <h3>{name}</h3>
      <p>Especialidad: {specialty}</p>
      <p>Años de Experiencia: {experience}</p>
    </div>
  );
};

export default DoctorCard;