// src/pages/DashboardPage.jsx
import { useEffect, useState } from 'react';
import axios from 'axios';

function DashboardPage() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios.get("/api/protected", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(res => setMessage(res.data.message))
    .catch(err => setMessage("Failed to load protected content."));
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <p>{message}</p>
    </div>
  );
}

export default DashboardPage;
 
