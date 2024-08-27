import React from "react";
import { bunny } from "../../assets";
import SearchBar from "../../components/SearchBar";

const FilterBar = () => {
    return (
        <div className="h-[90vh] lg:h-[40vh] w-full">
            <div className="flex flex-col lg:flex-row relative items-center h-full">
                <div className="w-full flex flex-col items-start justify-center px-4 md:px-16 py-28 md:py-6">
                    <h1 className="font-karla w-full md:w-[60%]">
                        <span className="font-bold text-2xl">Explore </span>
                        amazing NPU collections with the fans,
                        and share your artwork by joining us!
                    </h1>
                    <SearchBar buttonColor="bg-custom-red" />
                    <div className="grid grid-cols-4 sm:grid-cols-5 gap-2 items-center">
                        <p className="font-karla">Examples:</p>
                        <p className="bg-[#282B78] px-2 py-1 text-white font-karla rounded-md text-center">mushrooms</p>
                        <p className="bg-[#282B78] px-2 py-1 text-white font-karla rounded-md text-center">magical</p>
                        <p className="bg-[#282B78] px-2 py-1 text-white font-karla rounded-md text-center">cloth</p>
                        <p className="bg-[#282B78] px-2 py-1 text-white font-karla rounded-md text-center">cherry blossom</p>
                    </div>
                </div>

                <div className="h-full relative w-[40%]">
                    <img
                        src={bunny}
                        alt="bunny"
                        className="w-[350px] h-auto absolute bottom-2 right-5" />
                </div>
            </div>
        </div>
    )
}

export default FilterBar;