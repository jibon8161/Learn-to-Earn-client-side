import { createBrowserRouter } from "react-router-dom";
import CourseDetails from "../../../courseDetails/CourseDetails";
import Courses from "../../courses/Courses";
import Home from "../../home/Home";
import Login from "../../login/Login";
import Main from "../../main/Main";
import Premium from "../../PremiumAccess/Premium";
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
            {

                path: '/details/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({ params }) => fetch(`https://learn-to-earn-server.vercel.app/course/${params.id}`)
            },
            {

                path: '/premium/:id',
                element: <Premium></Premium>,
                loader: ({ params }) => fetch(`https://learn-to-earn-server.vercel.app/course/${params.id}`)
            },










        ]

    }








])