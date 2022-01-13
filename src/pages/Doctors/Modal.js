// styles
import "./Modal.css";

export default function Modal({ doctor, photo, setSelectedDoctor }) {
  return (
    <div className="modal">
      <div className="modal-main">
        <span className="close" onClick={() => setSelectedDoctor(null)}>
          X
        </span>
        <img src={photo} alt={`Доктор ${doctor.name.lastName}`} />

        <p className="name">
          {doctor.name.lastName} {doctor.name.firstName} {doctor.name.surname}
        </p>

        <p className="specialty">
          Специальность - <span>{doctor.specialty}</span>
        </p>
        <p className="exp">
          Стаж - <span>{doctor.exp}</span>
        </p>

        <div className="education tile">
          <p>Образование</p>
          <span>{doctor.education}</span>
        </div>

        <div className="workingPlaces tile">
          <p>Места Работы</p>
          <span>{doctor.workingPlaces}</span>
        </div>

        <div className="aboutSelf tile">
          <p>О Себе</p>
          <span>{doctor.aboutSelf}</span>
        </div>
      </div>
    </div>
  );
}
