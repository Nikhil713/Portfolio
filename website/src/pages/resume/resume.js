import React from 'react'
import styles from './style.module.css'
import Experience from '../../components/experience-card/experience-card'

export default class Resume extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            exp: [
                { duration: "2019 - Present", position: "Web Head", company: "Excel MEC", location: "Kerala",desc1: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.",desc2: "I’m a great place for you to tell a story and let your users know a little more about you." }
            ]
        }
    }
    render() {

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
                            <a href="/#" className={styles["resume-button"]}>DOWNLOAD CV</a>
                        </div>
                        <div className={styles["experience-body"]}>
                            <Experience exp={this.state.exp[0]} />
                            
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
