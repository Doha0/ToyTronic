import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/HomePage/Home/Home";
import Error from "../Components/Error/Error";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Blog from "../Pages/Blog/Blog";
import AllToys from "../Pages/ToyPages/AllToys/AllToys";
import MyToys from "../Pages/ToyPages/MyToys/MyToys";
import AddToy from "../Pages/ToyPages/AddToy/AddToy";
import Spinner from "../Components/Shared/Spinner/Spinner";
import PrivateRoute from "./PrivateRoute";
import SingleToy from "../Pages/ToyPages/SingleToy/SingleToy";
import UpdateToy from "../Pages/ToyPages/UpdateToy/UpdateToy";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "/allToys",
                element: <AllToys></AllToys>,
                loader: () => fetch('https://toy-tronic-server.vercel.app/toys')
            },
            {
                path: "/singleToy/:id",
                element: <PrivateRoute> <SingleToy></SingleToy> </PrivateRoute>,
                loader: ({ params }) => fetch(`https://toy-tronic-server.vercel.app/toys/${params.id}`)
            },
            {
                path: "/myToys",
                element: <PrivateRoute><MyToys></MyToys></PrivateRoute>,
            },
            {
                path: "/update/:id",
                element: <PrivateRoute><UpdateToy></UpdateToy></PrivateRoute>,
                loader: ({ params }) => fetch(`https://toy-tronic-server.vercel.app/toys/${params.id}`)
            },
            {
                path: "/addToy",
                element: <PrivateRoute><AddToy></AddToy></PrivateRoute>,
            },
            {
                path: "/spinner",
                element: <Spinner></Spinner>
            },
        ]
    },
]);

export default router;