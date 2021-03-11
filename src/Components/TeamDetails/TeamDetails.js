import React from 'react';
import "./TeamDetails.css"
import SocialIcon from '../SocialIcon/SocialIcon';
import male from '../../assets/Photo/male.png'
import female from '../../assets/Photo/female.png'


const TeamDetails = ({ teamData }) => {
    const { strTeam, strTeamBadge, intFormedYear, strCountry, strAlternate, strSport, strGender, strDescriptionDE, strDescriptionEN, strTwitter, strYoutube, strFacebook, strInstagram, strWebsite, strTeamBanner } = teamData;
    let Gender = male;
    return (
        <>
            <div>
                <div className="col-10 m-auto teams-body">
                    <div class="text-white">
                        <img src={strTeamBanner} class="card-img" alt="img" />
                        <div class="card-img-overlay team-logo ">
                            <a href={`https://${strWebsite}`} target='_blank'><img className="" src={strTeamBadge} alt="img" /></a>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row team-body mt-3">
                                <div className="col-sm-12 col-lg-6 col-md-12">
                                    <div className="text-white">
                                        <div className="card-body">
                                            <h2 className="card-text">{strTeam}</h2>
                                            <p className="card-text">Founded: {intFormedYear}</p>
                                            <p className="card-text">Country: {strCountry}</p>
                                            <p className="card-text">alternative Country: {strAlternate}</p>
                                            <p className="card-text">Sport Type: {strSport}</p>
                                            <p className="card-text">Gender: {strGender}</p>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-lg-6 col-md-12">
                                    <div className="row ">
                                        <div className="card-body">
                                            {(Gender === male) ? <img src={Gender} alt="" /> : <img src={female} alt="" />}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class=" text-white">
                                <p class="mt-5">{strDescriptionEN}</p>
                                <br />
                                <p>{strDescriptionDE}</p>
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
                <SocialIcon
                    youTube={strYoutube}
                    twitter={strTwitter}
                    facebook={strFacebook}
                    instagram={strInstagram}
                    brandIcon={strTeamBadge}
                    website={strWebsite}
                />
            </div>
        </>
    );
};

export default TeamDetails;