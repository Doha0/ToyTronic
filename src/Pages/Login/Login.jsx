import { useContext, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Login = () => {

    const [error, setError] = useState('');

    const { logIn, googleSignIn } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const pathFrom = location.state?.from?.pathname || '/';


    const handelLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        setError('');
        logIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                form.reset();
                navigate(pathFrom, { replace: true });
            })
            .catch(error => {
                const errorMessage = error.message;
                setError(errorMessage);
            })
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
                navigate(pathFrom, { replace: true });
            })
            .catch(error => {
                const errorMessage = error.message;
                setError(errorMessage);
            })
    }

    return (
        <div className='grid grid-cols-1 justify-items-center mt-10' >
            <div className="hero min-h-screen bg-base-100">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl my-4 font-bold">Login to Toy Tronic</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-sky-200">
                        <div className="card-body ">
                            <form onSubmit={handelLogin} >
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' className="input input-bordered" required />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-info text-white">Login</button>
                                </div>
                                <label className="label">
                                    <Link to='/register' className="label-text-alt link link-hover">New to Toy Tronic? Create An Account</Link>
                                </label>
                            </form>

                            <div className="flex flex-col w-full border-opacity-50">
                                <div className="divider">OR</div>
                            </div>

                            <button onClick={handleGoogleSignIn} className="btn bg-white hover:btn-info hover:text-white text-black "><FcGoogle size={28}></FcGoogle> <span className='pl-2'>Sign-in with Google</span></button>

                            <p className="label">
                                <a className="text-red-700">{error} </a>
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;