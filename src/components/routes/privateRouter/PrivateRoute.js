import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { InfoContext } from '../../authContext/AuthContext';

const PrivateRoute = ({ children }) => {
    const location = useLocation()

    const { user, loader } = useContext(InfoContext)
    if (loader) {

        return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-red-600"></div>


    }

    if (user && user?.uid) {

        return children;
    }

    return (
        <Navigate to='/login' state={{ from: location }} replace ></Navigate>
    );
};

export default PrivateRoute;