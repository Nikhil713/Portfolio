import React from 'react'
import styles from './style.module.css'

export default class Resume extends React.Component {
    render() {
        return (
            <div className = {styles["resume-container"]}>
                <div className={styles["resume-header"]}>
                    <div className={styles["blue-square"]}>
                    </div>
                    <div className={styles["header-title"]}>
                        <h1>Resume</h1>
                    </div>
                </div>

            </div>
        )
    }
}
