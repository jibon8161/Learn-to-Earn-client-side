import React from 'react';
import Lottie from 'lottie-react';
import hm from './hm.json'
const Home = () => {
    return (
        <div>
            <div className='lg:mb-12 lg:mt-5 mt-12 '>
                <h1 className='text-5xl font-extrabold text-purple-700 mb-2'>Learn to Earn</h1>
                <p className='text-2xl'>A trusted educational platform for students</p>
                <p className='text-1xl'>We innovate learning processes</p>
            </div>
            <div>
                <Lottie className='lg:w-[40%] mx-auto mt-5' animationData={hm}></Lottie>
            </div>
            <div>




            </div>

        </div>
    );
};

export default Home;