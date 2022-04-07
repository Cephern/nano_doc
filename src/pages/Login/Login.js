// styles
import "./Login.css";

// hooks
import { useLogin } from "../../hooks/useLogin";
import { useState } from "react";

export default function Login() {
  const { error, login } = useLogin();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    login(email, password);
  };

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <h2>Авторизация</h2>
        <label>
          <input
            type="text"
            placeholder="логин"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>

        <label>
          <input
            type="password"
            placeholder="пароль"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <button>Войти</button>
        <button>Регистрация</button>
      </form>
    </div>
  );
}
