// src/components/Layout.jsx
import { Link } from 'react-router-dom';

function Layout({ children }) {
  const token = localStorage.getItem("token");

  return (
    <div>
      <nav style={{ marginBottom: "1rem" }}>
        <Link to="/">Home</Link>{" | "}
        {token ? (
          <>
            <Link to="/dashboard">Dashboard</Link>{" | "}
            <Link to="/logout">Logout</Link>
          </>
        ) : (
          <>
            <Link to="/register">Register</Link>{" | "}
            <Link to="/login">Login</Link>
          </>
        )}
      </nav>
      <main>{children}</main>
    </div>
  );
}

export default Layout;
 
