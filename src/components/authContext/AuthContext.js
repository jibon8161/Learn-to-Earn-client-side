import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateProfile } from 'firebase/auth';
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


    const updateProfileInfo = (name, url) => {
     
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: url

        })
    }






    const contextData = { user: 'jibon', createUser, verification, updateProfileInfo }

    return (
        <div>

            <InfoContext.Provider value={contextData}>

                {children}

            </InfoContext.Provider>


        </div>
    );
};

export default AuthContext;