// import React from 'react';
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import useTitle from "../../Hook/useTitle";

const Register = () => {

    useTitle('Register');


    const [error, setError] = useState('');

    const { createUser, userInfo, googleSignIn } = useContext(AuthContext);

    const handelSignUp = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const photo = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;

        setError('');
        if (password.length < 6) {
            setError('Please enter at least 6 character');
            return;
        }

        createUser(email, password)
            .then((result) => {
                const createdUser = result.user;
                userInfo(name, photo)
                    .then(() => {

                    }).catch((error) => {

                    });

                form.reset();
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            });

    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
            })
            .catch(error => {
                const errorMessage = error.message;
                setError(errorMessage);
            })
    }



    return (
        <div className='grid grid-cols-1 justify-items-center mt-20' >
            <div className="hero min-h-screen bg-base-100">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl my-4 font-bold">New to Toy Tronic? <br /> <p className='py-4'>Register Now</p></h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-sky-200">

                        <div className="card-body">
                            <form onSubmit={handelSignUp} >

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' className="input input-bordered " required />
                                </div>

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

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" name='photoUrl' className="input input-bordered" required />
                                </div>

                                <div className="form-control mt-6">
                                    <button className="btn btn-info text-white">Register</button>
                                </div>
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

export default Register;