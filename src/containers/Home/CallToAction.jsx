import React, { useState } from "react";
import { ctaBackground } from "../../assets";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

const CallToAction = () => {
    const navigate = useNavigate();
    const [token, setToken] = useState(null)

    const handleJoinClick = () => {
        navigate(!token ? '/signup' : '/collections');
    }

    return (
        <div className="h-[60vh] w-full bg-[#E3E4F5] py-16 px-4 relative">
            <div
                className="z-0 shadow-2xl absolute m-auto left-0 right-0 top-[-100px] w-[90%] h-[100%] md:w-[70%] xl:w-[50%] xl:h-[110%] bg-cover bg-center flex items-center justify-center flex-col rounded-2xl"
                style={{ backgroundImage: `url(${ctaBackground})` }} >
                <p className="w-[45%] text-center mb-6 font-karla font-bold text-[#2D4481] text-sm md:text-lg  md:w-[60%]" >Connect with a community of brick-building enthusiasts who celebrate creativity!</p>
                <Button buttonText={token ? "See Posts" : "Join Us"} onClick={handleJoinClick} />
            </div>
        </div>
    )
}

export default CallToAction;