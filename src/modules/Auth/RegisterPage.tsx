import '../../Layouts/styles/login.css';
const RegisterPage = (): JSX.Element => {
	
	
	const aplicarSombraDesvaneciente = (elemento: HTMLElement): void => {
		let intensidadSombra = 2.0;

		const intervalo = setInterval(() => {
			intensidadSombra -= 0.1;
			if (intensidadSombra <= 0) {
				clearInterval(intervalo);
				elemento.style.boxShadow = 'none'; // Eliminar la sombra al final
			} else {
				elemento.style.boxShadow = `0 0 20px rgba(0, 0, 0, ${intensidadSombra})`;
			}
		}, 40);
	};




	return (
		<>
			<div className="login-form__auth">
				<label>Email: este es el registro</label>
				<input type="email" />
				<label>Password:</label>
				<input type="password" />
			</div>
			<div className="b">
					<button> Login </button>
					<button id='register' >Sign in</button>
				</div>
		</>
	);
};
export default RegisterPage;
