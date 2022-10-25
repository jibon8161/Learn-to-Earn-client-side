import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Allcourses from '../AllCourses/Allcourses';
import Sidebar from '../sidebar/Sidebar';
import './Course.css'

const Courses = () => {
    const data = useLoaderData([])
 
    return (
        <div>
            <h1 className='text-5xl font-extrabold text-purple-700 mb-2 mt-5'>We are offering you....</h1>


            <div className='lg:grid grid-cols-[9fr,3fr] '>


                <div className=''>

                    {

                        data.map(allcourse => <Allcourses key={allcourse.id} allcourse={allcourse}></Allcourses>)

                    }

                </div>
                <div className='border border-orange-500 '>
                    <div className="flex items-center p-2 space-x-4">
                        <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="w-12 h-12 rounded-full dark:bg-gray-500" />
                        <div>
                            <h2 className="text-lg font-semibold">Leroy Jenkins</h2>

                        </div>
                    </div>
                    {
                        data.map(sidebar => <Sidebar key={sidebar.key} sidebar={sidebar}></Sidebar>)


                    }
                </div>


            </div>

        </div>
    );
};

export default Courses;