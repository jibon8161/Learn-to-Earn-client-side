import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { InfoContext } from '../authContext/AuthContext';

const Premium = () => {

    const data = useLoaderData()
    const { user } = useContext(InfoContext)

    return (

        <div className='grid grid-cols-2 '>

            <div className='border p-2 ml-8 rounded-2xl lg:w-[800px]  shadow-zinc-600 shadow-2xl mb-2 mt-2 '>
                <h1 className='text-4xl mt-12 font-bold shadow-2xl rounded-lg  shadow-zinc-600'>Congratulations <span className='text-purple-800'>{user?.displayName}</span></h1>
                <img className='w-44 mt-2 mx-auto shadow-2xl  shadow-zinc-600' src={user?.photoURL} alt="" />
                <h1 className='text-4xl mt-6 font-bold shadow-2xl rounded-lg  shadow-zinc-600'> your selected course is <span className='text-purple-800'>{data?.name}</span></h1>
                <h1 className='text-4xl mt-12 font-bold shadow-2xl rounded-lg   shadow-zinc-600'> Course Id : <span className='text-purple-800'>{data?.id}</span></h1>
                <h1 className='text-4xl mt-12 font-bold shadow-2xl rounded-lg  shadow-zinic-600'> It will cost <span className='text-purple-800'>{data?.price}$</span></h1>
            </div>
            <div className="card w-96 bg-base-100  image-full mx-auto mt-8 mb-24 shadow-2xl  shadow-zinc-600 ">

                <figure><img src={data?.urlimg} alt="Shoes" /></figure>

            </div>
        </div>


    );
};

export default Premium;