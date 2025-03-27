import logo from './../assets/logo.svg';
import Navbar from './Nav.jsx';

function Header() {
  return (
    <header>
      <img className="logo" src={logo} alt="logo Kasa" />
      <Navbar />
    </header>
  );
}

export default Header;
