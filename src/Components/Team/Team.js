import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Team = (props) => {
    const { strTeam, strTeamBadge, idTeam } = props.allTeam;
    return (
        <>
            <div className="card mt-5 text-center">
                <img src={strTeamBadge} className="card-img-top w-75 mx-auto mt-3" alt="img" />
                <div className="card-body">
                    <h5 className="card-title">{strTeam}</h5>
                    <Link to={`/team/${idTeam}`} className="btn btn-primary">Explore <FontAwesomeIcon icon={faArrowRight} /></Link>
                </div>
            </div>
        </>
    );
};

export default Team;