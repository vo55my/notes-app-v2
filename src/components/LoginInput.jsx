import PropTypes from "prop-types";
import InputField from "./InputField";
import useInput from "../hooks/useInput";

function LoginInput({ login }) {
	const [email, onEmailChange] = useInput("");
	const [password, onPasswordChange] = useInput("");

	function onSubmitHandler(e) {
		e.preventDefault();
		login({ email, password });
	}

	return (
		<form className="input-login" onSubmit={onSubmitHandler}>
			<InputField
				type="email"
				name="email"
				label="Email"
				value={email}
				onChange={onEmailChange}
			/>
			<InputField
				type="password"
				name="password"
				label="Password"
				value={password}
				onChange={onPasswordChange}
			/>
			<button type="submit">
				Login
			</button>
		</form>
	);
}

LoginInput.propTypes = {
	login: PropTypes.func.isRequired,
};

export default LoginInput;
