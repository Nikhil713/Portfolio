import React from 'react'
import styles from './style.module.css'

export default class Experience extends React.Component {
    render() {
        return (
            <div className={styles["experience-card"]}>
                <div className={styles["card-left"]}>
                   {this.props.exp.duration}
                </div>
                <div className={styles["card-right"]}>

                </div>
            </div>
        )
    }
}
