import React from "react";

const AboutUs = () => {
    return (
        <div id="about" className="w-full bg-[#E3E4F5] text-black font-karla flex flex-col items-center relative">
            <h1 className="text-2xl font-bold mb-4">About Us</h1>
            <p className="text-base md:text-lg w-[80%] md:w-[60%] indent-8 text-justify">
                This platform was created by passionate fans for fans—a place where NPU (Nice Part Usage)
                enthusiasts can showcase their unique builds and connect with others who share their love for
                creative brick-building. Whether you’re here to publish your latest creation, explore new ideas,
                or simply nerd out with like-minded builders, you’re in the right place. Our community thrives on
                innovation, creativity, and the joy of discovering new ways to use familiar pieces. 
                <span className="italic"> Below are some thoughts from our users:</span>
            </p>
        </div>
    );
}

export default AboutUs;
