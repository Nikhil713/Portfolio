import React from 'react'
import styles from './style.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

export default class Certificate extends React.Component {
    render() {
        return (
            <div className={styles["experience-card"]} data-aos="fade-down" data-aos-duration="1000">
                <div className={styles["card-left"]}>
                    <img src={this.props.certificate.img} alt=""></img>
                </div>
                <div className={styles["card-right"]}>
                    <div className={styles["name"]}>{this.props.certificate.name}</div>
                    <div className={styles["org"]}>{this.props.certificate.org}</div>
                    <div className={styles["issue"]}>Issued by : {this.props.certificate.issue}</div>
                    <div className={styles["link"]}><a href={this.props.certificate.link} target="_blank" rel="noopener noreferrer">View Certificate</a></div>
                </div>
            </div>
        )
    }
}
