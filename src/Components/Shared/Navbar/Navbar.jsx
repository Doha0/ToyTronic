// import React from 'react';
import logo from '../../../assets/logo.png'

import { Link } from "react-router-dom";

const Navbar = () => {

    const navbarItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">All Toys</Link></li>
        <li><Link to="/">Blogs</Link></li>
    </>

    return (
        <nav className="navbar bg-sky-200 text-sky-500">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className=" font-medium menu menu-compact dropdown-content mt-3 p-2 shadow bg-sky-200 text-black rounded-box w-52">
                        {
                            navbarItems
                        }
                    </ul>
                </div>

                <Link to="/" className="btn btn-ghost normal-case font-bold text-xl"><img className='w-12 mr-2' src={logo} alt="" />Toy Tronic</Link>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className=" font-medium menu menu-horizontal px-1">
                    {
                        navbarItems
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <Link to="/login" className="btn btn-info text-white">Login Now</Link>
            </div>
        </nav>
    );
};

export default Navbar;