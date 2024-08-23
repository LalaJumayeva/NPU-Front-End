import React from "react";
import { dragon, logo } from "../assets";
import SignupForm from "../containers/SignUp/SignUpForm";

const SignUp = () => {
    return (
        <div className="h-full w-full grid md:grid-cols-2 bg-white">
            <a href="/"
                className="absolute left-4 top-3 z-40 w-16"
            >
                <img
                    src={logo}
                    alt="logo"
                />
            </a>
            <div className="relative flex justify-center items-center overflow-hidden h-[50vh] md:h-[100vh]">
                <div className="w-[60%] md:w-[75%] h-[90%] md:h-[90%] absolute m-auto left-0 top-0 right-0 bottom-0 bg-[#F7F7FF] rounded-3xl z-10"></div>
                <img
                    src={dragon}
                    alt="dragon"
                    className="absolute left-0 md:left-8 top-0 bottom-0 m-auto z-20 md:w-[100vh] md:h-[78vh] w-full object-contain"
                />
            </div>
            <div className="w-full h-full relative flex justify-center items-center">
                <div className="w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] z-30">
                    <SignupForm />
                </div>
            </div>
        </div>
    );
};

export default SignUp;
