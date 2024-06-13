import React from "react";

const Footer = () => {
    return (
        <div className="Box">
            <div className="text-center pb-[3rem]">
                <p className='heading__mini'>
                    "Start where you are. Use what you have. Do what you can." - Arthur Ashe
                </p>
            </div>
            <div className="FooterContainer">
                <div className="Row">
                    <div className="Column">
                        <div className="Heading">About Us</div>
                        <div className="FooterLink">
                            <a href="#">Aim</a>
                        </div>
                        <div className="FooterLink">
                            <a href="#">Vision</a>
                        </div>
                        <div className="FooterLink">
                            <a href="#">Testimonials</a>
                        </div>
                    </div>
                    <div className="Column">
                        <div className="Heading">Services</div>
                        <div className="FooterLink">
                            <a href="#">Writing</a>
                        </div>
                        <div className="FooterLink">
                            <a href="#">Internships</a>
                        </div>
                        <div className="FooterLink">
                            <a href="#">Coding</a>
                        </div>
                        <div className="FooterLink">
                            <a href="#">Teaching</a>
                        </div>
                    </div>
                    <div className="Column">
                        <div className="Heading">Contact Us</div>
                        <div className="FooterLink">
                            <a href="#">Jack Sparrow</a>
                        </div>
                        <div className="FooterLink">
                            <a href="#">Blackbeard</a>
                        </div>
                        <div className="FooterLink">
                            <a href="#">Whitebeard</a>
                        </div>
                        <div className="FooterLink">
                            <a href="#">Trafagar Law</a>
                        </div>
                    </div>
                    <div className="Column">
                        <div className="Heading">Social Media</div>
                        <div className="FooterLink">
                            <a href="#">
                                <i className="fab fa-facebook-f">
                                    <span
                                        style={{
                                            marginLeft: "10px",
                                        }}
                                    >
                                        Facebook
                                    </span>
                                </i>
                            </a>
                        </div>
                        <div className="FooterLink">
                            <a href="#">
                                <i className="fab fa-instagram">
                                    <span
                                        style={{
                                            marginLeft: "10px",
                                        }}
                                    >
                                        Instagram
                                    </span>
                                </i>
                            </a>
                        </div>
                        <div className="FooterLink">
                            <a href="#">
                                <i className="fab fa-twitter">
                                    <span
                                        style={{
                                            marginLeft: "10px",
                                        }}
                                    >
                                        Twitter
                                    </span>
                                </i>
                            </a>
                        </div>
                        <div className="FooterLink">
                            <a href="#">
                                <i className="fab fa-youtube">
                                    <span
                                        style={{
                                            marginLeft: "10px",
                                        }}
                                    >
                                        Youtube
                                    </span>
                                </i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer