import React from 'react';
import "./SocialIcon.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTwitterSquare,
    faYoutubeSquare,
    faFacebookSquare,
    faInstagramSquare
} from '@fortawesome/free-brands-svg-icons';
const SocialIcon = ({ youTube, twitter, facebook, instagram, brandIcon, website }) => {
    return (
        <>
            <div className="row">
                <div className="col-sm-6 col-md-12 col-lg-12">
                    <div className="Social-Icon">
                        <a href={`https://${youTube}`} target='_blank' className="social twitter"><FontAwesomeIcon icon={faYoutubeSquare} size="3x" /></a>
                        <a href={`https://${twitter}`} target='_blank' className="social youTube"><FontAwesomeIcon icon={faTwitterSquare} size="3x" /></a>
                        <a href={`https://${facebook}`} target='_blank' className="social twitter"><FontAwesomeIcon icon={faFacebookSquare} size="3x" /></a>
                        <a href={`https://${instagram}`} target='_blank' className="social youTube"><FontAwesomeIcon icon={faInstagramSquare} size="3x" /></a>
                        <a href={`https://${website}`} target='_blank' ><img className="social brand-icon" src={brandIcon} alt="" /></a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SocialIcon;