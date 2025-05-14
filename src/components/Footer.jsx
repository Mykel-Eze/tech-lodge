/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';

import "../assets/css/footer.css"

const Footer = () => {
    const [currentYear, setCurrentYear] = useState();

    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    }, []);

    return (
        <footer>
            <div className="container rel">
                <div className="footer-wrapper">
                    <div className="footer-block footer-logo-div">
                        <a href="/">
                            <img src={require("../assets/images/techlodge-logo.png")} alt="Tech Lodge" className="footer-logo" />
                        </a>
                    </div>
                    <div class="footer-block">
                        <h4>Social Media</h4>
                        <ul>
                            <li>
                                <a href="#">LinkedIn</a>
                            </li>
                            <li>
                                <a href="#">Twitter</a>
                            </li>
                            <li>
                                <a href="#">Facebook</a>
                            </li>
                        </ul>
                    </div>
                    <div class="footer-block">
                        <h4>Legal</h4>
                        <ul>
                            <li>
                                <a href="#">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#">Terms of Service</a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-block">
                        <h4>Contact Us</h4>
                        <ul>
                            <li className="flex-div">
                                <img src={require("../assets/images/email.png")} alt="email" className="footer-icon" />
                                <a href="mailto:techlodge2025@gmail.com">techlodge2025@gmail.com</a>
                            </li>
                            <li className="flex-div">
                                <img src={require("../assets/images/phone.png")} alt="phone" className="footer-icon" />
                                <a href="tel:+2349157756791">(+234) 915 775 6791</a>
                            </li>
                            <li className="flex-div">
                                <img src={require("../assets/images/address.png")} alt="address" className="footer-icon" />
                                <span>Yaba, Lagos, Nigeria</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="copyright-div center">
                    &copy; Tech Lodge {currentYear} 
                </div>
            </div>
        </footer>
    );
}

export default Footer;