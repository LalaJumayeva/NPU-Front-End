import React from "react";
import CardSlider from "../../components/CardSlider";

const RecentNPUs = () => {
    return (
        <div className="h-[90hv] w-full bg-[#E3E4F5] relative text-black font-karla flex flex-col justify-center px-10 md:px-16">
            <h1 className="text-2xl font-karla font-bold text-center my-4">Recent NPUs</h1>
            <div>
               <CardSlider/>
            </div>
        </div>
    )
}

export default RecentNPUs;