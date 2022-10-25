import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Allcourses from '../AllCourses/Allcourses';
import { InfoContext } from '../authContext/AuthContext';
import Sidebar from '../sidebar/Sidebar';


const Courses = () => {
    const data = useLoaderData([])

    const { user } = useContext(InfoContext)

    return (
        <div>
            <div>
                <h1 className='lg:text-4xl text-2xl font-extrabold text-purple-700 mt-5 mb-5'>{user?.displayName} <br /> <span className='text-black'>We are offering you....</span></h1>
            </div>


            <div className='lg:grid grid-cols-[9fr,3fr] '>


                <div className='lg:grid grid-cols-3'>

                    {

                        data.map(allcourse => <Allcourses key={allcourse.id} allcourse={allcourse}></Allcourses>)

                    }

                </div>
                <div className='lg:shadow-inner shadow-zinc-700 mt-5'>
                    <div className="lg:flex items-center lg:p-2 lg:space-x-4 bg-black text-slate-100">

                        <div>
                            <h2 className="lg:text-lg font-semibold"> Click below for more details...</h2>

                        </div>
                    </div>
                    <div className='shadow-inner shadow-zinc-700'>
                        {
                            data.map(sidebarData => <Sidebar key={sidebarData.id} sidebarData={sidebarData}></Sidebar>)


                        }
                    </div>
                </div>


            </div>

        </div>
    );
};

export default Courses;