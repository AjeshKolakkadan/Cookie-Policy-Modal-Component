"use client"

import React, { useState, useEffect } from 'react';

const CookiePolicyModal = () => {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        // Check if the user has already accepted the cookie policy
        const cookieConsent = localStorage.getItem('cookieConsent');
        if (!cookieConsent) {
            setShowModal(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'accepted');
        setShowModal(false);
    };

    const handleReject = () => {
        localStorage.setItem('cookieConsent', 'rejected');
        setShowModal(false);
    };

    if (!showModal) {
        return null;
    }

    return (
        <div style={{ position: "fixed", zIndex: 999999, bottom: 10, right: 10, textAlign: "left", border:"1px solid lightgray", overflow:"hidden", borderRadius:"3px" }}>
            <div style={{ ...modalContentStyles, textAlign: 'left', }}>
                <strong>Cookie Policy</strong>
                <p>We use cookies to improve your experience. By using our site, you agree to our use of cookies.</p>
                <div style={{ textAlign: 'right', }}>
                    <button onClick={handleAccept} style={buttonStyles}>Accept</button>
                    <button onClick={handleReject} style={{...buttonStyles, opacity:"0.7"}}>Reject</button>
                </div>
            </div>
        </div>
    );
};


const modalContentStyles = {
    backgroundColor: 'white',
    padding: '20px',
    fontSize: '14px',
    overflow:"hidden"
};

const buttonStyles = {
    margin: '10px 0px 0 10px',
    fontSize: '14px',
    border: "1px solid #e5e5e5",
    padding: "2px 10px",
    borderRadius: "3px"
};

export default CookiePolicyModal;
