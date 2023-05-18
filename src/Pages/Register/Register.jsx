// import React from 'react';
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";

const Register = () => {


    const [error, setError] = useState('');

    const { createUser, userInfo } = useContext(AuthContext);

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
                console.log(createdUser);
                form.reset();
            })
            .catch((error) => {
                const errorMessage = error.message;
                // console.log(errorMessage);
                setError(errorMessage);
            });



    }


    return (
        <div className='grid grid-cols-1 justify-items-center mt-20' >
            <div className="hero min-h-screen bg-base-100">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl my-4 font-bold">New to Toy Tronic? <br /> <p className='py-4'>Register Now</p></h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-sky-200">

                        <form onSubmit={handelSignUp} className="card-body">

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
                            <label className="label">
                                <Link to='/login' className="label-text-alt link link-hover">Already have an account? Login</Link>
                            </label>
                            <label className="label">
                                <p className="text-red-700">{error} </p>
                            </label>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;