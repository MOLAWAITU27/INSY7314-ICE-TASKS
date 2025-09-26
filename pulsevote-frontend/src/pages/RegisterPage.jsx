import { useState } from 'react';
import axios from 'axios';
import { isValidEmail, isStrongPassword } from '../utils/validators';

function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async () => {
    if (!email || !password) {
      alert("❌ Email and password are required.");
      return;
    }

    if (!isValidEmail(email)) {
      alert("❌ Invalid email format.");
      return;
    }

    if (!isStrongPassword(password)) {
      alert("❌ Weak password. Must be 8+ characters, include letters and numbers.");
      return;
    }

    try {
      await axios.post("/api/auth/register", { email, password });
      setMessage("✅ Registration successful. You may now log in.");
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
