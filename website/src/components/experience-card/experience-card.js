import React from 'react'
import styles from './style.module.css'

export default class Experience extends React.Component {
    render() {
        return (
            <div className={styles["experience-card"]}>
                <div className={styles["card-left"]}>
                    <h1>{this.props.exp.duration}</h1>
                    <h2>{this.props.exp.position}</h2>
                    <h3>{this.props.exp.company}</h3>
                    <h3 style={{margin:"5px 0"}}>{this.props.exp.location}</h3>
                </div>
                <div className={styles["card-right"]}>
                    <p>{this.props.exp.desc1}</p>
                    <p>{this.props.exp.desc2}</p>
                </div>
            </div>
        )
    }
}
