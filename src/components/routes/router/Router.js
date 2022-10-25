import { createBrowserRouter } from "react-router-dom";
import CourseDetails from "../../../courseDetails/CourseDetails";
import Blog from "../../blog/Blog";
import Courses from "../../courses/Courses";
import Error from "../../errorPage/Error";
import Home from "../../home/Home";
import Login from "../../login/Login";
import Main from "../../main/Main";
import Premium from "../../PremiumAccess/Premium";
import Register from "../../Register/Register";
import PrivateRoute from "../privateRouter/PrivateRoute";

export const router = createBrowserRouter([

    {

        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
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

                path: '/blog',
                element: <Blog></Blog>
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
                element: <PrivateRoute><Premium></Premium></PrivateRoute>,
                loader: ({ params }) => fetch(`https://learn-to-earn-server.vercel.app/course/${params.id}`)
            },










        ]

    }








])