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
                        <div className="home -info">
                            <div className="info-head">
                                <h1>Hello!</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}