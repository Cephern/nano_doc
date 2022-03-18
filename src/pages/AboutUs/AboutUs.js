// styles
import "./AboutUs.css";

// hooks
import { useState } from "react";
import Review from "./Review.js";

// comps

export default function AboutUs() {
	const user = { name: "Максон" };

	const [reviews, setReviews] = useState([
		{ id: 0, name: "Kek Kekov", text: "Первый отзыв!", date: "Today" },
		{ id: 1, name: "Kek Kekov", text: "Второй отзыв!", date: "Yesterday" },
		{ id: 2, name: "Kek Kekov", text: "Третий отзыв!", date: "Two days ago" },
	]);
	return (
		<div id="About">
			<h2 className="title">О Нас</h2>
			<div className="main">
				<div className="description">
					<p>
						Здравствуйте и спасибо за выбор сервиса “NanoDoc”! Цель нашего
						сервиса – предоставить Вам предварительный диагноз
						стоматологического заболевания. Все что нужно сделать – заполнить
						форму на главной странице, ответив на 10 коротких вопросов. Для
						получения результата обязательно ответить на все вопросы. Если вы
						хотите, чтобы вашу заявку и диагноз рассмотрел врач – выберите его
						из списка в верхней части страницы. Для облегчения выбора врача мы
						предоставляем страницу “Врачи”, которая поможет сделать Вам
						правильный выбор. Если у Вас остались какие-то вопросы, пожелания и
						предложения, или же Вы хотите поделиться своим опытом использования
						приложения, тогда стоит оставить отзыв, заполнив форму справа. Будем
						рады Вашим комментариям!
					</p>
					<div className="social">
						<h3>Мы в соц.сетях</h3>
						<ul>
							<li>Vk</li>
							<li>YT</li>
							<li>Tw</li>
							<li>Tlg</li>
							<li>Ud</li>
							<li>Dsc</li>
						</ul>
					</div>
				</div>
				<div className="reviews">
					<form>
						<p>От: {user ? user.name : "Аноним"}</p>
						<label htmlFor="review">Отзыв</label>
						<textarea id="review" cols="30" rows="3"></textarea>
						<button>Отправить</button>
					</form>
					<div className="reviews-inner">
						{reviews.map((review) => (
							<Review key={review.id} review={review} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
