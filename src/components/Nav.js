import React from 'react';
import { Link } from 'gatsby';

import './nav.css';

const Nav = () => (
    <nav className="nav">
        <ul className="nav-list">
            <li className="nav-list-item">
                <Link
                    activeStyle = {
                        {
                            borderBottom: "2px solid #5c415d" 
                        }
                    } 
                    to="/"
                >
                    Home
                </Link>
            </li>
            <li className="nav-list-item">
                <Link
                    activeStyle = {
                        {
                            borderBottom: "2px solid #5c415d"
                        }
                    }
                    to = "/about/"
                > 
                    About
                </Link>
            </li>
            <li className="nav-list-item">
                <Link 
                    activeStyle = {
                        {
                            borderBottom: "2px solid #5c415d"
                        }
                    }
                    to = "/comic/" 
                >
                    Comic
                </Link>
            </li>
            <li className="nav-list-item">
                <Link
                    activeStyle = {
                    {
                        borderBottom: "2px solid #5c415d"
                    }
                }
                    to = "/comiclist/"
                > 
                    Comic List
                </Link>
            </li>
        </ul>
    </nav>
)

export default Nav;