import React from "react";
import { heroBackground } from "../../assets";
import SearchBar from "../../components/SearchBar";
import Button from '../../components/Button'

const Hero = () => {
    return (
        <div
            className="h-[90vh] text-white font-karla flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: `url(${heroBackground})` }}
        >
            <div className="z-20 max-w-[800px] mt-[-96px] w-full mx-auto flex flex-col justify-center items-center text-center">
                <h1 className="animate-slidein opacity-0 [--slidein-delay:300ms] text-3xl font-bold mb-3">
                    EXPAND YOUR <br /> IMAGINARY WORLD
                </h1>
                <p className="animate-slidein opacity-0 [--slidein-delay:500ms] mb-6">
                    Share, discover, and get inspired by unique builds from around the globe.
                    <br />
                    Your creativity knows no limits—dive into a community where every piece tells a story.
                </p>
                <Button buttonText="Explore" animate="animate-slidein opacity-0 [--slidein-delay:700ms]" customStyle="mb-5" />
                <div className="px-4 md:px-0">
                    <SearchBar buttonColor="bg-custom-yellow" animation="animate-slidein opacity-0 [--slidein-delay:800ms]" />
                </div>
            </div>
        </div>
    );
}

export default Hero;
