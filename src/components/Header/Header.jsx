import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.svg'; 
import { Link } from 'react-router-dom';


function Header() {
    return (
      <header className="header">
        <Link to="/"><img src={logo} alt="Kasa" className="logo"/></Link>

        <nav className='navbar'>
        <NavLink className={({ isActive }) => isActive ? "navbar__link--active" : "navbar__link"} to="/">
          Accueil
        </NavLink>
        <NavLink className={({ isActive }) => isActive ? "navbar__link--active" : "navbar__link"} to="/about">
          A Propos
        </NavLink>
        </nav>
        
      </header>
    );
  }
  
  export default Header;