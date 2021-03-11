import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import TeamDetails from '../TeamDetails/TeamDetails';
const TeamCard = () => {
    const { teamLeague } = useParams();
    const [Team, setTeam] = useState([]) || {};

    useEffect(() => {
        const url = (`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamLeague}`)
        fetch(url)
            .then(response => response.json())
            .then(data => setTeam(data.teams))
    }, [])
    return (
        <>

            <div className="container">
                <div className="row ">
                    {
                        Team.map(teamData => <TeamDetails teamData={teamData} />)
                    }
                </div>
            </div>



        </>
    );
};

export default TeamCard;