// styles
import "./Signup.css";

export default function Signup() {
	return (
		<div className="Signup">
			<form>
				<h2>Регистрация</h2>
				<label>
					<input type="text" placeholder="логин" />
				</label>
				<label>
					<input type="text" placeholder="email" />
				</label>

				<label>
					<input type="password" placeholder="пароль" />
				</label>
				<label>
					<input type="password" placeholder="повторите пароль" />
				</label>

				<button>Регистрация</button>
				<button>К Авторизации</button>
			</form>
		</div>
	);
}
