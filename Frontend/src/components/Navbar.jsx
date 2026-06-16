import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/home" className="navbar-logo">
          Smart<span>Farmer</span> 🌱
        </NavLink>
        <div className="nav-menu">
          <NavLink to="/home" className={({ isActive }) => "nav-item" + (isActive ? " active" : "")}>
            Home
          </NavLink>
          <NavLink to="/shop" className={({ isActive }) => "nav-item" + (isActive ? " active" : "")}>
            Shop
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => "nav-item" + (isActive ? " active" : "")}>
            About Us
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => "nav-item" + (isActive ? " active" : "")}>
            Contact Us
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
