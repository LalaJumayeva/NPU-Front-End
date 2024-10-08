import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FcLikePlaceholder } from "react-icons/fc";


const CardSlider = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_BE_URL}/api/post`);
                const data = await response.json();
                setPosts(data.slice(-10))
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        };

        fetchPosts();
    }, []);

    const shortenText = (text, limit) => {
        return text.length > limit ? text.substring(0, limit) + "..." : text;
    };

    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 2
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return (
        <Carousel 
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        infinite={true}
        autoPlaySpeed={500}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        className="z-10"
        >
            {posts.map((post) => (
                <div key={post._id} className="flex justify-center items-center md:my-8 xl:mx-16">
                    <div className="bg-white rounded-xl px-4 py-4 w-[90%] sm:w-[70%] lg:w-[80%] h-auto mx-2">
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
                        <p className="text-xs sm:text-sm md:text-base text-gray-700 mb-4 flex-grow">
                            {shortenText(post.description, 220)}
                        </p>
                        <div className="flex flex-row justify-center items-center space-x-2">
                            {post.images.map((img, imgIndex) => (
                                <img
                                    key={imgIndex}
                                    className="object-cover rounded-xl w-[50%] h-[150px] sm:h-[180px] md:h-[200px]"
                                    src={img}
                                    alt={`post-image-${imgIndex}`}
                                />
                            ))}
                        </div>
                        <div className="flex justify-between items-start mt-4">
                            <div className="flex items-start flex-col sm:flex-row pr-4">
                                <p className="bg-custom-yellow px-2 py-1 rounded-md text-xs md:text-sm mr-3 mb-2 sm:mb-0">
                                    Name: {post.name}
                                </p>
                                <p className="bg-custom-yellow px-2 py-1 rounded-md text-xs md:text-sm">
                                    Category: {post.category.name}
                                </p>
                            </div>
                            <div className="flex items-center">
                                <FcLikePlaceholder size={20} />
                                <p className="text-xs md:text-sm font-semibold ml-1">
                                    {post.likes} likes
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </Carousel>
    );
};

export default CardSlider;
