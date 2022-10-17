import React from "react";
import '../css/Navbar.css'
import { Outlet, Link } from "react-router-dom";

export function Navbar(){
    var menuHam     = document.getElementById('menu-ham');
    var modalHam    = document.getElementById('modal-ham');
    var liclick     = document.getElementsByTagName('li');
    
    function showModal(){
        modalHam.style.display = "flex";
    }

    function closeModal(){
        modalHam.style.display = "none";
    }

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
            <p onClick={()=>{showModal()}} id="menu-ham" className="menu-hamberger">
                <p className="line-hamberger"></p>
                <p className="line-hamberger"></p>
                <p className="line-hamberger"></p>
            </p>
            <div id="modal-ham" className="hamberger">
                <ul className="ham-link">
                    <li onClick={()=>{closeModal()}}>
                        <Link className="ham-item active" to="/">Profile</Link>
                    </li>
                    <li onClick={()=>{closeModal()}}>
                        <Link className="ham-item" to="/Skills">Skills</Link>
                    </li>
                    <li onClick={()=>{closeModal()}}>
                        <Link className="ham-item" to="/Projects">Projects</Link>
                    </li>
                    <li onClick={()=>{closeModal()}}>
                        <Link className="ham-item" to="/Contacts">Contacts</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}