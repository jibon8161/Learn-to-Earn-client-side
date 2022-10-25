import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/Firebase.config';



export const InfoContext = createContext()

export { getAuth } from 'firebase/auth'

const auth = getAuth(app)

const AuthContext = ({ children }) => {
    const [user, setUser] = useState('')
    const [loader, setLoader] = useState(true)

    const gitProvider = new GithubAuthProvider()

    const createUser = (email, pass) => {

        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, pass)


    }
    const verification = () => {

        setLoader(true)
        return sendEmailVerification(auth.currentUser)

    }


    const updateProfileInfo = (name, url) => {
        setLoader(true)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: url

        })
    }


    const signInWithEmail = (email, pass) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, pass)


    }

    const forgetPass = email => {

        setLoader(true)
        return sendPasswordResetEmail(auth, email)


    }

    const githubSignIin = () => {

        setLoader(true)
        return signInWithPopup(auth, gitProvider)



    }



    useEffect(() => {

        const unSubscribe = onAuthStateChanged(auth, currentUser => {

            setUser(currentUser)
            setLoader(false)



        })

        return () => unSubscribe()


    }, [])

    const logOut = () => {

        setLoader(true)

        return signOut(auth)


    }



    const googleSignIn = provider => {

        setLoader(true)
        return signInWithPopup(auth, provider)


    }






    const contextData = { user, createUser, verification, updateProfileInfo, signInWithEmail, forgetPass, logOut, googleSignIn, githubSignIin, loader }

    return (
        <div>

            <InfoContext.Provider value={contextData}>

                {children}

            </InfoContext.Provider>


        </div>
    );
};

export default AuthContext;