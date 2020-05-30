import React from 'react'
import './home.css'
import profile from '../../assets/Nikhil.jpg'

export default class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <div className="bg-home">
                    <div className="bg-home-left"></div>
                    <div className="bg-home-right"></div>
                </div>
                <div className="home-info">
                    <div className="home-card">
                        <div className="card-img">
                            <img src={profile} alt="Profile-picture"></img>
                        </div>
                    </div>
                    <div className="home -info">

                    </div>
                </div>
            </div>
        )
    }
}