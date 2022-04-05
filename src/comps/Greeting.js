// styles
import "./Greeting.css";

// hooks
import { useAuthContext } from "../hooks/useAuthContext";

export default function Greeting() {
  const { user } = useAuthContext();

  return (
    <div className="greeting">
      <h2>Здравствуйте, {user ? user.displayName : "Гость"}</h2>
    </div>
  );
}
