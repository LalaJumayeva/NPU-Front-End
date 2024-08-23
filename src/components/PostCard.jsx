import React, { useState } from "react";
import { persona } from "../assets";
import { FcLikePlaceholder } from "react-icons/fc";


const PostCard = ({postsOnCurrentPage}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState(null);

    const openModal = (image) => {
        setModalImage(image);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalImage(null);
    };
    return (
        <div className="max-h-[88vh] no-scrollbar overflow-y-auto mt-4 mb-2">
            {postsOnCurrentPage.map((post) => (
                <div key={post.id} className="bg-white w-full md:w-[90%] py-2 px-2 md:py-8 md:px-8 rounded-md mb-4">
                    <div className="flex items-center mb-4">
                        <img
                            className="w-10 h-10 md:w-16 md:h-16 rounded-full object-cover mr-4"
                            src={persona}
                            alt="profile-pic"
                        />
                        <div className="flex flex-col">
                            <p className="text-base sm:text-lg md:text-xl font-bold">{post.author}</p>
                            <p className="text-xs md:text-sm text-gray-500">{post.time}</p>
                        </div>
                    </div>
                    <p className="text-xs sm:text-sm md:text-base text-gray-700 mb-4">
                        {post.content}
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        {post.images.map((image, index) => (
                            <img
                                key={index}
                                className="object-cover w-full h-[130px] md:h-[200px] lg:h-[250px] sm:h-[200px] rounded-xl cursor-pointer"
                                src={image}
                                alt={`post-image-${index}`}
                                onClick={() => openModal(image)}
                            />
                        ))}
                    </div>
                    <div className="flex justify-between items-start mt-4">
                        <div className="flex items-start flex-col sm:flex-row">
                            <p className="bg-custom-yellow px-2 py-1 rounded-md text-xs md:text-sm mr-3 mb-2 sm:mb-0">
                                Name: {post.name}
                            </p>
                            <p className="bg-custom-yellow px-2 py-1 rounded-md text-xs md:text-sm">
                                Category: {post.category}
                            </p>
                        </div>
                        <div className="flex items-center">
                            <FcLikePlaceholder size={20} />
                            <p className="text-xs md:text-sm font-semibold ml-1">{post.likes} likes</p>
                        </div>
                    </div>
                </div>
            ))}
            {isModalOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
                    onClick={closeModal} // Closing modal
                >
                    <div
                        className="relative bg-white p-4 rounded-lg"
                        onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking on the image
                    >
                        <img src={modalImage} alt="modal" className="max-w-full max-h-[80vh] rounded-md" />
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 text-white bg-black bg-opacity-50 w-8 h-8 shrink-0 grow-0 rounded-full focus:outline-none"
                        >
                            X
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PostCard;
