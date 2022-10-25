import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { FaGoogle, FaGithub} from "react-icons/fa";
import { Link } from 'react-router-dom';
import { InfoContext } from '../authContext/AuthContext';
import Lottie from 'lottie-react';
import anim from './animlogin.json'

const Login = () => {
    const { signInWithEmail, forgetPass, googleSignIn, githubSignIin } = useContext(InfoContext)
    const [email, setEmail] = useState()
    const [error, setError] = useState('')
    const gProvider = new GoogleAuthProvider()

    const handleLogin = (event) => {

        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.pass.value
        console.log(email, password)
        signInWithEmail(email, password)
            .then(result => {

                const user = result.user;
                console.log(user)
                form.reset()
                setError('')
                toast.success('You are successfully logged in')




            })
            .catch(error => {


                console.log(error)
                setError(error.message)

            })

    }

    const forget = (event) => {

        const email = event.target.value
        setEmail(email)



    }


    const sentResetMail = () => {


        forgetPass(email)
            .then(toast.success('reset mail has been sent to your mail address'))


    }


    const google = () => {


        googleSignIn(gProvider)
            .then(result => {

                const user = result.user;
                console.log(user)
                toast.success('You are successfully logged in')




            })
            .catch(error => {


                console.log(error)



            })




    }

    const github = () => {


        githubSignIin()

            .then(result => {

                const user = result.user;
                console.log(user)


            })
            .catch(error => {


                console.log(error)



            })


    }





    return (
        <div>
            <div>
                <div className="hero min-h-screen bg-base-200 shadow-2xl  shadow-zinc-600">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left">
                        <Lottie className='w-[70%] lg:ml-52' animationData={anim}></Lottie>

                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={handleLogin} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text  text-purple-800 font-semibold">Email</span>
                                    </label>
                                    <input onBlur={forget} type="text" placeholder="email" name='email' className="input input-bordered shadow-inner  shadow-zinc-600 hover:bg-orange-200" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text  text-purple-800 font-semibold">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" name='pass' className="input input-bordered shadow-inner shadow-zinc-600 hover:bg-orange-200" />

                                </div>
                                <div className='text-red-600'><p><small>{error}</small></p></div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                            </form>
                            <h1 className='text-purple-800 font-bold'>More login options</h1>
                            <div className="form-control mt-6 grid grid-cols-2 gap-0 mb-5 ">

                                <div>
                                    <button onClick={google} className="btn btn-circle btn-outline  ml-28"><FaGoogle></FaGoogle></button>
                                </div>

                                <div>
                                    <button onClick={github} className="btn btn-circle btn-outline mr-28"><FaGithub></FaGithub></button>
                                </div>
                            </div>

                            <p><small>Are you new here? <Link to='/register'><button className="btn btn-link btn-xs"><small>Register</small></button></Link> </small></p>

                            <p> <button onClick={sentResetMail} className="btn btn-link btn-xs"><small>Forget password? Don't Worry Click Here </small></button></p>


                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;