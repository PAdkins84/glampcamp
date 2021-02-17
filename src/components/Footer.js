import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
    return (
        <footer className="mt-2">
            <div className="footer fixed-bottom mb-0">
                <FontAwesomeIcon size="2x" className="toFront" icon={['fab', 'linkedin']} />
                <FontAwesomeIcon size="2x" className="ml-3 toFront" icon={['fab', 'github']} />
                <FontAwesomeIcon size="2x" className="ml-3 toFront" icon={['fab', 'youtube']} />
                <p className="mb-1 toFront">GlampCamp.co.uk © {(new Date().getFullYear())}</p>
            </div>
        </footer>
    )
}

export default Footer