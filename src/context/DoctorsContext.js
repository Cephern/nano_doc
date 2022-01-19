import { createContext, useState } from "react";

export const DoctorsContext = createContext();

export const DoctorsContextProvider = ({ children }) => {
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

  return (
    <DoctorsContext.Provider value={{ doctors }}>
      {children}
    </DoctorsContext.Provider>
  );
};
