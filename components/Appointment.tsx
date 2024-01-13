// AppointmentForm.js
import React, { useState } from 'react';
import VideoSessionService from '../services/VideoSessionService';

const AppointmentForm = ({ counselorId }) => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    id: '',
    phoneNumber: '',
  });

  const [appointmentStatus, setAppointmentStatus] = useState('Queued');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setAppointmentStatus('Pending'); // Update status to Pending during processing

      // Assume the session starts immediately without payment logic
      const { success, sessionUrl } = await VideoSessionService.startVideoSession(counselorId);

      if (success) {
        setAppointmentStatus('Successful'); // Update status to Successful after successful session start
        // Redirect to the online session page
        window.location.href = `/OnlineSessionPage`;
      } else {
        setAppointmentStatus('Failed'); // Update status to Failed if video session start fails
        console.error('Failed to start video session');
      }
    } catch (error) {
      setAppointmentStatus('Error'); // Update status to Error if an error occurs
      console.error('Error during appointment submission:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div>
      <h3>Appointment Status: {appointmentStatus}</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <br />
        <label>
          Age:
          <input type="text" name="age" value={formData.age} onChange={handleChange} />
        </label>
        <br />
        <label>
          ID:
          <input type="text" name="id" value={formData.id} onChange={handleChange} />
        </label>
        <br />
        <label>
          Phone Number:
          <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Book Appointment</button>
      </form>
    </div>
  );
};

export default AppointmentForm;
