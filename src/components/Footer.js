import React from 'react';

const Footer = () => {
    return (
        <footer className="mt-2">
            <div className="footer fixed-bottom mb-0">
                <p className="mb-1 toFront">GlampCamp.co.uk © {(new Date().getFullYear())}</p>
            </div>
        </footer>
    )
}

export default Footer