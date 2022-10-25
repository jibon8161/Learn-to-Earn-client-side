import { createBrowserRouter } from "react-router-dom";
import Courses from "../../courses/Courses";
import Home from "../../home/Home";
import Login from "../../login/Login";
import Main from "../../main/Main";
import Register from "../../Register/Register";

export const router = createBrowserRouter([

    {

        path: '/',
        element: <Main></Main>,
        errorElement: <h1>Error</h1>,
        children: [

            {

                path: '/',
                element: <Home></Home>
            },
            {

                path: '/home',
                element: <Home></Home>
            },
            {

                path: '/login',
                element: <Login></Login>
            },
            {

                path: '/register',
                element: <Register></Register>
            },
            {

                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch('https://learn-to-earn-server.vercel.app/course')
            },





        ]

    }








])