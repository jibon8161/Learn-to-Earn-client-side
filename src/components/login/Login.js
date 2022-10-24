import React from 'react';
import { FaGoogle, FaGithub, FaFacebook } from "react-icons/fa";

const Login = () => {
    return (
        <div>
            <div>
                <div className="hero min-h-screen bg-base-200 shadow-2xl">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">Login now!</h1>

                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input  type="text" placeholder="email" name='email' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" name='pass' className="input input-bordered" />

                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                            </form>
                            <div className="form-control mt-6 grid grid-cols-3 gap-0">
                                <div>
                                    <button  className="btn btn-circle btn-outline"><FaGoogle></FaGoogle></button>
                                </div>
                                <div>
                                    <button  className="btn btn-circle btn-outline"><FaFacebook></FaFacebook></button>
                                </div>
                                <div>
                                    <button  className="btn btn-circle btn-outline"><FaGithub></FaGithub></button>
                                </div>
                            </div>
                            <label className="label">
                                <button ><small>Forget passWord? </small></button>
                            </label>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;