
import React, { useEffect, useState } from 'react';
import Team from '../Team/Team';
import "./Home.css";
import heroLogo from "../../assets/image/soccer.jpg";

const Home = () => {
    const [TeamData, setTeam] = useState([])
    const allTeamData = TeamData.slice(0, 18)
    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
            .then(response => response.json())
            .then(data => setTeam(data.teams))
    }, [])
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div class="card bg-dark text-white">
                            <img src={heroLogo} class="card-img-1" alt="img" />
                            <div class="card-img-overlay ">
                                <h2 class="card-title m-4"><span class="text-primary">Team</span><span className="text-info">Cool</span></h2>
                            </div>
                        </div>
                        <div className="row">
                            {
                                allTeamData.map((allTeam) =>
                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                        <Team allTeam={allTeam} />
                                    </div>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;