import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { isValidEmail, isStrongPassword } from '../utils/validators';

function LoginPage() {
  const [email, setEmail] = useState("test@example.com");
  const [password, setPassword] = useState("secure123");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
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
      const res = await axios.post("/api/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch (err) {
      setError("Login failed. Please check your credentials.");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <input value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" type="password" />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginPage;
