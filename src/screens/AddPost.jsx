import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCaretDown } from 'react-icons/fa';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { bunny } from "../assets";
import { getToken } from "../utils/storage";

const AddPost = () => {
    const navigate = useNavigate();
    const [images, setImages] = useState([null, null]);
    const [keywords, setKeywords] = useState([]);
    const [description, setDescription] = useState('');
    const [postName, setPostName] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState({ id: '', name: 'All categories' });
    const [categoriesArray, setCategories] = useState([]);
    const [profilePic, setProfilePic] = useState(null)

    const getCategories = async () => {
        const tokenRes = getToken();
        const res = await fetch(`${process.env.REACT_APP_BE_URL}/api/profile/me`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${tokenRes}`,
                'Content-Type': 'application/json',
            },
        });

        const profileData = await res.json();
        setProfilePic(profileData.avatar)
        const catRes = await fetch(`${process.env.REACT_APP_BE_URL}/api/category`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${tokenRes}`,
            },
        });

        if (catRes.ok) {
            const data = await catRes.json();
            setCategories(data.categories);
        }
    };

    const handleImageUpload = (index, event) => {
        const file = event.target.files[0];
        if (file) {
            const newImages = [...images];
            newImages[index] = file;
            setImages(newImages);
        }
    };
    
    const handleKeywordChange = (event) => {
        setInputValue(event.target.value);
    };

    const handlePostNameChange = (event) => {
        setPostName(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleAddKeyword = (event) => {
        if (event.key === "Enter" && inputValue.trim() !== "" && keywords.length < 5) {
            setKeywords([...keywords, inputValue.trim()]);
            setInputValue('');
        }
    };

    const handleDeleteKeyword = (keywordToDelete) => {
        setKeywords(keywords.filter((keyword) => keyword !== keywordToDelete));
    };

    const SharePost = async (e) => {
        e.preventDefault();
    
        const formData = new FormData();
        formData.append('name', postName);
        formData.append('category', selectedCategory.id);
        formData.append('description', description);
    
        if (images[0]) formData.append('images', images[0]);
        if (images[1]) formData.append('images', images[1]);
    
        keywords.forEach((keyword) => {
            formData.append('keywords[]', keyword);
        });
    
        const token = getToken();
        try {
            const res = await fetch(`${process.env.REACT_APP_BE_URL}/api/post`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
                body: formData,
            });
    
            if (res.ok) {
                navigate('/collections');
            } else {
                const errorData = await res.json();
                console.error('Error:', errorData);
            }
        } catch (error) {
            console.error('Request failed:', error);
        }
    };
    

    useEffect(() => {
        getCategories();
    }, []);

    return (
        <div>
            <Navbar />
            <div className="h-screen xl:h-[90vh] w-full flex flex-col items-center xl:flex-row bg-custom-yellow">
                <div className="w-full h-full flex justify-center md:py-8 xl:py-28 z-10">
                    <div className="bg-white w-[95%] xl:w-[80%] flex flex-col xl:flex-row h-[2/3] xl:h-auto rounded-2xl py-6 xl:py-4 px-6 relative">
                        <div className="flex justify-between items-start flex-col mb-4 mr-4 w-[100%] xl:w-[20%]">
                            <div className="flex flex-row items-center">
                                <img
                                    src={profilePic}
                                    alt="profilepic"
                                    className="w-12 h-12 md:w-20 md:h-20 object-cover rounded-full"
                                />
                                <h1 className="text-lg font-karla font-medium flex ml-3 xl:hidden">Lala Jumayeva</h1>
                            </div>
                            <div className="flex flex-col">
                                <p className="text-gray-500 my-2 xl:mb-4 xl:mt-2">*upload 2 photos</p>
                                <div className="flex flex-row xl:flex-col space-x-2 xl:space-x-0 xl:space-y-2">
                                    {[0, 1].map((index) => (
                                        <div key={index} className="relative">
                                            <input
                                                type="file"
                                                accept="image/*"
                                                className="absolute inset-0 opacity-0 cursor-pointer"
                                                onChange={(e) => handleImageUpload(index, e)}
                                            />
                                            <div className="w-20 h-20 border border-gray-300 rounded-lg overflow-hidden flex items-center justify-center bg-gray-100">
                                                {images[index] ? (
                                                    <img
                                                    src={URL.createObjectURL(images[index])}
                                                        alt={`upload-${index}`}
                                                        className="w-full h-full object-cover"
                                                    />
                                                ) : (
                                                    <div className="text-gray-400">+</div>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col w-full h-full items-start relative">
                            <h1 className="text-xl font-karla font-medium hidden xl:flex">Lala Jumayeva</h1>
                            <div className="xl:mt-6 w-full h-[100%] xl:h-[60%]">
                                <textarea
                                    value={description}
                                    placeholder="Write the description of your post here"
                                    className="w-full p-2 border border-gray-300 rounded-lg h-[100%]"
                                    onChange={handleDescriptionChange}
                                />
                            </div>
                            <div className="mt-4 w-full h-[20%] xl:h-[10%]">
                                <input
                                    type="text"
                                    value={postName}
                                    placeholder="Enter post name here"
                                    className="w-full p-2 border border-gray-300 rounded-md h-full"
                                    onChange={handlePostNameChange}
                                />
                            </div>
                            <div className="mt-4 w-full h-[20%] xl:h-[10%]">
                                <input
                                    type="text"
                                    value={inputValue}
                                    placeholder="add[Press Enter] at least 5 keywords"
                                    className="w-full p-2 border border-gray-300 rounded-md h-full"
                                    onChange={handleKeywordChange}
                                    onKeyDown={handleAddKeyword}
                                />
                            </div>
                            {/* Keywords Display */}
                            <div className="mt-4 flex flex-wrap space-x-2">
                                {keywords.map((keyword, index) => (
                                    <span
                                        key={index}
                                        onClick={() => handleDeleteKeyword(keyword)}
                                        className="bg-blue-900 text-white px-3 py-1 rounded-md cursor-pointer"
                                    >
                                        {keyword}
                                    </span>
                                ))}
                            </div>
                            <div>
                                <button
                                    type="button"
                                    className="text-sm md:text-base w-full px-1 py-2 rounded-md bg-white shadow-md flex justify-center items-center"
                                    onClick={() => setDropdownOpen(!dropdownOpen)}
                                >
                                    {selectedCategory.name}
                                    <FaCaretDown className='pl-1' />
                                </button>
                                {dropdownOpen && (
                                    <div
                                        className="top-12 absolute left-0 mt-2 w-full sm:w-auto rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-30"
                                        role="menu"
                                        aria-orientation="vertical"
                                        aria-labelledby="menu-button"
                                    >
                                        <div className="py-1" role="none">
                                            {categoriesArray.map((category) => (
                                                <button
                                                    key={category._id}
                                                    onClick={() => {
                                                        setSelectedCategory({ id: category._id, name: category.name });
                                                        setDropdownOpen(false);
                                                    }}
                                                    className="text-gray-700 block w-full text-left px-2 py-2 text-sm hover:bg-gray-100"
                                                >
                                                    {category.name}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="flex justify-end w-full items-center">
                                <button
                                    onClick={SharePost}
                                    className="bg-custom-yellow hover:bg-[#2a9d8f] text-white px-4 py-2 rounded-lg">
                                    Share Post
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative w-full xl:w-[50%] h-[25%] xl:h-full flex items-center justify-center">
                    <img
                        src={bunny}
                        alt="bunny"
                        className="w-[350px] h-auto absolute bottom-2 right-5 z-0"
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AddPost;
