import React from 'react'
import './home.css'
import { Link } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';

import profile from '../../assets/Nikhil.jpg'
import fb from '../../assets/fb.png'
import github from '../../assets/github.png'
import linkedin from '../../assets/linkedin.png'
import gmail from '../../assets/gmail.png'


// CODE FOR HOMEPAGE

AOS.init();

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

                        <div className="home-card-container"  data-aos="fade-down" data-aos-duration="1000">

                            <div className="home-card">

                                <div className="card-img">
                                    <img src={profile} alt=""></img>
                                </div>

                                <div className="card-name">
                                    <h1>Nikhil <br /> Babu</h1>
                                </div>

                                <div className="card-name-underline"></div>

                                <div className="card-subtitle mobile-card-subtitle">
                                    <h3>S/W DEVELOPER</h3>
                                </div>

                                <div className="info-buttons mobile-info-buttons">
                                    <button className="info-b1"> <Link to="/resume" >
                                        RESUME
                                                    </Link></button>
                                    <button className="info-b2"><Link to="/projects" >PROJECTS</Link></button>
                                </div>


                            </div>

                            <div className="card-contact">
                                <a href="https://www.facebook.com/profile.php?id=100008338440903" target="blank">
                                    <img src={fb} alt="fb-logo" className="fb"></img>
                                </a>
                                <a href="https://github.com/Nikhil713" target="blank">
                                    <img src={github} alt="github-logo" className="github"></img>
                                </a>
                                <a href="https://www.linkedin.com/in/nikhil713/" target="blank">
                                    <img src={linkedin} alt="linkedin-logo" className="linkedin"></img>
                                </a>
                                <a href="mailto:nikhilbabu213@gmail.com" target="blank">
                                    <img src={gmail} alt="gmail-logo" className="gmail"></img>
                                </a>
                            </div>
                            <div className="card-blankspace">

                            </div>
                        </div>

                        <div className="home-side-info">

                            <div className="info-head" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="300">
                                <h1>Hello!</h1>
                            </div>

                            <div className="info-subheader" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="500">
                                <h2>Welcome to my Portfolio</h2>
                            </div>

                            <div className="info-buttons pc-info-buttons" >
                                <Link to="/resume">
                                    <button className="info-b1" data-aos="fade-down" data-aos-duration="1500" data-aos-delay="900">
                                        RESUME
                                    </button>
                                </Link>
                                <Link to="/projects">
                                <button className="info-b2" data-aos="fade-down" data-aos-duration="1500" data-aos-delay="900">PROJECTS</button>
                                </Link>
                            </div>

                            <div className="info-details">
                                <p data-aos="fade-down" data-aos-duration="1000" data-aos-delay="100">I am currently pursuing my Masters Degree in Computer Science at Universität Stuttgart.</p>
                                <p data-aos="fade-down" data-aos-duration="1000" data-aos-delay="100">I love coding and solving problems.</p>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        )
    }
}