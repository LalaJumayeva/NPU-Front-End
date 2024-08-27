import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { MdDelete } from "react-icons/md";
import { getToken } from "../utils/storage";

const PostHistory = () => {
    const [posts, setPosts] = useState([]);
    const [token, setToken] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 4;

    // Calculating the total number of pages
    const totalPages = Math.ceil(posts.length / postsPerPage);

    // Get the posts for the current page
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    // func to change the page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const fetchProfileData = async () => {
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

        const postRes = await fetch(`${process.env.REACT_APP_BE_URL}/api/post`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorageRes}`,
                'Content-Type': 'application/json',
            },
        });

        const postData = await postRes.json();

        const userPosts = postData.filter(post => post.createdBy._id === profileData._id);
        console.log(postData)
        setPosts(userPosts);
    };

    useEffect(() => {
        fetchProfileData();
    }, []);

    const handleDeletePost = async (postID) => {
        const delRes = await fetch(`${process.env.REACT_APP_BE_URL}/api/post/${postID}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });

        if(delRes.ok){
            fetchProfileData();
        }
    }

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
                                            src={post.createdBy.avatar}
                                            alt="profile-pic"
                                        />
                                        <div className="flex flex-col">
                                            <p className="text-base sm:text-lg md:text-xl font-bold">{post.createdBy.username}</p>
                                            <p className="text-xs md:text-sm text-gray-500">{new Date(post.createdAt).toLocaleString()}</p>
                                        </div>
                                    </div>
                                    <button className="text-red-700" onClick={() =>handleDeletePost(post._id)}>
                                        <MdDelete size={25} />
                                    </button>
                                </div>
                                <p className="text-xs sm:text-sm md:text-base text-gray-700 mb-4">
                                    {post.description}
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    <img
                                        className="object-cover rounded-xl"
                                        src={post.images[0]}
                                        alt="post-image"
                                    />
                                    <img
                                        className="object-cover rounded-xl"
                                        src={post.images[1]}
                                        alt="post-image"
                                    />
                                </div>
                                <div className="flex justify-between items-start mt-4">
                                    <div className="flex items-start flex-col sm:flex-row">
                                        <p className="bg-custom-yellow px-2 py-1 rounded-md text-xs md:text-sm mr-3 mb-2 sm:mb-0">Name: {post.name}</p>
                                        <p className="bg-custom-yellow px-2 py-1 rounded-md text-xs md:text-sm">Category: {post.category.name}</p>
                                    </div>
                                    <div className="flex items-center">
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
