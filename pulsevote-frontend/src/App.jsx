import { useState } from 'react';
import axios from 'axios';

function App() {
  const [email, setEmail] = useState("test@example.com");
  const [password, setPassword] = useState("secure123");
  const [token, setToken] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post("/api/auth/login", {
        email,
        password
      });
      setToken(res.data.token);
      console.log("✅ Token received:", res.data.token);
    } catch (err) {
      console.error("❌ Login failed:", err);
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>🔐 PulseVote Login</h1>
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Email"
      />
      <br />
      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="Password"
      />
      <br />
      <button onClick={handleLogin}>Login</button>

      {token && <p>✅ Logged in. Token stored.</p>}
    </div>
  );
}

export default App;
