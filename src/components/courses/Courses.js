import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Allcourses from '../AllCourses/Allcourses';
import { InfoContext } from '../authContext/AuthContext';
import Sidebar from '../sidebar/Sidebar';
import './Course.css'

const Courses = () => {
    const data = useLoaderData([])

    const { user } = useContext(InfoContext)

    return (
        <div>
            <h1 className='text-4xl font-extrabold text-purple-700 mb-2 mt-5'>{user?.displayName} We are offering you....</h1>


            <div className='lg:grid grid-cols-[9fr,3fr] '>


                <div className='lg:grid grid-cols-3'>

                    {

                        data.map(allcourse => <Allcourses key={allcourse.id} allcourse={allcourse}></Allcourses>)

                    }

                </div>
                <div className='shadow-inner shadow-zinc-700'>
                    <div className="flex items-center p-2 space-x-4 bg-black text-slate-100">

                        <div>
                            <h2 className="text-lg font-semibold"> Click below for more details...</h2>

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