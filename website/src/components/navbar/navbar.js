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
                                <h2>/ PROJECT MANAGER</h2>
                            </div>
                        </div>
                    </div>
                    <div className="nav-right">
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