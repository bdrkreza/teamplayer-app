import React from 'react';
import "./IconCard.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTwitterSquare,
    faYoutube,
    faFacebook,
    faInstagram
} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const IconCard = ({ youTube }) => {

    return (
        <>
            <div className="Social-Icon">

                <a href={`https://${youTube}`} target='_blank' className="social twitter"><FontAwesomeIcon icon={faYoutube} size="3x" /></a>
                <a href={`https://${youTube}`} target='_blank' className="social youTube"><FontAwesomeIcon icon={faYoutube} size="3x" /></a>
                <a href="https://www.facebook.com/" className="social facebook"><FontAwesomeIcon icon={faFacebook} size="3x" /></a>
                <a href="https://www.facebook.com/" className="social instagram"><FontAwesomeIcon icon={faInstagram} size="3x" /></a>

            </div>
        </>
    );
};

export default IconCard;