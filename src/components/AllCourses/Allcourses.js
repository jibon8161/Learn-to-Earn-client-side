import React from 'react';

const Allcourses = ({ allcourse }) => {

    console.log(allcourse)
    const { urlimg, name, price } = allcourse

    return (
        <div >
            <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
                <img src={urlimg} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                <div className="mt-6 mb-2">
                    <span className="block text-xs  tracking-widest uppercase dark:text-violet-400 font-bold">{price}$</span>
                    <h2 className="text-xl font-semibold tracking-wide">{name}</h2>
                </div>
                <button className="btn glass shadow-inner  shadow-zinc-600 hover:bg-black font-semibold hover:text-2xl  text-purple-700">More details</button>
            </div>
        </div>
    );
};

export default Allcourses;