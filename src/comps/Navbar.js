// styles
import "./Navbar.css";

// navigation
import { NavLink, Link } from "react-router-dom";

// hooks
import { useState } from "react";

export default function Navbar() {
  const [user, setUser] = useState(true);

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

      {user && (
        <ul className="right">
          <li>
            <NavLink to="/login">Войти</NavLink>
          </li>
          <li>
            <NavLink to="/signup">Регистрация</NavLink>
          </li>
        </ul>
      )}

      {!user && <button>Logout</button>}
    </nav>
  );
}
