import React, { useState } from 'react';

const AppointmentForm = ({ doctors }) => {
  const [formData, setFormData] = useState({
    patientName: '',
    doctor: '',
    date: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos de la cita:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre del Paciente:
        <input
          type="text"
          name="patientName"
          value={formData.patientName}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Doctor:
        <select name="doctor" value={formData.doctor} onChange={handleChange} required>
          <option value="">Seleccione un doctor</option>
          {doctors.map((doc, index) => (
            <option key={index} value={doc.name}>
              {doc.name}
            </option>
          ))}
        </select>
      </label>
      <label>
        Fecha:
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">Agendar Cita</button>
    </form>
  );
};

export default AppointmentForm;