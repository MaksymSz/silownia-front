import React from 'react';
import { Link } from 'react-router-dom';
import './custom-navbar.css'
function Navbar() {
    return (
        <nav className="navbar navbar-light custom-navbar">
            <div className="container">
                <Link className="navbar-brand" to="">
                    <img src="/images/bootstrap-logo.svg" alt="" width="60" height="24" />
                </Link>
                <Link className="navbar-brand" to="/profile">
                    <img src="/images/person-circle.svg" alt="" width="60" height="24" />
                </Link>
                <Link className="navbar-brand" to="/courses">
                    <img src="/images/person-arms-up.svg" alt="" width="60" height="24" />
                </Link>
                <Link className="navbar-brand" to="/qr">
                    <img src="/images/qr-code.svg" alt="" width="60" height="24" />
                </Link>
                <Link className="navbar-brand" to="/logout">
                    <img src="/images/box-arrow-right.svg" alt="" width="60" height="24" />
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;
