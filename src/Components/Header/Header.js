import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/image/brandIcon.png"
import "./Header.css"


const Header = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <nav className="navbar navbar-expand-lg navbar-light ">
                            <div className="container-fluid">
                                <Link className="navbar-brand d-flex" to="/home"><img className="logo" src={logo} alt="brand-img" /><h2>Sport<span className="text-warning">Stack</span></h2></Link>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNav">

                                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <Link className="nav-link nav-bar active" to="/home">Home</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/about">About</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/contact">Contact</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>

            </div>

        </>
    );
};

export default Header;