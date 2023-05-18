// import React from 'react';
import { Link } from 'react-router-dom';
import errorPage from '../../assets/error.jpg'

const Error = () => {
    return (

        <div  >
            <div className='flex justify-center items-center'>

                <img className='w-1/2' src={errorPage} alt="error" />


            </div >
            <div className='text-center'>
                <Link to='/' className="btn btn-wide bg-slate-900 text-white ">Back to Home</Link>
            </div>

        </div>

    );
};

export default Error;