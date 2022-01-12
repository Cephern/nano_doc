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
    {
      id: 4,
      date: "10 января",
      doctor: "Кековский А.Н.",
      diagnosis: "Пульпит",
      status: "canceled",
    },
    {
      id: 5,
      date: "5 января",
      doctor: "Кековский А.Н.",
      diagnosis: "Пульпит",
      status: "done",
    },
    {
      id: 6,
      date: "15 января",
      doctor: "Кековский А.Н.",
      diagnosis: "Пульпит",
      status: "awaiting",
    },
    {
      id: 7,
      date: "10 января",
      doctor: "Кековский А.Н.",
      diagnosis: "Пульпит",
      status: "canceled",
    },
    {
      id: 8,
      date: "5 января",
      doctor: "Кековский А.Н.",
      diagnosis: "Пульпит",
      status: "done",
    },
    {
      id: 9,
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
        <Link to="/diagnostict" className="diagnostic">
          Пройти Диагностику
        </Link>
        <Link to="/appointment" className="appointment">
          Записаться на Прием
        </Link>
      </div>

      <div className="appointment-history">
        <h3>История обращений</h3>

        <div className="sorting">
          <div className="data">
            <span>Дата</span>
            <span className="arrow-down">&#129047;</span>
          </div>
          <div className="diagnosis">
            <span>Диагноз</span>
            <span className="arrow-down">&#129047;</span>
          </div>
          <div className="doctor">
            <span>Врач</span>
            <span className="arrow-down">&#129047;</span>
          </div>
        </div>

        <ul>
          {appointments.map((appointment, index) => (
            <li key={appointment.id}>
              <div className="appointment-main">
                <span className="index">{index + 1}</span>
                <div className="appointment-inner-details">
                  <p>
                    Диагноз:{" "}
                    <span className="appointment-diagnosis">
                      {appointment.diagnosis}
                    </span>
                    . Лечащий Врач:{" "}
                    <span className="appointment-doctor">
                      {appointment.doctor}
                    </span>
                  </p>
                </div>
                <p className="date">
                  Дата Приема:{" "}
                  <span className="appointment-date">{appointment.date}</span>
                </p>
              </div>
              <span className={`arrow arrow-${appointment.status}`}>
                &#10004;
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
