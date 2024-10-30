import React from 'react'
import styles from './style.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

export default class Experience extends React.Component {
    render() {
        return (
            <div className={styles["experience-card"]} data-aos="fade-down" data-aos-duration="1000">
                <div className={styles["card-left"]}>
                    <h1>{this.props.exp.company}</h1>
                    <h2>{this.props.exp.position}</h2>
                    <h3>{this.props.exp.duration}</h3>
                    <h3 style={{ margin: "5px 0" }}>{this.props.exp.location}</h3>
                </div>
                <div className={styles["card-right"]}>
                        <p>{this.props.exp.desc1}</p>
                        <p>{this.props.exp.desc2}</p>
                        <p>{this.props.exp.desc3}</p>
                        <p><em><strong>Technologies Used: </strong> {this.props.exp.tech}</em></p>
                </div>
            </div>
        )
    }
}
