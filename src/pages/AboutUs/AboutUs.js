// styles
import "./AboutUs.js";

// hooks
import { useState } from "react";
import Review from "./Review.js";

// comps

export default function AboutUs() {
	const [reviews, setReviews] = useState([
		{ name: "Kek Kekov", text: "Первый отзыв!", date: "Today" },
		{ name: "Kek Kekov", text: "Второй отзыв!", date: "Yesterday" },
		{ name: "Kek Kekov", text: "Третий отзыв!", date: "Two days ago" },
	]);
	return (
		<div id="About">
			<h2>О Сервисе</h2>
			<div className="description">
				<p>
					Здравствуйте и спасибо за выбор сервиса “NanoDoc”. Цель нашего сервиса
					– предоставить Вам предварительный диагноз стоматологического
					заболевания. Все что нужно сделать – заполнить форму на главной
					странице, ответив на 10 коротких вопросов. Для получения результата
					обязательно ответить на все вопросы. Если вы хотите, чтобы вашу заявку
					и диагноз рассмотрел врач – выберите его из списка в верхней части
					страницы. Для облегчения выбора врача мы предоставляем страницу
					“Врачи”, которая поможет сделать Вам правильный выбор. Если у Вас
					остались какие-то вопросы, пожелания и предложения, или же Вы хотите
					поделиться своим опытом использования приложения, тогда стоит оставить
					отзыв, заполнив форму справа. Будем рады Вашим комментариям!
				</p>
			</div>
			<div className="reviews">
				<h3>Отзывы</h3>
				<div className="reviews-inner">
					{reviews.map((review) => (
						<Review review={review} />
					))}
				</div>
				<form>
					<label>
						<span>Отзыв от:</span>
						<input type="text" />
						<label>
							<span>Отзыв:</span>
							<textarea cols="30" rows="10"></textarea>
						</label>
						<button>Отправить</button>
					</label>
				</form>
			</div>
		</div>
	);
}
