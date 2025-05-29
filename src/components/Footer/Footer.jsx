import logoFooter from '../../assets/logo-white.svg';
import './Footer.scss';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <img
        src={logoFooter}
        alt="Kasa logo"
        className="logo-footer"
      />
      <p>
        © {year} Kasa. All
        <span className="footer__line-break"> rights reserved</span>
      </p>
    </footer>
  );
}

export default Footer;