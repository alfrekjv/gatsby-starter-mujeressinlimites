import * as React from 'react'
import * as styles from '../assets/styles.module.scss'

interface Props {
    title: String,
    subtitle: String
}

export default class Heroshot extends React.Component<Props, {}> {
    render() {
        return (
            <div className={styles.Heroshot}>
                <div className={styles.HeroshotMainText}>
                    <h1>{this.props.title}</h1>
                    <h2>{this.props.subtitle}</h2>
                </div>
            </div>
        )
    }
}