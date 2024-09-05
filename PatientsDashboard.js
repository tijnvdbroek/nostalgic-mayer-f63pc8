import React, { useState, useEffect } from "react";

// Mock data voor patiënten
const patientsData = [
  { id: 1, name: "John Doe", dateOfBirth: "1990-01-01" },
  { id: 2, name: "Jane Smith", dateOfBirth: "1985-06-15" },
  { id: 3, name: "Robert Brown", dateOfBirth: "1978-02-23" },
];

const PatientsDashboard = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    // Hier zou je een API-call doen om patiënten op te halen
    // Voor nu gebruiken we mock data
    setPatients(patientsData);
  }, []);

  return (
    <div>
      <h2>Patients Dashboard</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Date of Birth</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <tr key={patient.id}>
              <td>{patient.id}</td>
              <td>{patient.name}</td>
              <td>{patient.dateOfBirth}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientsDashboard;
