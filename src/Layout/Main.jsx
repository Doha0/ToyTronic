import React from 'react';
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar/Navbar";
import Footer from "../Components/Shared/Footer/Footer";


const Main = () => {



    return (
        <div className="container mx-auto">

            <Navbar></Navbar>

            <div className="px-4 md:px-0">
                <Outlet></Outlet>
            </div>

            <Footer></Footer>

        </div>
    );
};

export default Main;