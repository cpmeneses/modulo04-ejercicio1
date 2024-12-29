import React, { Profiler, useState, useEffect } from 'react';
import DoctorList from './components/DoctorList';
import ServiceList from './components/ServiceList';
import AppointmentForm from './components/AppointmentForm';
import withLoading from './hocs/withLoading';

const App = () => {
  const onRenderCallback = (
    id,
    phase,
    actualDuration
  ) => {
    console.log(`${id} - ${phase}: ${actualDuration}ms`);
  };

  //const [doctors, setDoctors] = useState([]);
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchedServices = ['Consulta General', 'Pediatría', 'Cardiología'];
    setServices(fetchedServices);
  }, []);

  const Title = (props) => <h1>{props.title}</h1>;
  const TitleWithLoading = withLoading(Title); //HOC

  return (    
    <Profiler id="AppProfiler" onRenderCallback={onRenderCallback}>
      <div className="hospital-system">
        <TitleWithLoading isLoading={false} title="Sistema del Hospital" />

        {/* Fragment */}
        <React.Fragment>
          <h2>Doctores</h2>
          <DoctorList />
        </React.Fragment>

        <React.Fragment>
          <h2>Servicios Disponibles</h2>
          <ServiceList services={services} />
        </React.Fragment>

        <React.Fragment>
          <h2>Agendar Cita</h2>
          <AppointmentForm />
        </React.Fragment>
      </div>
    </Profiler>
  );
};

export default App;