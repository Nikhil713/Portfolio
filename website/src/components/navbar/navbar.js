import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom';


export default class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar-container">
                <nav>
                    <div className="nav-left">
                        <div className="nav-left-content">
                            <div className="blue-square"></div>
                            <div className="nav-name">
                                <div className="mob-nav-name">
                                    <div className="blue-square1"></div>
                                    <h1>Nikhil Babu</h1>
                                </div>
                                <h2><a href="/#" className="not-mobile" style={{ cursor: "auto", color: "black", marginRight: "5px" }}> / </a> WEB DEVELOPER</h2>
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
                                                <a href="/#" class="check">
                                                    <Link to="/home" style={{ textDecoration: "none", color: "black" }}>
                                                        Home
                                                    </Link>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/#" class="check">
                                                    <Link to="/resume" style={{ textDecoration: "none", color: "black" }}>
                                                        Resume
                                                    </Link>
                                                </a>
                                            </li>
                                            {/* <li>
                                                <a>
                                                    <Link to="/projects" style={{textDecoration:"none",color:"black"}}>
                                                        Project
                                                    </Link>
                                                </a>
                                            </li> */}
                                            <li>
                                                <a href="/#" class="check">
                                                    <Link to="/projects" style={{ textDecoration: "none", color: "black" }}>
                                                        Projects
                                                    </Link>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://form.jotform.com/201631983485461" target="blank" class="check">
                                                    {/* <Link to="/contact" style={{textDecoration:"none",color:"black"}}> */}
                                                        Contact
                                                    {/* </Link> */}
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
                            <li className="menu-item"><Link to="/resume">
                                RESUME
                                </Link></li>
                            {/* <li className="menu-item"><Link to="/projects">
                                PROJECTS
                                </Link></li> */}
                            <li className="menu-item"><Link to="/projects">
                                PROJECTS
                                </Link></li>
                            <li className="menu-item">
                                <a href="https://form.jotform.com/201631983485461" target="blank">CONTACT ME</a>
                            </li>
                        </ul>
                    </div>

                </nav>
            </div>
        )
    }
}