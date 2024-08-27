import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as images from "../assets";
import { CgMenuRightAlt } from "react-icons/cg";
import { VscChromeClose } from "react-icons/vsc";
import { CgProfile } from "react-icons/cg";
import { MdOutlineManageHistory } from "react-icons/md";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { getToken, removeToken } from "../utils/storage";


const Navbar = ({ screenName }) => {
    const navigate = useNavigate();
    const [nav, setNav] = useState(false);
    const [profileToken, SetProfileToken] = useState(null);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [profilePic, setProfilePic] = useState(null)

    const handleNav = () => {
        setNav(!nav)
    }

    const getProfileToken = async () => {
        const localStorageRes = getToken();
        SetProfileToken(localStorageRes);  

        const res = await fetch(`${process.env.REACT_APP_BE_URL}/api/profile/me`, { 
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorageRes}`,
                'Content-Type': 'application/json'
            }
        });
    
        const data = await res.json();
        setProfilePic(data.avatar)
    }
    
    useEffect(() => {
        const fetchProfile = async () => {
            await getProfileToken();
        }
    
        fetchProfile();
    }, []);

    const LogOut = () => {
        const tokenRes = removeToken()
        console.log(tokenRes)
        if(!tokenRes){
            navigate('/login')
        }
    }
    

    return (
        <div className="flex justify-between items-center h-24 mx-auto px-4 py-2 bg-custom-yellow md:px-8">
            <div className="flex items-center">
                <img src={images.logo} alt="Logo" className="h-custom-4 w-custom-3 mr-5" />
                <ul className="hidden md:flex">
                    <li className={`${screenName !== "Home" ? "text-uh-text-color" : "text-black "} text-xl p-4 hover:text-black font-karla font-semibold`}>
                        <a href='/'>Home</a>
                    </li>
                    <li className={`${screenName !== "Collections" ? "text-uh-text-color" : "text-black "} text-xl p-4 hover:text-black font-karla font-semibold`}>
                        <a href='/collections'>Collections</a>
                    </li>
                    <li className="text-uh-text-color text-xl p-4 hover:text-black font-karla font-semibold">
                        <a href='/#about'>About Us</a>
                    </li>
                </ul>
            </div>
            {profileToken ?
                <div className="hidden md:flex">
                    <button className="items-center space-x-4">
                        <img src={profilePic}
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            alt="profile"
                            className="rounded-full w-12 h-12 object-cover shrink-0 grow-0"
                        />
                    </button>
                    {dropdownOpen && (
                        <div
                            className="top-20 absolute right-2 mt-2 w-full sm:w-auto rounded-md shadow-lg bg-slate-900 ring-1 ring-black ring-opacity-5 focus:outline-none z-30"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="menu-button"
                        >
                            <div className="py-1" role="none">
                                <ul className="uppercase text-white">
                                    <a href="/profilesettings" className="px-4 py-4 border-b border-gray-400 hover:text-[#FF914D] flex flex-row items-center">
                                        <CgProfile size={25} />
                                        <li className="ml-2"> Profile settings</li>
                                    </a>
                                    <a href="/posthistory" className="px-4 py-4 border-b border-gray-400 hover:text-[#FF914D] flex flex-row items-center">
                                        <MdOutlineManageHistory size={25} />
                                        <li className="ml-2">Post history</li>
                                    </a>
                                    <button onClick={LogOut} className="px-4 py-4 hover:text-[#FF914D] flex flex-row items-center">
                                        <RiLogoutBoxRLine size={25} />
                                        <li className="ml-2"> Log out</li>
                                    </button>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
                :
                <div className="hidden md:flex items-center space-x-4">
                    <a className="text-black text-xl font-karla" href='/login'>Login</a>
                    <div className="px-6 py-2 font-lg bg-red-500 text-black w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
                        <a href='/signup'> Sign Up</a>
                    </div>
                </div>
            }

            <div onClick={handleNav} className="block md:hidden">
                {nav ? <VscChromeClose size={25} /> : <CgMenuRightAlt size={25} />}
            </div>
            <div className={nav ? "fixed z-30 left-0 top-0 w-3/5 border-r border-r-slate-900 h-full bg-slate-900 ease-in-out duration-500 md:hidden" : "fixed left-[-100%] md:hidden"}>
                <img src={images.logo} alt="Logo" className="h-custom-4 w-custom-3 ml-2 mt-1" />
                <ul className="pt-6 font-karla  text-white text-lg font-semibold uppercase">
                    <li className="border-b border-gray-400 p-4 hover:text-[#FF914D]">
                        <a href='/'>Home</a>
                    </li>
                    <li className="border-b border-gray-400 p-4 hover:text-[#FF914D]">
                        <a href='/collections'>Collections</a>
                    </li>
                    {!profileToken ?
                        <>
                            <li className="border-b border-gray-400 p-4 hover:text-[#FF914D]">
                                <a href='/#about'>About Us</a>
                            </li>
                            <li className="border-b text-[#FF914D] border-gray-400 p-4 hover:text-[#FF914D]">
                                <a href='/login'>Login</a>
                            </li>
                            <li className="text-[#FF5757] p-4 hover:text-[#FF914D]">
                                <a href='/signup'>Sign up</a>
                            </li>
                        </> :
                        <>
                            <li className="border-b border-gray-400 p-4 hover:text-[#FF914D]">
                                <a href='/login'>Post History</a>
                            </li>
                            <li className="border-b border-gray-400 p-4 hover:text-[#FF914D]">
                                <a href='/signup'>Settings </a>
                            </li>
                            <li className="text-[#FF5757] p-4 hover:text-[#FF914D]">
                                <button onClick={LogOut} >Logout </button>
                            </li>
                        </>
                    }
                </ul>
            </div>

        </div>
    );
}

export default Navbar;
