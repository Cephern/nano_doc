// styles
import "./Navbar.css";

// navigation
import { NavLink } from "react-router-dom";

// hooks
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";

export default function Navbar() {
  const { user } = useAuthContext();

  const { logout } = useLogout();

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
        <button className="logout" onClick={logout}>
          Выйти
        </button>
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
