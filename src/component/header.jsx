import React from 'react';
import '../assets/css/header.css';
// import { Link } from 'react-router-dom';

function Header () {
    return (
        <header id="header" className="header d-flex align-items-center fixed-top">
            <div className="container-fluid container-xl position-relative d-flex align-items-center">
                <a href="/" className="logo d-flex align-items-center me-auto">
                    {/* Uncomment the line below if you also wish to use an image logo */}
                    {/* <img src="assets/img/logo.png" alt=""> */}
                    <h1 className="sitename">Dewi</h1>
                </a>

                <nav id="navmenu" className="navmenu">
                    <ul>
                        <li><a href="/" className="active">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="/">Portfolio</a></li>
                        <li><a href="/">Team</a></li>
                    </ul>
                    <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
                </nav>

                <a className="cta-btn" href="index.html#about">Get Started</a>
            </div>
        </header>
    );
};

export default Header;