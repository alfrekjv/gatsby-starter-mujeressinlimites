import * as React from 'react'
import * as styles from '../../assets/styles.module.scss'
import Branding from '../../assets/vectors/branding.svg'
import Consulting from '../../assets/vectors/consulting.svg'
import Design from '../../assets/vectors/design.svg'
import Development from '../../assets/vectors/development.svg'
import Strategy from '../../assets/vectors/strategy.svg'
import Training from '../../assets/vectors/training.svg'

export default class Services extends React.Component<{}, {}> {
    render() {
        return (
            <div className={styles.Services} id="Services">
                <div className={styles.Centered}>
                    <h1>Tú puedes rescatarlos</h1>

                    <p className={styles.Subtitle}>
                        Nuestra misión es rescatar a la mayor parte de perros
                        en situación de calle, para sanarlos, alimentarlos y 
                        encontrarles un hogar, <strong>como el tuyo</strong>.
                    </p>
                </div>

                <ul className={styles.Service}>
                    <img src={`/assets/images/imagen-servicios.jpg`} alt="Perros en situación de calle" />
                </ul>
            </div>
        )
    }
}