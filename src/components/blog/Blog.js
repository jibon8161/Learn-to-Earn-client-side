import React from 'react';
import Lottie from 'lottie-react';
import bl from './bl.json'
const Blog = () => {
    return (
        <div className='lg:grid grid-cols-2 justify-around'>
            <div>
                <Lottie className='lg:w-[60%] mx-auto mt-5' animationData={bl}></Lottie>
            </div>
            <div className='mt-16'>
                <div className="collapse lg:mr-5">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl border border-base-300 bg-base-100 rounded-box font-extrabold">
                        what is cors? <span className='text-red-600'>Click here</span>
                    </div>
                    <div className="collapse-content font-bold">
                        <p>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</p>
                    </div>
                </div>



                <div className="collapse lg:mr-5">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl border border-base-300 bg-base-100 rounded-box  font-extrabold">
                        Why are you using firebase? What other options do you have to implement authentication? <span className='text-red-600'>Click here</span>
                    </div>
                    <div className="collapse-content font-bold">
                        <p>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.Some Similar authentication system like firebase are MongoDB.
                            Oracle Database.
                            Amazon Redshift.
                            DataStax Enterprise.
                            Redis Enterprise Cloud.
                            Cloudera Enterprise Data Hub.
                            Db2.
                            Couchbase Server.</p>
                    </div>
                </div>




                <div className="collapse lg:mr-5">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl border border-base-300 bg-base-100 rounded-box  font-extrabold">
                        How does the private route work? <span className='text-red-600'>Click here</span>
                    </div>
                    <div className="collapse-content font-bold">
                        <p>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in)</p>
                    </div>
                </div>



                <div className="collapse lg:mr-5">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl border border-base-300 bg-base-100 rounded-box  font-extrabold">
                        What is Node? How does Node work? <span className='text-red-600'>Click here</span>
                    </div>
                    <div className="collapse-content font-bold">
                        <p>It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
                            Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser. Node can, therefore, be used to write server-side applications with access to the operating system, file system, and everything else required to build fully-functional applications.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;