// styles
import "./Greeting.css";

// hooks
import { useAuthContext } from "../hooks/useAuthContext";

export default function Greeting() {
  const { user } = useAuthContext();

  return (
    <div className="greeting">
      <h2>Здравствуйте, {user.name}</h2>
    </div>
  );
}
