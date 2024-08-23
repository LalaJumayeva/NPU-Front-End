import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./containers/Home/Hero";
import CallToAction from "./containers/Home/CallToAction";
import RecentNPUs from "./containers/Home/RecentNPUs";
import Explore from "./containers/Home/Explore";
import AboutUs from "./containers/Home/AboutUs";
import Feedback from "./containers/Home/FanFeedbacks";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar screenName="" />
      <Hero />
      <CallToAction />
      <RecentNPUs />
      <Explore />
      <AboutUs />
      <Feedback />
      <Footer />
    </div>
  );
}

export default App;
