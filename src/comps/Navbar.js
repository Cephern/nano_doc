// styles
import "./Navbar.css";

// navigation
import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav-main">
      <ul className="left">
        <li>
          <NavLink to="/">Главная</NavLink>
        </li>
        <li>
          <NavLink to="/doctors">Врачи</NavLink>
        </li>
        <li>
          <NavLink to="/about">О Нас</NavLink>
        </li>
      </ul>

      <ul className="left">
        <li>
          <Link to="/login">Войти</Link>
        </li>
        <li>
          <Link to="/signup">Регистрация</Link>
        </li>
      </ul>

      <button>Logout</button>
    </nav>
  );
}
