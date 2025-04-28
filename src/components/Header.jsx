import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg'; 

function Header() {
    return (
      <header className="header">
        <img src={logo} alt="Kasa" className="logo"/>
        <nav>
            <ul>
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/a-propos">À Propos</Link></li>
            </ul>
        </nav>
      </header>
    );
  }
  
  export default Header;