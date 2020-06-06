import React from 'react'
import './navbar.css'
import { Link, Route, BrowserRouter } from 'react-router-dom';


export default class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar-container">
                <nav>
                    <div className="nav-left">
                        <div className="nav-left-content">
                            <div className="blue-square"></div>
                            <div className="nav-name">
                                <h1>Nikhil Babu</h1>
                                <h2><a className="not-mobile">/</a> PROJECT MANAGER</h2>
                            </div>
                        </div>
                    </div>
                    <div className="nav-right">
                        <div class="menu-wrap not-pc">
                            <input type="checkbox" class="toggler"></input>
                            <div class="hamburger"><div></div></div>
                            <div class="menu">
                                <div>
                                    <div>
                                        <ul>
                                            <li>
                                                <a>
                                                    <Link to="/home" style={{textDecoration:"none",color:"black"}}>
                                                        Home
                                                    </Link>
                                                </a>
                                            </li>
                                            <li>
                                                <a>
                                                    <Link to="/projects" style={{textDecoration:"none",color:"black"}}>
                                                        Project
                                                    </Link>
                                                </a>
                                            </li>
                                            <li>
                                                <a>
                                                    <Link to="/certifications" style={{textDecoration:"none",color:"black"}}>
                                                        Certifications
                                                    </Link>
                                                </a>
                                            </li>
                                            <li>
                                                <a>
                                                    <Link to="/contact" style={{textDecoration:"none",color:"black"}}>
                                                        Contact
                                                    </Link>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <ul className="nav-links">
                            <li className="menu-item">
                                <Link to="/home">
                                    HOME
                                </Link>
                            </li>
                            <li className="menu-item"><Link to="/projects">
                                PROJECTS
                                </Link></li>
                            <li className="menu-item"><Link to="/certifications">
                                CERTIFICATIONS
                                </Link></li>
                            <li className="menu-item"><Link to="/contact">
                                CONTACT
                                </Link></li>
                        </ul>
                    </div>

                </nav>
            </div>
        )
    }
}