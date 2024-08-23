import React from "react";
import Button from "../../components/Button";
import { exploreBackground } from "../../assets";
import { ReactTyped } from "react-typed";

const Explore = () => {
    return (
        <div className="h-[45vh] bg-[#E3E4F5] w-full flex justify-center items-center">
            <div
                style={{ backgroundImage: `url(${exploreBackground})` }}
                className="bg-top bg-cover w-full h-[22vh] md:h-[25vh] flex flex-col justify-center items-center">
                <div className="flex flex-row justify-center items-center">
                    <h1 className="font-karla font-bold text-xl md:text-2xl text-white mr-2">See All</h1>
                    <ReactTyped
                        className="font-karla font-bold text-xl md:text-2xl text-custom-yellow"
                        strings={[
                            "NPUs",
                            "Collections"
                        ]}
                        typeSpeed={60}
                        backSpeed={50}
                        loop
                    />
                </div>
                <Button buttonText="Explore" customStyle="my-4" />
            </div>
        </div>
    )
}

export default Explore;