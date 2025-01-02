import React, { Profiler, useState, useEffect } from 'react';
import DoctorList from './components/DoctorList';
import ServiceList from './components/ServiceList';
import AppointmentForm from './components/AppointmentForm';
import withLoading from './hocs/withLoading';
import HomeView from './views/HomeView';
import AppointmentView from './views/AppointmentView';
import TeamView from './views/TeamView';

const App = () => {
  const onRenderCallback = (
    id,
    phase,
    actualDuration
  ) => {
    console.log(`${id} - ${phase}: ${actualDuration}ms`);
  };

  //const [doctors, setDoctors] = useState([]);
  const [view, setView] = useState("home");

  const Title = (props) => <h1>{props.title}</h1>;
  const TitleWithLoading = withLoading(Title); //HOC

  return (    
    <Profiler id="AppProfiler" onRenderCallback={onRenderCallback}>
      <div className="hospital-system">
        <TitleWithLoading isLoading={false} title="Sistema del Hospital" />

        <nav>
          {/* Buttons to change View */}
          <button onClick={() => setView("home")}>Inicio</button>
          <button onClick={() => setView("appointment")}>Agendar Cita</button>
          <button onClick={() => setView("team")}>Equipo</button>
        </nav>

        {/* Show the current View */}
        {view === "home" && <HomeView />}
        {view === "appointment" && <AppointmentView />}
        {view === "team" && <TeamView />}

      </div>
    </Profiler>
  );
};

export default App;