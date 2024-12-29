import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import { useAppContext } from '../context/AppProvider';

const AppointmentForm = () => {
  const { doctors } = useAppContext();

  const [formData, setFormData] = useState({
    patientName: '',
    doctor: '',
    date: '',
  });

  // Crear referencias para interactuar con los campos del formulario
  const nameInputRef = useRef(null);
  const formRef = useRef(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos de la cita:', formData);

    // Reinicia el formulario utilizando la referencia
    formRef.current.reset();
    setFormData({ patientName: '', doctor: '', date: '' });

    // Vuelve a enfocar el campo de nombre del paciente
    nameInputRef.current.focus();
  };

  // Enfocar automáticamente el campo de nombre del paciente cuando se monta el componente
  React.useEffect(() => {
    nameInputRef.current.focus();
  }, []);

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <label>
        Nombre del Paciente:
        <input
          type="text"
          name="patientName"
          ref={nameInputRef} // Asignar la referencia
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

// Validación de PropTypes para los doctores
AppointmentForm.propTypes = {
  doctors: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired, // El nombre del doctor es obligatorio
      specialty: PropTypes.string, // La especialidad es opcional
    })
  ),
};


export default AppointmentForm;