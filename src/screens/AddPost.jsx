import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { bunny, persona } from "../assets";

const AddPost = () => {
    // State to store the uploaded images
    const [images, setImages] = useState([null, null]);

    // State to store the keywords
    const [keywords, setKeywords] = useState([]);
    const [inputValue, setInputValue] = useState('');

    // Handle image upload
    const handleImageUpload = (index, event) => {
        const file = event.target.files[0];
        if (file) {
            const newImages = [...images];
            newImages[index] = URL.createObjectURL(file);
            setImages(newImages);
        }
    };

    // Handle keyword input change(updates the inputValue as the user types)
    const handleKeywordChange = (event) => {
        setInputValue(event.target.value);
    };

    // Handle adding a keyword
    const handleAddKeyword = (event) => {
        if (event.key === "Enter" && inputValue.trim() !== "" && keywords.length < 5) {
            setKeywords([...keywords, inputValue.trim()]);
            setInputValue(''); // Clear the input field
        }
    };

    // Handle deleting a keyword
    const handleDeleteKeyword = (keywordToDelete) => {
        setKeywords(keywords.filter((keyword) => keyword !== keywordToDelete));
    };

    return (
        <div>
            <Navbar />
            <div className="h-screen xl:h-[90vh] w-full flex flex-col items-center xl:flex-row bg-custom-yellow">
                <div className="w-full h-full flex justify-center md:py-8 xl:py-28 z-10">
                    <div className="bg-white w-[95%] xl:w-[80%] flex flex-col xl:flex-row h-[2/3] xl:h-auto rounded-2xl py-6 xl:py-4 px-6 relative">
                        <div className="flex  justify-between items-start flex-col mb-4 mr-4 w-[100%] xl:w-[20%]">
                            <div className="flex flex-row items-center">
                                <img
                                    src={persona}
                                    alt="profilepic"
                                    className="w-12 h-12 md:w-20 md:h-20 rounded-full"
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
                                                        src={images[index]}
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
                                    placeholder="Write the description of your post here"
                                    className="w-full p-2 border border-gray-300 rounded-lg h-[100%]"
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
                            <div className="flex justify-end w-full items-center">
                                <button className="bg-custom-yellow hover:bg-[#2a9d8f] text-white px-4 py-2 rounded-lg">
                                    Share Post
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative w-[40%] h-1/3 xl:h-full">
                    <img
                        src={bunny}
                        alt="bunny"
                        className="w-[350px] h-auto absolute bottom-2 right-5 z-0" />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AddPost;
