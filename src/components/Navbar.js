import React, {useState} from "react";
import '../css/Navbar.css'
import { Outlet, Link } from "react-router-dom";

export function Navbar(){

    const [isShown, setIsShown] = useState(false);

    const handleClick = event => {
      setIsShown(current => !current);
    };

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
            <p onClick={handleClick} id="menu-ham" className="menu-hamberger">
                <p className="line-hamberger"></p>
                <p className="line-hamberger"></p>
                <p className="line-hamberger"></p>
            </p>
            {isShown && (
                <div id="modal-ham" className="hamberger">
                    <ul className="ham-link">
                        <li onClick={handleClick}>
                            <Link className="ham-item active" to="/">Profile</Link>
                        </li>
                        <li onClick={handleClick}>
                            <Link className="ham-item" to="/Skills">Skills</Link>
                        </li>
                        <li onClick={handleClick}>
                            <Link className="ham-item" to="/Projects">Projects</Link>
                        </li>
                        <li onClick={handleClick}>
                            <Link className="ham-item" to="/Contacts">Contacts</Link>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}