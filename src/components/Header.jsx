import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg'; 

function Header() {
    return (
      <header className="header">
        <img src={logo} alt="Kasa" className="logo"/>
        <nav>
            <ul>
                <li><NavLink to="/">Accueil</NavLink></li>
                <li><NavLink to="/a-propos">À Propos</NavLink></li>
            </ul>
        </nav>
      </header>
    );
  }
  
  export default Header;