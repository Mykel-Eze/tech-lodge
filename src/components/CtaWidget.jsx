import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import "../assets/css/cta-widget.css";

const CtaWidget = () => {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <section id="cta">
            <div className="container">
                <div className="cta-block" data-aos="fade-up">
                    <img src={require("../assets/images/cta-widget-bg-pattern.png")} alt="bg-pattern" className="bg-pattern" />
                    <div className="rel">
                        <h2>Ready to Transform Your Business?</h2>
                        <p>
                            Ready to discuss how Tech Lodge can help your business or school?
                        </p>
                        <a href="mailto:techlodge2025@gmail.com" className="cta-btn hover-scale">Book Your Free Consultation Now</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CtaWidget;