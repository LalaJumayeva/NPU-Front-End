import React from "react";

const Button = ({ buttonText, animate, customStyle, onClick }) => {
    return (
        <button 
        onClick={onClick}
        className={`${animate} px-8 py-2 text-lg bg-custom-yellow hover:bg-[#FF141E] transition-all text-black w-fit rounded-md ${customStyle}`}>
            {buttonText}
        </button>
    );
};

export default Button;
