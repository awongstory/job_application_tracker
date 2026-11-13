import { NavLink } from 'react-router-dom';
import { FaHouse, FaSquarePlus, FaBars, FaTableColumns } from 'react-icons/fa6';

import './Navbar.css';

const homeLink = { to: "/", icon: FaHouse, label: "Home" };

const groupedLinks = [
  { to: "/dashboard", icon: FaTableColumns, label: "Dashboard" },
  { to: "/add-entry", icon: FaSquarePlus, label: "Add Entry" },
];

function IconLink({ to, icon: Icon, label }) {
  return (
    <NavLink to={to} aria-label={label} title={label} className="navbar-link">
      <Icon />
    </NavLink>
  )
}

export default function Navbar() {
  return (
  <nav className="navbar">
    <IconLink {...homeLink} />

    <div className="nav-group">
      {groupedLinks.map((link) => (
        <IconLink key={link.to} {...link} />
      ))}
    </div>
  </nav>
  );
};