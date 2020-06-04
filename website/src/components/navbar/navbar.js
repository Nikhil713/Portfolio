import React from 'react'
import './navbar.css'

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
                                            <li><a href="#">Home</a></li>
                                            <li><a href="#">Resume</a></li>
                                            <li><a href="#">Project</a></li>
                                            <li><a href="#">Certifications</a></li>
                                            <li><a href="#">Contact</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <ul className="nav-links">
                            <li className="menu-item">HOME</li>
                            <li className="menu-item">RESUME</li>
                            <li className="menu-item">PROJECTS</li>
                            <li className="menu-item">CERTIFICATIONS</li>
                            <li className="menu-item">CONTACT</li>
                        </ul>
                    </div>

                </nav>
            </div>
        )
    }
}