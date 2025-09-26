// src/pages/RegisterPage.jsx
import { useState } from 'react';
import axios from 'axios';

function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async () => {
    try {
      await axios.post("/api/auth/register", { email, password });
      setMessage("Registration successful. You may now log in.");
      setError("");
    } catch (err) {
      setError("Registration failed. Try a different email.");
      setMessage("");
    }
  };

  return (
    <div>
      <h2>Register</h2>
      {message && <p style={{ color: "green" }}>{message}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <input value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" type="password" />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default RegisterPage;
 
