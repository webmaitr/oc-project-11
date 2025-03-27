import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <NavLink to="/" end>
        Accueil
      </NavLink>
      <NavLink to="/a-propos" end>
        A Propos
      </NavLink>
    </nav>
  );
}
export default Navbar;
