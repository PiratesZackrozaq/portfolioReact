import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import NavMobile from "@/components/NavMobile";
import AboutMe from "@/components/AboutMe";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Project from "@/components/Project";
import Price from "@/components/Price";
import Reviews from "@/components/Reviews";
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
            <Skills />
            <Project />
            <Price />
            <Reviews />
        </div>
    );
};

export default Homepage;