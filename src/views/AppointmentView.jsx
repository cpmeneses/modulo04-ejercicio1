import React, { useEffect, useState } from "react";
import AppointmentForm from "../components/AppointmentForm";
import ServiceList from "../components/ServiceList";

function AppointmentView() {

  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchedServices = ['Consulta General', 'Pediatría', 'Cardiología'];
    setServices(fetchedServices);
  }, []);


  return (
    <div>
      <h2>Agendar Cita</h2>

      <React.Fragment>
        <h2>Servicios Disponibles</h2>
        <ServiceList services={services} />
      </React.Fragment>

      <AppointmentForm />
    </div>
  );
}

export default AppointmentView;