import logoFooter from '../../assets/logo-white.svg';
import './Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <img
        src={logoFooter}
        alt="Kasa logo"
        className="logo-footer"
      />
      <p>© {new Date().getFullYear()} Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;