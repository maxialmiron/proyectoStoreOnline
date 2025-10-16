import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ background: "#023e8a", padding: "10px" }}>
      <Link to="/" style={{ color: "#fff", marginRight: "1rem" }}>Inicio</Link>
      <Link to="/moda" style={{ color: "#fff", marginRight: "1rem" }}>Moda</Link>
      <Link to="/about" style={{ color: "#fff", marginRight: "1rem" }}>About</Link>
      <Link to="/login" style={{ color: "#fff" }}>Login</Link>
    </nav>
  );
}