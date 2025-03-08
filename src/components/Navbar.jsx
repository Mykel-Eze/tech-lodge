import React, { useState, useEffect } from 'react';
import M from 'materialize-css';

import "../assets/css/navbar.css"

const Navbar = () => {
    useEffect(() => {
        const elemsSidenav = document.querySelectorAll(".sidenav");
        M.Sidenav.init(elemsSidenav)
    });

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    return (
        <div>
            <nav className={`main-nav ${scrolled ? 'scrolled-nav' : ''}`}>
                <div className="container">
                    <div className="nav-wrapper">
                        <a href="/" className="brand-logo">
                            <img src={require("../assets/images/logo-white.png")} alt="Tech Lodge" className="logo" />
                        </a>

                        <ul className="dn-mobile ul-nav" id="nav-mobile-2">
                            <li>
                                <a href="#!" data-target="slide-out" className="sidenav-trigger sec-color right">
                                    <img src={require("../assets/images/menu.svg").default} alt="menu" />
                                </a>
                            </li>
                        </ul>

                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li>
                                <a href="#home" className="">
                                    <span>Home</span>
                                </a>
                            </li>
                            <li>
                                <a href="#about" className="">
                                    <span>About</span>
                                </a>
                            </li>
                            <li>
                                <a href="#services" className="">
                                    <span>Services</span>
                                </a>
                            </li>
                            <li>
                                <a href="#testimonials" className="">
                                    <span>Testimonials</span>
                                </a>
                            </li>
                            <li className="contact-us-li">
                                <a href="mailto:techlodge2025@gmail.com" className="">
                                    <button className="nav-pry-btn-2 btn pointer">For FSTC Students</button>
                                </a>
                            </li>
                            <li className="contact-us-li">
                                <a href="mailto:techlodge2025@gmail.com" className="">
                                    <button className="nav-pry-btn btn pointer">Book Your Free Consultation Now</button>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <ul id="slide-out" className="sidenav">
                <div className="sidenav-logo">
                    <a href="/" className="sidenav-close">
                        <img src={require("../assets/images/logo-white.png")} alt="Tech Lodge" className="logo" />
                    </a>
                </div>
                <li>
                    <a href="#home" className="sidenav-close">
                        <span>Home</span>
                    </a>
                </li>
                <li>
                    <a href="#about" className="sidenav-close">
                        <span>About</span>
                    </a>
                </li>
                <li>
                    <a href="#services" className="sidenav-close">
                        <span>Services</span>
                    </a>
                </li>
                <li>
                    <a href="#testimonials" className="sidenav-close">
                        <span>Testimonials</span>
                    </a>
                </li>
                {/* <li className="contact-us-li">
                    <a href="mailto:techlodge2025@gmail.com" className="sidenav-close">
                        <button className="nav-pry-btn-2 btn pointer">Contact Us</button>
                    </a>
                </li> */}
            </ul>
        </div>
    )
}


export default Navbar