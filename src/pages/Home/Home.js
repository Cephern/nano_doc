// styles
import "./Home.css";

// hooks
import { useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";

// routing
import { Link } from "react-router-dom";

export default function Home() {
  const { user } = useAuthContext();

  const [appointments, setAppointments] = useState([
    {
      id: 1,
      date: "10 января",
      doctor: "Кековский А.Н.",
      diagnosis: "Пульпит",
      status: "canceled",
    },
    {
      id: 2,
      date: "5 января",
      doctor: "Кековский А.Н.",
      diagnosis: "Пульпит",
      status: "done",
    },
    {
      id: 3,
      date: "15 января",
      doctor: "Кековский А.Н.",
      diagnosis: "Пульпит",
      status: "awaiting",
    },
  ]);

  return (
    <div className="Home">
      <div className="greeting">
        <h2>Здравствуйте, {user.name}</h2>
      </div>

      <div className="actions">
        <Link to="/diagnosticts" className="diagnostic">
          Пройти Диагностику
        </Link>
        <Link to="/appointment" className="appointment">
          Записаться на Прием
        </Link>
      </div>

      <div className="appointment-history">
        <h3>История обращений</h3>
        <ul>
          {appointments.map((appointment) => (
            <li key={appointment.id}>
              <p>
                Диагноз: {appointment.diagnosis}, Лечащий Врач:{" "}
                {appointment.doctor}, Дата Приема: {appointment.date}
              </p>
              <span>{appointment.status}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
