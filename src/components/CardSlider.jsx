import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { feedBackground, heroBackground, persona } from "../assets";
import { FcLikePlaceholder } from "react-icons/fc";

// Sample data for the slider
const sliderData = [
    {
        id: 1,
        name: "Anya Petrova",
        date: "Today, Aug. 17, 11:06",
        text: "Lorem ipsum dolor sit amet, aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum ...read more",
        images: [heroBackground, heroBackground],
        nameTag: "GearMoprh",
        category: "Capes & Cloths",
        likes: 35
    },
    {
        id: 2,
        name: "John Doe",
        date: "Yesterday, Aug. 16, 09:23",
        text: "Another example text. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        images: [heroBackground, heroBackground],
        nameTag: "AnotherName",
        category: "Accessories",
        likes: 42
    },
    {
        id: 3,
        name: "Jane Smith",
        date: "Today, Aug. 17, 10:15",
        text: "Here is some more text. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
        images: [heroBackground, feedBackground],
        nameTag: "SampleName",
        category: "Gadgets",
        likes: 29
    },
    {
        id: 4,
        name: "Alice Johnson",
        date: "Today, Aug. 17, 11:45",
        text: "More sample text for another post. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        images: [heroBackground, heroBackground],
        nameTag: "YetAnotherName",
        category: "Toys",
        likes: 58
    }
];

const CardSlider = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
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
            {sliderData.map((slide) => (
                <div key={slide.id} className="flex justify-center items-center md:my-8 xl:mx-16">
                    <div className="bg-white rounded-xl px-4 py-4 w-[90%] sm:w-[70%] lg:w-[80%] h-auto mx-2">
                        <div className="flex items-center mb-4">
                            <img
                                className="w-10 h-10 md:w-16 md:h-16 rounded-full object-cover mr-4"
                                src={persona}
                                alt="profile-pic"
                            />
                            <div className="flex flex-col">
                                <p className="text-base sm:text-lg md:text-xl font-bold">{slide.name}</p>
                                <p className="text-xs md:text-sm text-gray-500">{slide.date}</p>
                            </div>
                        </div>
                        <p className="text-xs sm:text-sm md:text-base text-gray-700 mb-4 flex-grow">
                            {slide.text}
                        </p>
                        <div className="flex flex-row justify-center items-center space-x-2">
                            {slide.images.map((img, imgIndex) => (
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
                                    Name: {slide.nameTag}
                                </p>
                                <p className="bg-custom-yellow px-2 py-1 rounded-md text-xs md:text-sm">
                                    Category: {slide.category}
                                </p>
                            </div>
                            <div className="flex items-center">
                                <FcLikePlaceholder size={20} />
                                <p className="text-xs md:text-sm font-semibold ml-1">
                                    {slide.likes} likes
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
