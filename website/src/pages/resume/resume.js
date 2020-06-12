import React from 'react'
import styles from './style.module.css'
import Experience from '../../components/experience-card/experience-card'
import Certificate from '../../components/certificate-cards/certificate'

import image from '../../assets/coursera.png'
import resume from '../../assets/Nikhil_Resume.pdf'

export default class Resume extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            expItem: [
                { duration: "2019 - Present", position: "Web Head", company: "Excel MEC", location: "Kerala",desc1: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.",desc2: "I’m a great place for you to tell a story and let your users know a little more about you." },
                { duration: "2019 - Present", position: "Web Head", company: "Excel MEC", location: "Kerala",desc1: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.",desc2: "I’m a great place for you to tell a story and let your users know a little more about you." }
            ],
            certificateItem: [
                { name: "Google Cloud Platform Fundamentals: Core Infrastructure", org: "Google Cloud", issue: "Coursera", img: image , link: "https://www.coursera.org/account/accomplishments/certificate/JDJV9RCUUQ38"}
            ]
        }
    }
    render() {

        var grid =[]
        for(var i=0;i<this.state.expItem.length;i++){
            var gridItem = <Experience exp={this.state.expItem[i]} />
            grid.push(gridItem)
        }
        var grid1 =[]
        for(i=0;i<this.state.certificateItem.length;i++){
            gridItem = <Certificate certificate={this.state.certificateItem[i]} />
            grid1.push(gridItem)
        }
        return (
            <div className={styles["resume-container"]}>
                <div className={styles["resume-header"]}>
                    <div className={styles["blue-square"]}>
                    </div>
                    <div className={styles["header-title"]}>
                        <h1>Resume</h1>
                    </div>
                </div>
                <div className={styles["resume-body"]}>
                    <div className={styles["experience"]}>
                        <div className={styles["experience-header"]}>
                            <h1>Experience</h1>
                            <a href={resume} target= "blank" className={styles["resume-button"]}>DOWNLOAD CV</a>
                        </div>
                        <div className={styles["experience-body"]}>
                            {grid}
                            
                        </div>
                    </div>
                </div>
                <div className={styles["resume-body"]}>
                    <div className={styles["experience"]}>
                        <div className={styles["experience-header"]}>
                            <h1>Certificates</h1>
                        </div>
                        <div className={styles["experience-body"]}>
                            {grid1}
                            
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
