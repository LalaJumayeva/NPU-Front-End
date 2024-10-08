import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FaCaretDown } from 'react-icons/fa';
import PostCard from '../../components/PostCard';
import { IoAddCircle } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { getToken } from '../../utils/storage';

const NPUFeed = () => {
    const location = useLocation();
    const initialSearchResults = location.state?.posts || null;
    const [posts, setPosts] = useState([]);
    const [searchResults, setSearchResults] = useState(initialSearchResults);
    const navigate = useNavigate();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('All categories');
    const dropdownRef = useRef(null);

    const [page, setPage] = useState(1);
    const postsPerPage = 6;
    const totalPages = Math.ceil((searchResults ? searchResults.length : posts.length) / postsPerPage);

    const lastIndexOfPost = page * postsPerPage;
    const firstIndexOfPost = lastIndexOfPost - postsPerPage;

    const postsOnCurrentPage = searchResults ? searchResults.slice(firstIndexOfPost, lastIndexOfPost) : posts.slice(firstIndexOfPost, lastIndexOfPost);

    const paginate = (pageNumber) => setPage(pageNumber);

    const [token, setToken] = useState(null);

    const addPostHandler = () => {
        navigate(token ? '/addpost' : '/login');
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };

        if (dropdownOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [dropdownOpen]);

    const categories = ['Capes and Cloths', 'Fantasy', 'Animals', 'Nature', 'Technology', 'Universe', 'Kids'];

    const fetchPosts = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_BE_URL}/api/post`);
            const data = await response.json();
            setPosts(data);
            // Reseting searchResults after refreshing
            setSearchResults(null);
        } catch (error) {
            console.error("Error fetching posts:", error);
        }
    };

    useEffect(() => {
        const tokenRes = getToken();
        setToken(tokenRes);
        fetchPosts();
    }, []);

    useEffect(() => {
        // Handling updates to searchResults when navigating to this page
        if (initialSearchResults) {
            setSearchResults(initialSearchResults);
        }
    }, [initialSearchResults]);

    return (
        <div className="h-screen">
            <div className="flex flex-row h-full px-4">
                <div className="w-full md:w-[75%] lg:w-[70%] px-2 md:px-10 flex flex-col">
                    <p className='text-xl md:2xl font-bold font-karla'>NPU Feed:</p>
                    <div>
                        <PostCard postsOnCurrentPage={postsOnCurrentPage} refreshPosts={fetchPosts} />
                    </div>
                    <div className="pagination flex justify-center mb-4 w-full md:w-[90%]">
                        {Array.from({ length: totalPages }, (_, index) => (
                            <button
                                key={index + 1}
                                onClick={() => paginate(index + 1)}
                                className={`mx-1 px-2 py-0 rounded-full ${page === index + 1 ? 'bg-custom-red text-white' : 'bg-white text-gray-700'}`}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="w-[30%] h-[70%] pl-4 absolute right-2 md:right-8">
                    <div className="sticky top-0 md:hidden" ref={dropdownRef}>
                        <button
                            type="button"
                            className="text-sm md:text-base w-full px-1 py-2 rounded-md bg-white shadow-md flex justify-center items-center"
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                        >
                            {selectedCategory}
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
                                    {categories.map((category, index) => (
                                        <button
                                            key={index}
                                            onClick={() => {
                                                setSelectedCategory(category);
                                                setDropdownOpen(false);
                                            }}
                                            className="text-gray-700 block w-full text-left px-2 py-2 text-sm hover:bg-gray-100"
                                        >
                                            {category}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                        <button
                            onClick={addPostHandler}
                            className='flex flex-row justify-center items-center sticky mt-2 rounded-md shadow-md bg-[#E3E4F5] w-full py-1 text-xs'>
                            <IoAddCircle size={27} className='mx-1' /> ADD YOUR POST
                        </button>
                    </div>
                    <div className='hidden md:flex flex-col sticky top-0 rounded-md shadow-md bg-white w-full py-3 px-2'>
                        <h1 className='font-karla font-bold text-xl mb-4 ml-2'>Categories:</h1>
                        <div className='flex flex-wrap'>
                            {categories.map((category, index) => (
                                <p key={index} className='bg-[#282B78] text-white m-2 px-2 py-2 rounded-md'>
                                    {category}
                                </p>
                            ))}
                        </div>
                        <button
                            onClick={addPostHandler}
                            className='flex flex-row justify-center items-center sticky mt-4 rounded-md shadow-md bg-[#E3E4F5] w-full py-3'>
                            <IoAddCircle size={27} className='mr-4' /> ADD YOUR POST
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NPUFeed;
