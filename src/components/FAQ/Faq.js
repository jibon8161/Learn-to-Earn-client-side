import React from 'react';

const Faq = () => {
    return (
        <div>
            <section className="dark:bg-gray-800 dark:text-gray-100 lg:mt-0 mt-8">
                <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                    <h2 className="text-2xl font-semibold sm:text-4xl">Frequently Asked Questions</h2>
                    <p className="mt-4 mb-8 dark:text-gray-400 font-bold">Learn-to-Earn</p>
                    <div className="space-y-4">
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">Is this website is responsive?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">Yes this site is fully responsive with mobile laptop and desktop we r working on tab currently </p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">What type of Authentication system this website using?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400"> We have three different types of authentication system first one is With your email and password you have to verify your account for extra fecilities, second one is we r using google authentication system because when its come on security google is always best and third we r using github authentication system because github is one of the most popular website so far.we r working on card authentication and also fingerprint authentication  </p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">Is there any refund facilities here?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">Yes we have refund facilities , we can refund your valuable money in 3 working days.. </p>
                        </details>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Faq;