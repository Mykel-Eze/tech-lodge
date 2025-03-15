import React from 'react';

import "../assets/css/cta-widget.css";

const CtaBtnWrapper = () => {
    return (
        <div className="cta-btn-wrapper">
            <a href="https://forms.gle/kazvbvz7PGuPw3af9" className="cta-btn hover-scale" target="_blank" rel="noopener noreferrer">
                Book Your Free Consultation Now
            </a>
            <a href="https://forms.gle/LsrCSdAVVJ83CNhv7" className="cta-btn-2 hover-scale" target="_blank" rel="noopener noreferrer">
                Consultations For FSTC Students
            </a>
        </div>
    );
}

export default CtaBtnWrapper;