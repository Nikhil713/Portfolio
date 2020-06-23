import React from 'react'
import styles from './style.module.css'

import ProjectCard from '../../components/project-card/projectcard'

import Scrumpti from '../../assets/scrumpti.jpg'
import Prologue from '../../assets/prologue2.jpg'
import Portfolio from '../../assets/portfolio.png'

export default class Project extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            certificateItem: [
                { name: "Scrumpti", role: "Front-End Developer", desc:"Front End design for an online food delivery website", skills:"HTML5, CSS3, React JS",link:"https://github.com/Nikhil713/Scrumpti", image: Scrumpti },
                { name: "Prologue", role: "Full Stack Developer", desc:"An online book management platform, where the user can keep track of their books", skills:"HTML5, CSS3, PHP",link:"https://github.com/Nikhil713/bookRecommendationEngine", image: Prologue },
                { name: "Portfolio", role: "", desc:"Code for my Personal Website made with React JS", skills:"HTML5, CSS3, React JS",link:"https://github.com/Nikhil713/nikhil713.github.io", image: Portfolio }
            ]
        }
    }
    render() {

        var grid1 =[]
        for(var i=0;i<this.state.certificateItem.length;i++){
            var gridItem = <ProjectCard project={this.state.certificateItem[i]} />
            grid1.push(gridItem)
        }
        return (
            <div className={styles["project-container"]}>
                <div className={styles["project-header"]}>
                    <div className={styles["blue-square"]}>
                    </div>
                    <div className={styles["header-title"]}>
                        <h1>Projects</h1>
                    </div>
                </div>
                <div className={styles["project-body"]}>
                    <div className={styles["experience"]}>
                        <div className={styles["experience-body"]}>
                            {grid1}
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
