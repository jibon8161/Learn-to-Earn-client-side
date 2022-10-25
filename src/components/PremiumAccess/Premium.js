import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Premium = () => {

    const data = useLoaderData()

    return (
        <div>
            <h1>{data.name}</h1>
        </div>
    );
};

export default Premium;