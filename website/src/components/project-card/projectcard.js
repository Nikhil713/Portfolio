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
                    <div className={styles["name"]}>{this.props.project.name}</div>
                    {/* <div className={styles["role"]}>Role  : {this.props.project.role}</div> */}
                    <div className={styles["desc"]}>{this.props.project.desc}</div>
                    <div className={styles["skills"]}>Skills : {this.props.project.skills}</div>
                    <div className={styles["link"]}><a href={this.props.project.link} target="_blank" rel="noopener noreferrer">View project</a></div>
                </div>
                <div className={styles["card-right"]}>
                    <img src={this.props.project.image} alt=""></img>
                </div>
            </div>
        )
    }
}
