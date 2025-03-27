import logoSmall from './../assets/logo_small.svg';

function Footer() {
  return (
    <footer>
      <img className="logoSmall" src={logoSmall} alt="logo Kasa" />
      <p>&copy;2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
