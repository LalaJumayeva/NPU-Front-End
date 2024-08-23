import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FilterBar from "../containers/Collections/FilterBar";
import NPUFeed from "../containers/Collections/NPUFeed";


const Collections = () => {
    return (
        <div className="bg-custom-yellow">
            <Navbar screenName="Collections"/>
            <FilterBar/>
            <NPUFeed/>
            <Footer/>
        </div>
    )
}

export default Collections;