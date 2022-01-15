// styles
import "./Doctors.css";

// images
import Doc1Photo from "../../assets/doctors/doc1.jpg";

// comps
import Greeting from "../../comps/Greeting";
import Modal from "./Modal";

// hooks
import { useState } from "react";

export default function Doctors() {
  const [doctors, setDoctors] = useState([
    {
      id: 11,
      name: { firstName: "Кек", surname: "Кекович", lastName: "Кековский" },
      photo: "doc1",
      specialty: "терапия",
      exp: "15 лет",
      workingWeek: [
        { day: "Пн", works: true },
        { day: "Вт", works: false },
        { day: "Ср", works: true },
        { day: "Чт", works: false },
        { day: "Пт", works: true },
        { day: "Сб", works: false },
        { day: "Вс", works: true },
      ],
      education:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus non quisquam nam ullam eligendi, culpa excepturi fugiat laudantium dolorem iure!",
      workingPlaces:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, magni ducimus. Consequuntur vitae, rem incidunt praesentium cumque perspiciatis iure ipsum.",
      aboutSelf:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta quia error adipisci reiciendis laborum suscipit quod corporis deserunt amet nulla.",
    },
    {
      id: 21,
      name: { firstName: "Кек", surname: "Кекович", lastName: "Кековский" },
      photo: "doc1",
      specialty: "терапия",
      exp: "15 лет",
      workingWeek: [
        { day: "Пн", works: true },
        { day: "Вт", works: false },
        { day: "Ср", works: true },
        { day: "Чт", works: false },
        { day: "Пт", works: true },
        { day: "Сб", works: false },
        { day: "Вс", works: true },
      ],
      education:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus non quisquam nam ullam eligendi, culpa excepturi fugiat laudantium dolorem iure!",
      workingPlaces:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, magni ducimus. Consequuntur vitae, rem incidunt praesentium cumque perspiciatis iure ipsum.",
      aboutSelf:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta quia error adipisci reiciendis laborum suscipit quod corporis deserunt amet nulla.",
    },
    {
      id: 31,
      name: { firstName: "Кек", surname: "Кекович", lastName: "Кековский" },
      photo: "doc1",
      specialty: "терапия",
      exp: "15 лет",
      workingWeek: [
        { day: "Пн", works: true },
        { day: "Вт", works: false },
        { day: "Ср", works: true },
        { day: "Чт", works: false },
        { day: "Пт", works: true },
        { day: "Сб", works: false },
        { day: "Вс", works: true },
      ],
      education:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus non quisquam nam ullam eligendi, culpa excepturi fugiat laudantium dolorem iure!",
      workingPlaces:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, magni ducimus. Consequuntur vitae, rem incidunt praesentium cumque perspiciatis iure ipsum.",
      aboutSelf:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta quia error adipisci reiciendis laborum suscipit quod corporis deserunt amet nulla.",
    },
    {
      id: 41,
      name: { firstName: "Кек", surname: "Кекович", lastName: "Кековский" },
      photo: "doc1",
      specialty: "терапия",
      exp: "15 лет",
      workingWeek: [
        { day: "Пн", works: true },
        { day: "Вт", works: false },
        { day: "Ср", works: true },
        { day: "Чт", works: false },
        { day: "Пт", works: true },
        { day: "Сб", works: false },
        { day: "Вс", works: true },
      ],
      education:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus non quisquam nam ullam eligendi, culpa excepturi fugiat laudantium dolorem iure!",
      workingPlaces:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, magni ducimus. Consequuntur vitae, rem incidunt praesentium cumque perspiciatis iure ipsum.",
      aboutSelf:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta quia error adipisci reiciendis laborum suscipit quod corporis deserunt amet nulla.",
    },
    {
      id: 51,
      name: { firstName: "Кек", surname: "Кекович", lastName: "Кековский" },
      photo: "doc1",
      specialty: "терапия",
      exp: "15 лет",
      workingWeek: [
        { day: "Пн", works: true },
        { day: "Вт", works: false },
        { day: "Ср", works: true },
        { day: "Чт", works: false },
        { day: "Пт", works: true },
        { day: "Сб", works: false },
        { day: "Вс", works: true },
      ],
      education:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus non quisquam nam ullam eligendi, culpa excepturi fugiat laudantium dolorem iure!",
      workingPlaces:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, magni ducimus. Consequuntur vitae, rem incidunt praesentium cumque perspiciatis iure ipsum.",
      aboutSelf:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta quia error adipisci reiciendis laborum suscipit quod corporis deserunt amet nulla.",
    },
    {
      id: 61,
      name: { firstName: "Кек", surname: "Кекович", lastName: "Кековский" },
      photo: "doc1",
      specialty: "терапия",
      exp: "15 лет",
      workingWeek: [
        { day: "Пн", works: true },
        { day: "Вт", works: false },
        { day: "Ср", works: true },
        { day: "Чт", works: false },
        { day: "Пт", works: true },
        { day: "Сб", works: false },
        { day: "Вс", works: true },
      ],
      education:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus non quisquam nam ullam eligendi, culpa excepturi fugiat laudantium dolorem iure!",
      workingPlaces:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, magni ducimus. Consequuntur vitae, rem incidunt praesentium cumque perspiciatis iure ipsum.",
      aboutSelf:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta quia error adipisci reiciendis laborum suscipit quod corporis deserunt amet nulla.",
    },
    {
      id: 71,
      name: {
        firstName: "Кек",
        surname: "Кекович",
        lastName: "Кековский",
      },
      photo: "doc1",
      specialty: "терапия",
      exp: "15 лет",
      workingWeek: [
        { day: "Пн", works: true },
        { day: "Вт", works: false },
        { day: "Ср", works: true },
        { day: "Чт", works: false },
        { day: "Пт", works: true },
        { day: "Сб", works: false },
        { day: "Вс", works: true },
      ],
      education:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus non quisquam nam ullam eligendi, culpa excepturi fugiat laudantium dolorem iure!",
      workingPlaces:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, magni ducimus. Consequuntur vitae, rem incidunt praesentium cumque perspiciatis iure ipsum.",
      aboutSelf:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta quia error adipisci reiciendis laborum suscipit quod corporis deserunt amet nulla.",
    },
    {
      id: 81,
      name: { firstName: "Кек", surname: "Кекович", lastName: "Кековский" },
      photo: "doc1",
      specialty: "терапия",
      exp: "15 лет",
      workingWeek: [
        { day: "Пн", works: true },
        { day: "Вт", works: false },
        { day: "Ср", works: true },
        { day: "Чт", works: false },
        { day: "Пт", works: true },
        { day: "Сб", works: false },
        { day: "Вс", works: true },
      ],
      education:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus non quisquam nam ullam eligendi, culpa excepturi fugiat laudantium dolorem iure!",
      workingPlaces:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, magni ducimus. Consequuntur vitae, rem incidunt praesentium cumque perspiciatis iure ipsum.",
      aboutSelf:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta quia error adipisci reiciendis laborum suscipit quod corporis deserunt amet nulla.",
    },
  ]);

  const [selectedDoctor, setSelectedDoctor] = useState(null);

  return (
    <div className={`Doctors ${selectedDoctor && "no-scroll"}`}>
      <Greeting />

      <div className="doctors-grid">
        {doctors.map((doctor) => (
          <div key={doctor.id} className="doctor-card">
            <img src={Doc1Photo} alt={`Доктор ${doctor.name.lastName}`} />
            <p className="name">
              {doctor.name.lastName} {doctor.name.firstName}{" "}
              {doctor.name.surname}
            </p>

            <p className="specialty">
              <span>{doctor.specialty}</span>, {doctor.exp}
            </p>

            <ul className="workingDays">
              {doctor.workingWeek.map((day) => (
                <li
                  key={doctor.id + Math.random()}
                  className={day.works ? "work" : "rest"}
                >
                  {day.day}
                </li>
              ))}
            </ul>

            <button onClick={() => setSelectedDoctor(doctor)}>Еще</button>
          </div>
        ))}
      </div>

      {selectedDoctor && (
        <Modal
          doctor={selectedDoctor}
          photo={Doc1Photo}
          setSelectedDoctor={setSelectedDoctor}
        />
      )}
      {/* Ti petih */}
    </div>
  );
}
