import { NavLink, Link } from 'react-router-dom';
import logo from '../../assets/logo.svg'; 
// import './Header.scss';


function Header() {
    return (
      <header className="header">
        <Link to="/" aria-label="Retour à l'accueil"><img src={logo} alt="Logo de Kasa" className="logo"/></Link>

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