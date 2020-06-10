import React from 'react'
import styles from './style.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

export default class ProjectCard extends React.Component {
    render() {
        return (
            <div className={styles["experience-card"]} data-aos="fade-down" data-aos-duration="1000">
                <div className={styles["card-left"]}>
                    <img src={this.props.project.img} alt=""></img>
                </div>
                <div className={styles["card-right"]}>
                    <div className={styles["name"]}>{this.props.project.name}</div>
                    <div className={styles["org"]}>{this.props.project.org}</div>
                    <div className={styles["issue"]}>Issued by : {this.props.project.issue}</div>
                    <div className={styles["link"]}><a href={this.props.project.link} target="blank">View project</a></div>
                </div>
            </div>
        )
    }
}
