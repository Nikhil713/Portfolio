import React from 'react'
import './home.css'
import profile from '../../assets/Nikhil.jpg'

export default class Home extends React.Component {
    render() {
        return (
            <div className="home-container">
                <div className="bg-home">
                    <div className="bg-home-left"></div>
                    <div className="bg-home-right"></div>
                </div>
                <div className="home">
                    <div className="home-info">
                        <div className="home-card">
                            <div className="card-img">
                                <img src={profile} alt="Profile-picture"></img>
                            </div>
                            <div className="card-name">
                                <h1>Nikhil <br /> Babu</h1>
                            </div>
                            <div className="card-subtitle">
                                <h3>PROJECT MANAGER</h3>
                            </div>
                        </div>
                        <div className="home-side-info">
                            <div className="info-head">
                                <h1>Hello!</h1>
                            </div>
                            <div className="info-subheader">
                                <h2>Here's who I am & what I do</h2>
                            </div>
                            <div className="info-buttons">
                                <button className="info-b1">RESUME</button>
                                <button className="info-b2">PROJECTS</button>
                            </div>
                            <div className="info-details">
                                <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
                                I’m a great place for you to tell a story and let your users know a little more about you.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}