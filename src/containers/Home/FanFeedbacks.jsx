import React from "react";
import { elena, feedBackground, sakura, sebastian } from "../../assets";

const Feedback = () => {
    return (
        <div className="bg-[#E3E4F5] h-[100vh] w-full">
            <div className="flex justify-center items-center relative h-full w-full">
                <div
                    className="relative w-[70%] h-[70%] xl:w-[45%] lg:w-[70%] lg:h-[90%] md:w-[65%] md:h-[70%] bg-cover bg-center rounded-2xl shadow-lg"
                    style={{ backgroundImage: `url(${feedBackground})` }}
                >
                    {/* User 1 */}
                    <div className="w-full absolute flex items-center top-2 md:top-12 left-[-50px] md:left-[-120px]">
                        <img src={sakura} alt="Sakura Tanaka" className="animate-updown w-16 sm:w-24 sm:h-24 md:w-34 md:h-34 rounded-full shadow-lg" />
                        <div className="ml-3 p-3 bg-white opacity-80 rounded-lg shadow">
                            <h3 className="text-xs sm:text-base font-bold">Sakura Tanaka</h3>
                            <p className="text-xs sm:text-sm">"I love sharing my cool builds here! Everyone is so nice, and I get so many new ideas!"</p>
                        </div>
                    </div>

                    {/* User 2 */}
                    <div className="w-full absolute flex items-center top-0 bottom-0 m-auto right-[-50px] md:right-[-120px]">
                        <div className="p-3 bg-white rounded-lg shadow opacity-80 ">
                            <h3 className="text-xs sm:text-base font-bold">Sebastian Müller</h3>
                            <p className="text-xs sm:text-sm">"Sharing my collections and connecting with fellow fans has never been easier. Love this platform!"</p>
                        </div>
                        <img src={sebastian} alt="Sebastian Müller" className="animate-updown ml-3 w-16 sm:w-24 sm:h-24 md:w-34 md:h-34 rounded-full shadow-lg" />
                    </div>

                    {/* User 3 */}
                    <div className="w-full absolute flex items-center bottom-2 sm:bottom-10 left-[-50px] md:left-[-120px]">
                        <img src={elena} alt="Elena Kovács" className="animate-updown w-16 sm:w-24 sm:h-24 md:w-34 md:h-34 rounded-full shadow-lg" />
                        <div className="ml-3 p-3 bg-white rounded-lg shadow opacity-80 ">
                            <h3 className="text-xs sm:text-base font-bold">Elena Kovács</h3>
                            <p className="text-xs sm:text-sm">"Great site for finding inspiration and showcasing my builds. The community here is amazing!"</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Feedback;
