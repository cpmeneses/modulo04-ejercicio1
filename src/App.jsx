import React, { useState, useEffect } from 'react';
import DoctorCard from './components/DoctorCard';
import ServiceList from './components/ServiceList';
import AppointmentForm from './components/AppointmentForm';

const App = () => {
  const [doctors, setDoctors] = useState([]);
  const [services, setServices] = useState([]);

  useEffect(() => {
    // Simula la carga de datos desde una API o base de datos.
    const fetchedDoctors = [
      { name: 'Dr. Juan Pérez', specialty: 'Cardiología', experience: 10 },
      { name: 'Dra. Ana Gómez', specialty: 'Pediatría', experience: 7 },
    ];
    const fetchedServices = ['Consulta General', 'Pediatría', 'Cardiología'];

    setDoctors(fetchedDoctors);
    setServices(fetchedServices);
  }, []);

  return (
    <div className="hospital-system">
      <h1>Sistema del Hospital</h1>

      <section>
        <h2>Doctores</h2>
        <div className="doctor-list">
          {doctors.map((doc, index) => (
            <DoctorCard
              key={index}
              name={doc.name}
              specialty={doc.specialty}
              experience={doc.experience}
            />
          ))}
        </div>
      </section>

      <section>
        <h2>Servicios Disponibles</h2>
        <ServiceList services={services} />
      </section>

      <section>
        <h2>Agendar Cita</h2>
        <AppointmentForm doctors={doctors} />
      </section>
    </div>
  );
};

export default App;