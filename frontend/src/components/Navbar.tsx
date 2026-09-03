import './Navbar.css';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-link">Home</Link>
      <div>
        <Link to="/dashboard" className="navbar-link">Dashboard</Link>
        <span> | </span>
        <Link to="/add-entry" className="navbar-link">Add Entry</Link>
      </div>
    </nav>
  );
};