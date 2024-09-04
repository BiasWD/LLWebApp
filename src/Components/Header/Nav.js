import logo from '../../images/Logo.svg';
import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <div className="nav-logo-container">
                <Link to="/">
                    <img
                        src={logo}
                        alt="Little Lemon Logo"
                    />
                </Link>
            </div>
            <ul>
                <li>ABOUT</li>
                <li>MENU</li>
                <li>RESERVATIONS</li>
                <li>
                    <Link to="/booking">
                        ORDER
                    </Link>
                </li>
                <li>ONLINE</li>
            </ul>
            <ul className="login" >
                <li>LOGIN</li>
            </ul>
        </nav>
    )
}

export default Nav;