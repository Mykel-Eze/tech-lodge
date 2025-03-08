import React, { useEffect } from 'react';
// import M from 'materialize-css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import "../assets/css/home.css"

import CtaWidget from "../components/CtaWidget";

const Home = () => {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className="home-wrapper">
            <header id="home">
                <div className="container rel full-height flex-div">
                    <div className="header-content-wrapper">
                        <div className="header-txt-side" data-aos="fade-right">
                            <h1>Tech Solutions That Build Your Future</h1>
                            <p>Custom Software Development • IT Training • Business Consulting</p>
                            <a href="mailto:techlodge2025@gmail.com" className="cta-btn hover-scale">Book Your Free Consultation Now</a>
                        </div>
                        <div className="header-img-side" data-aos="fade-left">
                            <img src={require("../assets/images/hero-vector-2.svg").default} alt="home" />
                        </div>
                    </div>
                </div>
            </header>

            <div className="container rel second-container flex-div" data-aos="fade-up">
                <div className="just-txt">
                    <p className="center">
                        At Tech Lodge, we build the digital tools businesses need to thrive, train the next
                        generation of tech talent, and provide expert IT consulting to help you navigate
                        the evolving technological landscape.
                    </p>
                </div>
                <a href="mailto:techlodge2025@gmail.com" className="cta-btn hover-scale">Book Your Free Consultation Now</a>
            </div>

            <section id="about">
                <div className="row">
                    <div className="container rel">
                        <div className="about-grid-block">
                            <div className="about-txt-side" data-aos="fade-up">
                                <h2 className="section-title">About Us</h2>
                                <p className="">
                                    Tech Lodge was founded on a simple belief: technology should be accessible, practical, and
                                    transformative for every business. We empower organizations through innovative tech solutions
                                    aligned with their strategic goals.
                                </p>
                                <div className="sub-section" style={{ marginTop: "40px" }}>
                                    <h4 className="sub-section-title">Our Values include:</h4>
                                    <ul className="vlaues-list">
                                        <li style={{backgroundColor: "#4285F4"}}>Excellence in delivery</li>
                                        <li style={{backgroundColor: "#DB4437"}}>Innovation at our core</li>
                                        <li style={{backgroundColor: "#F4B400"}}>Education as our mission</li>
                                        <li style={{backgroundColor: "#0F9D58"}}>Partnership in all relationships</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="about-img-side" data-aos="fade-up">
                                <img src={require("../assets/images/hero-vector.svg").default} alt="student-learning" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="services">
                <div className="row">
                    <div className="container rel">
                        <h2 className="section-title center">Our Services</h2>

                        <div class="services-wrapper" data-aos="fade-up">
                            <div className="services-block">
                                <div class="services-block-header">
                                    <img src={require("../assets/images/code-2.png")} alt="code" />
                                    <span>Software <br /> Development</span>
                                </div>
                                <div class="services-block-body">
                                    <p className="services-block-intro center">
                                        We build custom software solutions that streamline operations, enhance customer
                                        experiences, and drive business growth.
                                    </p>
                                    <h4 className="sub-section-title">What We Offer</h4>
                                    <ul>
                                        <li>Business process automation</li>
                                        <li>Customer relationship management</li>
                                        <li>Data analytics solutions</li>
                                        <li>Mobile & web applications</li>
                                        <li>Enterprise systems integration</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="services-block" data-aos="fade-up">
                                <div class="services-block-header">
                                    <img src={require("../assets/images/training-2.png")} alt="training" />
                                    <span>Education <br /> & Training</span>
                                </div>
                                <div class="services-block-body">
                                    <p className="services-block-intro center">
                                        We prepare the next generation of tech talent through hands-on training programs
                                        delivered in schools and educational institutions.
                                    </p>
                                    <h4 className="sub-section-title">Our Programs</h4>
                                    <ul>
                                        <li>Business process automation</li>
                                        <li>Web & mobile development</li>
                                        <li>Data science basics</li>
                                        <li>IT security essentials</li>
                                        <li>Business technology integration</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="services-block" data-aos="fade-up">
                                <div class="services-block-header">
                                    <img src={require("../assets/images/consulting-2.png")} alt="consulting" />
                                    <span>IT <br /> Consulting</span>
                                </div>
                                <div class="services-block-body">
                                    <p className="services-block-intro center">
                                        We provide strategic technology guidance to help businesses make informed decisions
                                        and leverage technology for growth.
                                    </p>
                                    <h4 className="sub-section-title">Consulting Services</h4>
                                    <ul>
                                        <li>IT strategy development</li>
                                        <li>Technology assessments</li>
                                        <li>Digital transformation planning</li>
                                        <li>Systems integration</li>
                                        <li>Cybersecurity & cloud migration</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="testimonials">
                <div className="row">
                    <div className="container rel">
                        <h2 className="section-title center">What Our Clients Say</h2>
                        <div className="testimonials-wrapper" data-aos="fade-up">
                            <div className="testimony-block">
                                <img src={require("../assets/images/woman.jpg")} alt="testifier" />
                                <blockquote>
                                    "Tech Lodge transformed our operations with software that perfectly fits our
                                    workflow. Their team took the time to understand our business before proposing solutions." 
                                    <div className="testifier">- Sarah L., CEO, TechCorp</div>
                                </blockquote>
                            </div>
                            <div className="testimony-block">
                                <img src={require("../assets/images/man.jpg")} alt="testifier" />
                                <blockquote>
                                    "The training program Tech Lodge brought to our school engaged students in ways we
                                    hadn't seen before. They made technology approachable and exciting."
                                    <div className="testifier">- James K., Teacher, FSTC</div>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CtaWidget />
        </div>
    )
}

export default Home;