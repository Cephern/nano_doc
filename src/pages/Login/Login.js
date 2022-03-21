// styles
import "./Login.css";

export default function Login() {
	return (
		<div className="Login">
			<form>
				<h2>Авторизация</h2>
				<label>
					<input type="text" placeholder="логин" />
				</label>

				<label>
					<input type="password" placeholder="пароль" />
				</label>

				<button>Войти</button>
				<button>Регистрация</button>
			</form>
		</div>
	);
}
