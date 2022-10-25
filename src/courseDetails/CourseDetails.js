import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { FaDownload } from "react-icons/fa";


const CourseDetails = () => {

    const data = useLoaderData()
    const { id } = data
    console.log(data)

    const navigate = useNavigate()

    const premiumAccessBtn = () => {


        navigate(`/premium/${id}`)
        console.log('click')


    }



    return (
        <div>
            <div className="navbar bg-gray-100  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:mb-12 shadow-2xl  shadow-zinc-600">
                <div className="lg:flex-1 text-2xl font-bold ">
                    <p className='hidden lg:block'>You have Selected </p><span className='text-purple-700 font-bold mr-3 ml-3'>{data?.name}</span><img className='w-10 ' src={data?.urlimg} alt="" />
                </div>
                <div className="flex-none ml-8">
                    <div >
                        <button type="button" className="relative px-8 py-4 ml-4 overflow-hidden font-bold text-3xl rounded dark:bg-gray-100 dark:text-gray-900"><FaDownload className='text-red-600'></FaDownload>
                            <span className="absolute top-0 right-0 px-5 py-1 text-xs tracking-wider text-center uppercase whitespace-no-wrap origin-bottom-left transform rotate-45 -translate-y-full translate-x-1/3 dark:bg-violet-400 text-purple-700">PDF</span>
                        </button>
                    </div>

                </div>
            </div>

            <div>
                <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
                    <div class="w-full bg-gray-300 bg-center bg-cover rounded-lg shadow-md" >

                        <img className='w-full' src={data?.urlimg} alt="" />

                    </div>

                    <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                        <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">{data?.name}</h3>

                        <div class="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                            <span class="font-bold text-gray-800 dark:text-gray-200">{data?.price}$</span>
                            <button onClick={premiumAccessBtn} class="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">Get premium access</button>
                        </div>

                    </div>
                </div>
                <p className='mt-4 mb-5 font-semibold'>{data.details}</p>
            </div>

        </div>
    );
};

export default CourseDetails;