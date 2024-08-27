import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { placeholder } from "../assets";
import Button from "../components/Button";
import { getToken } from "../utils/storage";

const ProfileSettings = () => {
    const [profileImage, setProfileImage] = useState(null);
    const [imageFile, setImageFile] = useState(null);
    const [change, setChange] = useState(false);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [token, setToken] = useState(null);

    const fetchProfile = async () => {
        const localStorageRes = getToken();
        setToken(localStorageRes);
        const res = await fetch(`${process.env.REACT_APP_BE_URL}/api/profile/me`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorageRes}`,
                'Content-Type': 'application/json',
            },
        });

        const profileData = await res.json();
        setProfileImage(profileData.avatar || placeholder);
        setUsername(profileData.username);
        setEmail(profileData.email);
    };

    useEffect(() => {
        fetchProfile();
    }, []);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProfileImage(URL.createObjectURL(file));
            setImageFile(file);
        }
    };

    const saveChanges = async () => {
        const formData = new FormData();
        formData.append("username", username);
        if (imageFile) {
            formData.append("avatar", imageFile);
        }

        const res = await fetch(`${process.env.REACT_APP_BE_URL}/api/profile/me`, {
            method: 'PATCH',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
            body: formData
        });

        if (res.ok) {
            setChange(true);
            fetchProfile();
        }
    };

    return (
        <div>
            <Navbar />
            <div className="h-screen lg:h-[75vh] py-16 lg:py-20">
                <div className="flex flex-col lg:flex-row justify-center items-center">
                    <div className="flex flex-col items-center justify-center lg:w-1/4">
                        <img
                            src={profileImage}
                            alt="Profile Preview"
                            className="w-48 h-48 rounded-full object-cover mx-auto mb-2"
                        />
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
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                            <div className="w-full lg:w-[45%]">
                                <p className="font-karla ml-4 mb-2 text-gray-700">Email address (cannot be changed):</p>
                                <input
                                    type="text"
                                    className="block border border-grey-light w-full p-3 mb-4 rounded-full bg-gray-100 text-gray-500 cursor-not-allowed"
                                    name="email"
                                    value={email}
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
};

export default ProfileSettings;
