// styles
import "./Navbar.css";

// navigation
import { NavLink } from "react-router-dom";

// hooks
import { useAuthContext } from "../hooks/useAuthContext";

export default function Navbar() {
  const { user } = useAuthContext();

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

      {user ? (
        <button>Logout</button>
      ) : (
        <ul className="right">
          <li>
            <NavLink to="/login">Войти</NavLink>
          </li>
          <li>
            <NavLink to="/signup">Регистрация</NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
}
