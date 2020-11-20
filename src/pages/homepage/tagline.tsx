import * as React from 'react'
import * as styles from '../../assets/styles.module.scss'
import CorettaSymbol from '../../assets/vectors/symbol-positive.svg'

export default class Tagline extends React.Component<{}, {}> {
    render() {
        return (
            <div className={styles.Tagline} id="Me">
                <div className={styles.Centered}>
                    <h1>Nosotras hacemos una parte, y tú haces la otra 🙌🏻</h1>
                </div>
            </div>
        )
    }
}