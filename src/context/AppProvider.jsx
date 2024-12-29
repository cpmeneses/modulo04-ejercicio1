import React, { createContext, useState, useEffect, useContext } from 'react';

// Crear el contexto
const AppContext = createContext();

// Hook personalizado para acceder al contexto
export const useAppContext = () => useContext(AppContext);

// Proveedor del contexto
const AppProvider = ({ children }) => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
      // Simula la carga de datos desde una API o base de datos.
      const fetchedDoctors = [
        { name: 'Dr. Juan Pérez', specialty: 'Cardiología', experience: 10 },
        { name: 'Dra. Ana Gómez', specialty: 'Pediatría', experience: 7 },
      ];
      const fetchedServices = ['Consulta General', 'Pediatría', 'Cardiología'];
  
      setDoctors(fetchedDoctors);
    }, []);
  
  const [user, setUser] = useState({
    id: 1,
    name: 'Juan Pérez',
    role: 'Paciente',
  });

  return (
    <AppContext.Provider value={{ user, setUser, doctors, setDoctors }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;