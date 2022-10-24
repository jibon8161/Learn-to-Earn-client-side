import { createUserWithEmailAndPassword, getAuth, sendEmailVerification } from 'firebase/auth';
import React, { createContext } from 'react';
import app from '../../firebase/Firebase.config';



export const InfoContext = createContext()

export { getAuth } from 'firebase/auth'

const auth = getAuth(app)

const AuthContext = ({ children }) => {

    const createUser = (email, pass) => {


        return createUserWithEmailAndPassword(auth, email, pass)


    }
    const verification = () => {


        return sendEmailVerification(auth.currentUser)

    }






    const contextData = { user: 'jibon', createUser, verification }

    return (
        <div>

            <InfoContext.Provider value={contextData}>

                {children}

            </InfoContext.Provider>


        </div>
    );
};

export default AuthContext;