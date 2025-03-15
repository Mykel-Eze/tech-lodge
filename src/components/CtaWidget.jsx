import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import "../assets/css/cta-widget.css";
import CtaBtnWrapper from './CtaBtnWrapper';

const CtaWidget = () => {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <section id="cta">
            <div className="container">
                <div className="cta-block" data-aos="fade-up">
                    <img src={require("../assets/images/cta-widget-bg-pattern.png")} alt="bg-pattern" className="bg-pattern" />
                    <div className="rel center-cta">
                        <h2>Ready to Transform Your Business?</h2>
                        <p>
                            Ready to discuss how Tech Lodge can help your business or school?
                        </p>
                        <CtaBtnWrapper />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CtaWidget;