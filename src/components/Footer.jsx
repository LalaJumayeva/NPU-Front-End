import React from 'react';
import { FcLike } from "react-icons/fc";
import { logo } from '../assets';


const Footer = () => {
    return (
        <footer className="bg-[#282B78]">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a
                        href="/"
                        className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
                    >
                        <img
                            src={logo}
                            className="h-20"
                            alt="Flowbite Logo"
                        />
                        <span className="self-center text-lg md:text-2xl font-semibold whitespace-nowrap text-white">
                            NPU Nerds
                        </span>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-300 sm:mb-0">
                        <li className='mr-3 hover:text-white'>
                            <a href='/'>Home</a>
                        </li>
                        <li className='mr-3 hover:text-white'>
                            <a href='/collections'>Collections</a>
                        </li>
                        <li className='mr-3 hover:text-white'>
                            <a href='/#about'>About</a>
                        </li>
                    </ul>
                </div>
                <div className='flex flex-row justify-center items-center mt-4'>
                    <p className='font-karla text-sm mr-2 text-gray-300'>By Lala Jumayeva with</p>
                    <FcLike />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
