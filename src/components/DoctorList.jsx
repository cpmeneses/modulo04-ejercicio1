import React from 'react';
import DoctorCard from './DoctorCard';
import { useAppContext } from '../context/AppProvider';

const DoctorList = () => {
    const { doctors } = useAppContext();

    return (
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
    );
};

export default DoctorList;