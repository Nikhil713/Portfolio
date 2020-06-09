import React from 'react'
import styles from './style.module.css'
import Experience from '../../components/experience-card/experience-card'

export default class Resume extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            exp: [
                { duration: "Now", position: "Web head", company: "Excel", location: "Kerala" }
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
                            {/* <Experience /> */}
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
