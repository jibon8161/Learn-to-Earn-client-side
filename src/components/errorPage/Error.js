import React from 'react';
import Lottie from 'lottie-react';
import er from './err.json'
import { useNavigate, useRouteError } from 'react-router-dom';

const Error = () => {
    const error = useRouteError()
    const navigate = useNavigate()
    const btnBack = () => {

        navigate('/courses')


    }
    return (
        <div className=''>
            <div>
                <Lottie className='lg:w-[40%] mx-auto mt-5' animationData={er}></Lottie>
            </div>
            <div className='text-red-700 font-extrabold text-4xl'>
                <h1>{error.status}</h1>
                <h1>{error.statusText}</h1>
                <button onClick={btnBack} className="btn btn-accent mt-5 w-32">Back to courses</button>

            </div>
        </div>
    );
};

export default Error;