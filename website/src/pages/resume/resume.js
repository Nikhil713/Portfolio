import React from 'react'
import styles from './style.module.css'
import Experience from '../../components/experience-card/experience-card'
import Certificate from '../../components/certificate-cards/certificate'

import coursera from '../../assets/coursera.png'
import linkedin from '../../assets/linkedinlogo.webp'
import hackerrank from '../../assets/hackerrank.jpeg'
import resume from '../../assets/Nikhil_Resume.pdf'

export default class Resume extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            expItem: [
                { duration: "Dec 2019 - Present", position: "Web Manager", company: "Excel MEC", location: "Cochin",desc1: "Designed, implemented and maintained 10+ websites" ,desc2:"Assessed UX and UI designs for technical feasibility",desc3:"Trained and managed a team of 15 web developers to deliver original, quality products",tech:"HTML5, CSS3, React "},
                { duration: "Apr 2018 - May 2018", position: "Intern", company: "FACT", location: "Cochin",desc1: "Learned about the ERP - SAP and how it can be used for resource planning and management",desc2: "Attained an insight as to how different sectors of a company can be integrated with the help of an ERP",tech:"SAP, ABAP" }
            ],
            certificateItem: [
                { name: "Google Cloud Platform Fundamentals: Core Infrastructure", org: "Google Cloud", issue: "Coursera", img: coursera , link: "https://www.coursera.org/account/accomplishments/certificate/JDJV9RCUUQ38"},
                { name: "Introduction to Data Science in Python", org: "University of Michigan", issue: "Coursera", img: coursera , link: "https://www.coursera.org/account/accomplishments/certificate/BR9B3TT65TQT"},
                { name: "HTML Essential Training", org: "Linked In Learning", issue: "Linked In", img: linkedin , link: "https://drive.google.com/file/d/1JgV2sLpa_mkRXxR6_oHaH1gL7ccgF4uQ/view"},
                { name: "Python (Basic)", org: "HackerRank", issue: "HackerRank", img: hackerrank , link: "https://www.hackerrank.com/certificates/cf85dc40a4ef"}
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
