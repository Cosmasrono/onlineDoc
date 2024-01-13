import React, { useState } from 'react';
import Counselor from '../services/Councelor';
import AppointmentForm from './Appointment';

const CounselorList = () => {
  const [selectedCounselor, setSelectedCounselor] = useState(null);

  const counselors = [
    {
      id: 1,
      name: 'Dr. Smith',
      specialization: 'Psychologist',
      availability: {
        monday: ['10:00 AM', '2:00 PM'],
        tuesday: ['3:00 PM', '6:00 PM'],
      },
    },
    {
      id: 2,
      name: 'Dr. Johnson',
      specialization: 'Marriage Counselor',
      availability: {
        monday: ['9:00 AM', '1:00 PM'],
        tuesday: ['2:00 PM', '5:00 PM'],
      },
    },
    // Add more counselors as needed
  ];

  const handleCounselorClick = (counselor: React.SetStateAction<null>) => {
    setSelectedCounselor(counselor);
  };

  const handleBookAppointment = (counselor) => {
    window.location.href = `/Apppointment/${counselor.id}`;
  };

  return (
    <div>
      <h1>Available Counselors</h1>
      <div>
        {counselors.map((counselor) => (
          <Counselor
            key={counselor.id}
            counselor={counselor}
            onCounselorClick={handleCounselorClick}
            onBookAppointment={handleBookAppointment}
          />
        ))}
      </div>
      {selectedCounselor && (
        <div>
          <h2>Selected Counselor: {selectedCounselor.name}</h2>
          <AppointmentForm counselorId={selectedCounselor.id} onFormSubmit={undefined} />
        </div>
      )}
    </div>
  );
};

export default CounselorList;
