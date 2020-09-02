import React from 'react';
import './Header.css';

function Header() {  
    return (
        <header>
            <ul className="menu">
                <li>
                    <a href>Home</a>
                </li>
                <li>
                    <a href>News</a>
                </li>
                <li className="has-submenu">
                    <a href>About</a>
                    <ul className="submenu">
                    <li>
                        <a href>Company</a>
                    </li>
                    <li>
                        <a href>Team</a>
                    </li>
                    </ul>
                </li>
                <li>
                    <a href>Contact</a>
                </li>
            </ul>
        </header>
    );
}

export default Header