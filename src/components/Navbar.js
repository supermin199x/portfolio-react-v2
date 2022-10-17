import React from "react";
import '../css/Navbar.css'
import { Outlet, Link } from "react-router-dom";

export function Navbar(){
    return(
        <div className="navbar">
            <ul className="nav-link">
                <li className='nav-item-logo'>
                    <img className="logo"  src={ require('../images/logo.png') }  alt="" />
                </li>
                <li>
                    <Link className="nav-item active" to="/">Profile</Link>
                </li>
                <li>
                    <Link className="nav-item" to="/Skills">Skills</Link>
                </li>
                <li>
                    <Link className="nav-item" to="/Projects">Projects</Link>
                </li>
                <li>
                    <Link className="nav-item" to="/Contacts">Contacts</Link>
                </li>
            </ul>
            <Outlet />
        </div>
    );
}