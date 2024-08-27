import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ buttonColor, animation }) => {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async(event) => {
        event.preventDefault();
        try {
            if (query !== "") {
                const response = await fetch(`${process.env.REACT_APP_BE_URL}/api/search?q=${query}`, {
                    method: 'GET'
                })

                if(!response.ok) {
                    console.error("Network response error")
                }

                const data = await response.json()
                navigate('/collections', { state: { posts: data } });

            }
        } catch (e) {
            console.error('There was a problem with the fetch operation:', e);
        }
    }

    return (
        <div className={`${animation} mb-6 pt-2 relative flex flex-row items-center xl:w-[70%] text-black lg:w-[90%] md:w-[90%]`}>
            <input 
                className="bg-white h-10 px-5 pr-16 w-full rounded-full text-sm focus:outline-none"
                type="search" 
                name="search" 
                placeholder="Search" 
                onChange={(e) => setQuery(e.target.value)}
            />
            <button 
                type="submit" 
                className={`flex items-center justify-center w-10 h-10 shrink-0 grow-0 rounded-full absolute right-0 bottom-0 ${buttonColor}`}
                onClick={handleSubmit}
            >
                <FaSearch />
            </button>
        </div>
    );
};

export default SearchBar;
