import React from 'react'
import { withRouter } from 'react-router-dom'
import './home.css'

import AOS from 'aos';
import 'aos/dist/aos.css';

import profile from '../../assets/Nikhil.jpg'
import fb from '../../assets/fb.png'
import github from '../../assets/github.png'
import linkedin from '../../assets/linkedin.png'
import gmail from '../../assets/gmail.png'

import resume from '../../assets/Nikhil_Resume.pdf'

// CODE FOR HOMEPAGE

AOS.init();

class Home extends React.Component {
    render() {
        return (

            <div className="home-container">

                <div className="bg-home">
                    <div className="bg-home-left"></div>
                    <div className="bg-home-right"></div>
                </div>

                <div className="home">

                    <div className="home-info">

                        <div className="home-card-container">

                            <div className="home-card">

                                <div className="card-img">
                                    <img src={profile} alt="Profile-picture"></img>
                                </div>

                                <div className="card-name" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="650">
                                    <h1>Nikhil <br /> Babu</h1>
                                </div>

                                <div className="card-name-underline"></div>

                                <div className="card-subtitle mobile-card-subtitle" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="1200">
                                    <h3>PROJECT MANAGER</h3>
                                </div>

                                <div className="info-buttons mobile-info-buttons">
                                    <button className="info-b1">RESUME</button>
                                    <button className="info-b2">PROJECTS</button>
                                </div>


                            </div>

                            <div className="card-contact">
                                <a href="https://www.facebook.com/profile.php?id=100008338440903" target="blank" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="1200">
                                    <img src={fb} alt="fb-logo" className="fb"></img>
                                </a>
                                <a href="https://github.com/Nikhil713" target="blank" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="1200">
                                    <img src={github} alt="github-logo" className="github"></img>
                                </a>
                                <a href="https://www.linkedin.com/in/nikhil713/" target="blank" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="1200">
                                    <img src={linkedin} alt="linkedin-logo" className="linkedin"></img>
                                </a>
                                <a href="mailto:nikhilbabu213@gmail.com" target="blank" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="1200">
                                    <img src={gmail} alt="gmail-logo" className="gmail"></img>
                                </a>
                            </div>
                            <div className="card-blankspace">

                            </div>
                        </div>

                        <div className="home-side-info">

                            <div className="info-head" data-aos="fade-down" data-aos-duration="1000">
                                <h1>Hello!</h1>
                            </div>

                            <div className="info-subheader" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="300">
                                <h2>Here's who I am & what I do</h2>
                            </div>

                            <div className="info-buttons pc-info-buttons" >
                                <button className="info-b1" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="600"><a href={resume} download>RESUME</a></button>
                                <button className="info-b2" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="600">PROJECTS</button>
                            </div>

                            <div className="info-details">
                                <p data-aos="fade-down" data-aos-duration="1000" data-aos-delay="900">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
                                <p data-aos="fade-down" data-aos-duration="1000" data-aos-delay="1200">I’m a great place for you to tell a story and let your users know a little more about you.</p>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Home)