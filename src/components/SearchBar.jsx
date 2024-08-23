import React, { useState, useRef, useEffect } from 'react';
import { FaSearch, FaCaretDown } from 'react-icons/fa';

const SearchBar = ({ buttonColor, animation }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('All categories');
    const dropdownRef = useRef(null);

    const categories = ['Mockups', 'Templates', 'Design', 'Logos'];

    // Effect to handle clicks outside the dropdown
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

    return (
        <div className={`${animation} mb-6 pt-2 relative flex flex-row items-center xl:w-[75%] text-black lg:w-[100%] md:w-[100%]`} ref={dropdownRef}>
            <button
                type="button"
                className={`shrink-0 grow-0 h-10 ${buttonColor} rounded-l-full pl-4 pr-2 flex flex-row items-center`}
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
                                className="text-gray-700 block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            )}
            <input className="bg-white h-10 px-5 pr-16 w-full rounded-r-full text-sm focus:outline-none"
                type="search" name="search" placeholder="Search" />
            <button type="submit" className={`flex items-center justify-center w-10 h-10 shrink-0 grow-0 rounded-full absolute right-0 bottom-0 ${buttonColor}`}>
                <FaSearch />
            </button>
        </div>
    );
};

export default SearchBar;
