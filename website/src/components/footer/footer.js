import React from 'react'

import './footer.css'

import fb from '../../assets/fb.png'
import github from '../../assets/github.png'
import linkedin from '../../assets/linkedin.png'
import gmail from '../../assets/gmail.png'

export default class Footer extends React.Component{
    render(){
        return(
            <div className="footer-container">
                <footer>
                    <div className="footer-left">
                        <div>
                        <p>© 2020 by Nikhil Babu</p>
                        <p>Created with React JS</p>
                        </div>
                    </div>
                    <div className="footer-right">
                        <div className="call">
                            <h1>Call</h1>
                            <a href="tel:+4915510823092" style={{textDecoration:"none", color:"black"}}>+4915510823092</a>
                        </div>
                        <div className="write">
                            <h1>Write</h1>
                            <a href="mailto:nikhilbabu213@gmail.com" style={{textDecoration:"none", color:"black"}}>nikhilbabu213@gmail.com</a>
                        </div>
                        <div className="follow">
                            <h1>Follow</h1>
                            <div className="follow-icons">
                            <a href="https://www.facebook.com/profile.php?id=100008338440903" target="blank" >
                                    <img src={fb} alt="fb-logo" className="fb"></img>
                                </a>
                                <a href="https://github.com/Nikhil713" target="blank" >
                                    <img src={github} alt="github-logo" className="github"></img>
                                </a>
                                <a href="https://www.linkedin.com/in/nikhil713/" target="blank" >
                                    <img src={linkedin} alt="linkedin-logo" className="linkedin"></img>
                                </a>
                                <a href="mailto:nikhilbabu213@gmail.com" target="blank">
                                    <img src={gmail} alt="gmail-logo" className="gmail"></img>
                                </a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}