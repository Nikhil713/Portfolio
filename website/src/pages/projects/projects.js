import React from 'react'
import styles from './style.module.css'

import ProjectCard from '../../components/project-card/projectcard'

import Scrumpti from '../../assets/scrumpti.jpg'

export default class Project extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            certificateItem: [
                { name: "Scrumpti", role: "front end", desc:" ", skills:"", image: Scrumpti }
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
