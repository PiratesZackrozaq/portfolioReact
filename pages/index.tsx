import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import NavMobile from "@/components/NavMobile";
import AboutMe from "@/components/AboutMe";
import Services from "@/components/Services";
import React, { useState } from "react";

const Homepage = () => {
    const [showNav, setShowNav] = useState(false);
    const showNavHandler = () => setShowNav(true);
    const closeNavHandler = () => setShowNav(false);

    return (
        <div className="overflow-hidden">
            <NavMobile showNav={showNav} closeNav={closeNavHandler} />
            <Nav openNav={showNavHandler} />
            <Hero />
            <AboutMe />
            <Services />
        </div>
    );
};

export default Homepage;