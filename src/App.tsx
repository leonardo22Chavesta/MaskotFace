import img from './Layouts/images/perroLogin.png'
import './Layouts/styles/App.css';
import googleIcon from './Layouts/icons/icons8-logo-de-google.svg'

const App = (): JSX.Element => {
	return (
		<>
			<div className="app-container">
				<div className="login-content">
					<div className='img-div' >
						<img className='img' src={img} alt="" />
						<div className='img-descripcion'>
							<h2>Explore our network for pet lovers.</h2>
							<p>Share, make friends and take care of your pets! Join our animal love community.</p>
						</div>
					</div>
					<div className='login-content__login'>
						<h1>
							Maskot<span>Face</span>
						</h1>
						<div className="form-Login">
							<p>Welcome to MaskotFace</p>
							<div>
								<label>User name our Email:</label>
								<input type="email" />
								<label>Password:</label>
								<input type="password" />
								<div className='recuperar'>
									<a href="#">Forgot password?</a>
								</div>
							</div>
								<button className='botton__login'> Sign in </button>
								<p className='ds'>or</p>
							<div className='google_accon'>
								<img width="30px" src={googleIcon} alt="" />
								<span>Sign in with Google</span>
							</div>
							<div className='create_accon'>
								<h4>New MacoktFace?<a href="#"> Create Account</a></h4>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default App;
