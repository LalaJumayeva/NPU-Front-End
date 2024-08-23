import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { persona, placeholder } from "../assets";
import Button from "../components/Button";

const ProfileSettings = () => {
    const [profileImage, setProfileImage] = useState(persona);
    const [change, setChange] = useState(false)

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProfileImage(URL.createObjectURL(file));
        }
    };

    const saveChanges = () => {
        setChange(true)
    }

    return (
        <div>
            <Navbar />
            <div className="h-screen lg:h-[75vh] py-16 lg:py-20">
                <div className="flex flex-col lg:flex-row justify-center items-center">
                    <div className="flex flex-col items-center justify-center lg:w-1/4">
                        {profileImage ? (
                            <img
                                src={profileImage}
                                alt="Profile Preview"
                                className="w-48 rounded-full mx-auto mb-2"
                            />
                        ) : (
                            <img
                                src={placeholder}
                                alt="Profile Preview"
                                className="w-48 rounded-full mx-auto mb-2"
                            />
                        )}
                        <label className="block text-center mt-3">
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                className="hidden"
                            />
                            <span className="block text-sm py-2 px-4 rounded-full font-semibold bg-[#FFD502] text-black hover:bg-[#F7D009] cursor-pointer">
                                Choose File
                            </span>
                        </label>
                    </div>
                    <div className="flex flex-col justify-center items-center lg:items-stretch lg:justify-start lg:pr-24 w-full lg:w-3/4">
                        <p className="text-xl font-bold font-karla my-6 lg:mb-16 lg:ml-4">PROFILE SETTINGS:</p>
                        <div className="flex flex-col lg:flex-row w-[80%] lg:w-full justify-between">
                            <div className="w-full lg:w-[45%]">
                                <p className="font-karla ml-4 mb-2 text-gray-700">Username:</p>
                                <input
                                    type="text"
                                    className="block border border-grey-light w-full p-3 mb-4 rounded-full"
                                    name="username"
                                    placeholder="Lala Jumayeva"
                                />
                            </div>
                            <div className="w-full lg:w-[45%]">
                                <p className="font-karla ml-4 mb-2 text-gray-700">Email address (cannot be changed):</p>
                                <input
                                    type="text"
                                    className="block border border-grey-light w-full p-3 mb-4 rounded-full bg-gray-100 text-gray-500 cursor-not-allowed"
                                    name="email"
                                    placeholder="cumayevalala@gmail.com"
                                    disabled
                                />
                                <div className="flex justify-end items-end mt-8">
                                    <Button buttonText={change ? "Saved" : "Save Changes"} customStyle={change ? "bg-[#2a9d8f] hover:bg-[#2a9d8f]" : "hover:bg-[#2a9d8f]"} onClick={saveChanges} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ProfileSettings;
