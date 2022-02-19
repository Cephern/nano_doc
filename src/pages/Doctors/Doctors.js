// styles
import "./Doctors.css";

// images
import Doc1Photo from "../../assets/doctors/doc1.jpg";

// comps
import Modal from "./Modal";

// hooks
import { useState } from "react";
import { useDoctorsContext } from "../../hooks/useDoctorsContext";

export default function Doctors() {
	const [selectedDoctor, setSelectedDoctor] = useState(null);

	const { doctors } = useDoctorsContext();

	return (
		<div className={`Doctors ${selectedDoctor && "no-scroll"}`}>
			<h2>Наши Врачи</h2>
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
		</div>
	);
}
