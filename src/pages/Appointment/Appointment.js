// styles
import "./Appointment.css";
import "react-phone-number-input/style.css";

// react
import { useEffect, useState } from "react";

// comps
import Greeting from "../../comps/Greeting";
import Select from "react-select";
import DatePicker from "react-datepicker";
import PhoneInput from "react-phone-number-input";

// context
import { useDoctorsContext } from "../../hooks/useDoctorsContext";

// option for Select
const options = [
	{ value: "caries", label: "Лечение Кариеса" },
	{ value: "pulpitis", label: "Лечение Пульпита" },
	{ value: "prof", label: "Профилактический Осмотр" },
];

export default function Appointment() {
	const { doctors } = useDoctorsContext();

	const [DoctorsOptions, setDoctorsOptions] = useState(null);

	const [startDate, setStartDate] = useState(new Date());
	const [selectedReason, setSelectedReason] = useState(null);
	const [selectedDoctor, setSelectedDoctor] = useState(null);
	const [phone, setPhone] = useState(undefined);

	console.log(selectedDoctor);
	console.log(selectedReason);
	console.log(startDate);

	useEffect(() => {
		if (doctors) {
			setDoctorsOptions(
				doctors.map((doctor) => {
					const DoctorName = `${doctor.name.surname} ${doctor.name.firstName} ${doctor.name.lastName}`;

					return {
						value: doctor.id,
						label: DoctorName,
					};
				})
			);
		}
	}, [doctors]);

	console.log(DoctorsOptions);

	return (
		<div className="Appointment">
			<h2 className="title">Запись на Прием</h2>
			<form>
				<label>
					<Select
						className="select"
						options={options}
						placeholder="Выберите Цель Визита"
						onChange={(reason) => setSelectedReason(reason)}
						value={selectedReason}
					/>
				</label>

				<label>
					<Select
						className="select"
						options={DoctorsOptions}
						placeholder={
							DoctorsOptions ? "Выберите врача" : "Собираем консилиум..."
						}
						onChange={(doctor) => setSelectedDoctor(doctor)}
						value={selectedDoctor}
					/>
				</label>

				<label>
					<span>Выберите дату приема:</span>
					<DatePicker
						className="datepicker"
						selected={startDate}
						onChange={(date) => setStartDate(date)}
					/>
				</label>

				<label>
					<span>Комментарий для врача:</span>
					<textarea cols="60" rows="3"></textarea>
				</label>

				<label>
					<span>Контактный номер телефона:</span>
					<PhoneInput
						placeholder="Введите номер телефона в формате 1 234 567 89 89"
						value={phone}
						onChange={(num) => setPhone(num)}
					/>
				</label>

				<button>Записаться</button>
			</form>
		</div>
	);
}
