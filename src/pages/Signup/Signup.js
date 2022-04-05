// styles
import "./Signup.css";

// hooks
import { useSignup } from "../../hooks/useSignup";
import { useState } from "react";

export default function Signup() {
  const { error, signup } = useSignup();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [displayName, setDisplayName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    signup(email, password, displayName, passwordCheck);
  };

  return (
    <div className="Signup">
      <form onSubmit={handleSubmit}>
        <h2>Регистрация</h2>
        <label>
          <input
            type="text"
            placeholder="имя"
            onChange={(e) => setDisplayName(e.target.value)}
            value={displayName}
          />
        </label>
        <label>
          <input
            type="text"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>

        <label>
          <input
            type="password"
            placeholder="пароль"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>
        <label>
          <input
            type="password"
            placeholder="повторите пароль"
            onChange={(e) => setPasswordCheck(e.target.value)}
            value={passwordCheck}
          />
        </label>

        <button>Регистрация</button>
        <button>К Авторизации</button>

        {error && <p>{error}</p>}
      </form>
    </div>
  );
}
