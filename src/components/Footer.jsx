import logoFooter from '../assets/logo-white.svg';

function Footer() {
    return (
        <footer className="footer">
        <img src={logoFooter} alt="Kasa" className="logo-footer" />
        <p>© 2020 Kasa. All rights reserved</p>
      </footer>
    );
  }
  
  export default Footer;