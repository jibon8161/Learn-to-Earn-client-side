import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
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


    const signInWithEmail = (email, pass) => {

        return signInWithEmailAndPassword(auth, email, pass)


    }






    const contextData = { user: 'jibon', createUser, verification, updateProfileInfo, signInWithEmail }

    return (
        <div>

            <InfoContext.Provider value={contextData}>

                {children}

            </InfoContext.Provider>


        </div>
    );
};

export default AuthContext;