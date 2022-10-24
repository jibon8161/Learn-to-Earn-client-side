import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/Firebase.config';



export const InfoContext = createContext()

export { getAuth } from 'firebase/auth'

const auth = getAuth(app)

const AuthContext = ({ children }) => {
    const [user, setUser] = useState('')
    const [loader, setLoader] = useState(true)

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

    const forgetPass = email => {


        return sendPasswordResetEmail(auth, email)


    }



    useEffect(() => {

        const unSubscribe = onAuthStateChanged(auth, currentUser => {

            setUser(currentUser)




        })

        return () => unSubscribe()


    }, [])

    const logOut = () => {

        setLoader(true)

        return signOut(auth)


    }



    const googleSignIn = provider => {


        return signInWithPopup(auth, provider)


    }






    const contextData = { user, createUser, verification, updateProfileInfo, signInWithEmail, forgetPass, logOut, googleSignIn }

    return (
        <div>

            <InfoContext.Provider value={contextData}>

                {children}

            </InfoContext.Provider>


        </div>
    );
};

export default AuthContext;