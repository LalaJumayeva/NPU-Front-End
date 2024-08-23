import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { heroBackground, persona } from "../assets";
import { FcLikePlaceholder } from "react-icons/fc";
import { MdDelete } from "react-icons/md";


// Example post data
const posts = [
    { id: 1, name: "GearMorph", category: "Capes & Cloths", likes: 35, date: "Today, Aug. 17, 11:06" },
    { id: 2, name: "GearMorph", category: "Capes & Cloths", likes: 42, date: "Today, Aug. 16, 14:23" },
    { id: 3, name: "GearMorph", category: "Capes & Cloths", likes: 18, date: "Yesterday, Aug. 15, 09:12" },
    { id: 4, name: "GearMorph", category: "Capes & Cloths", likes: 27, date: "Yesterday, Aug. 14, 15:45" },
    { id: 5, name: "GearMorph", category: "Capes & Cloths", likes: 53, date: "Aug. 13, 12:30" },
    // { id: 6, name: "GearMorph", category: "Capes & Cloths", likes: 22, date: "Aug. 12, 08:19" },
    // Add more posts as needed
];

const PostHistory = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 4;

    // Calculate the total number of pages
    const totalPages = Math.ceil(posts.length / postsPerPage);

    // Get the posts for the current page
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    // Handler to change the page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            <Navbar />
            <div className="h-screen flex flex-col justify-start items-center px-4 lg:px-8 py-8 xl:px-44">
                <p className="text-xl font-bold font-karla mb-8">POST HISTORY:</p>
                <div className="flex flex-col xl:flex-row md:grid md:grid-cols-2 no-scrollbar overflow-y-auto">
                    {currentPosts.map((post) => (
                        <div key={post.id} className="flex items-center justify-center mb-4 w-full">
                            <div className="bg-white rounded-xl flex flex-col px-4 py-4 w-[85%] sm:w-[70%] md:w-[95%] lg:w-[85%] xl:w-[90%]">
                                <div className="flex flex-row justify-between items-start">

                                    <div className="flex items-center mb-4">
                                        <img
                                            className="w-10 h-10 md:w-16 md:h-16 rounded-full object-cover mr-4"
                                            src={persona}
                                            alt="profile-pic"
                                        />
                                        <div className="flex flex-col">
                                            <p className="text-base sm:text-lg md:text-xl font-bold">Anya Petrova</p>
                                            <p className="text-xs md:text-sm text-gray-500">{post.date}</p>
                                        </div>
                                    </div>
                                    <button className="text-red-700">
                                        <MdDelete size={25} />
                                    </button>
                                </div>
                                <p className="text-xs sm:text-sm md:text-base text-gray-700 mb-4">
                                    Lorem ipsum dolor sit amet,aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum ...read more
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    <img
                                        className="object-cover rounded-xl"
                                        src={heroBackground}
                                        alt="post-image"
                                    />
                                    <img
                                        className="object-cover rounded-xl"
                                        src={heroBackground}
                                        alt="post-image"
                                    />
                                </div>
                                <div className="flex justify-between items-start mt-4">
                                    <div className="flex items-start flex-col sm:flex-row">
                                        <p className="bg-custom-yellow px-2 py-1 rounded-md text-xs md:text-sm mr-3 mb-2 sm:mb-0">Name: {post.name}</p>
                                        <p className="bg-custom-yellow px-2 py-1 rounded-md text-xs md:text-sm">Category: {post.category}</p>
                                    </div>
                                    <div className="flex items-center">
                                        <FcLikePlaceholder size={20} />
                                        <p className="text-xs md:text-sm font-semibold ml-1">{post.likes} likes</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* pagination */}
                <div className="pagination flex justify-center mt-4">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index + 1}
                            onClick={() => paginate(index + 1)}
                            className={`mx-1 px-3 py-1 rounded-full ${currentPage === index + 1 ? 'bg-custom-red text-white' : 'bg-gray-300 text-gray-700'
                                }`}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default PostHistory;
