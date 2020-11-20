import React from 'react'
import * as styles from '../assets/styles.module.scss'

const Navbar = () => {
    return (
        <footer className={styles.Footer}>
            <div className={styles.Centered}>
                <div className={styles.Copyright}>
                    <img src="/assets/images/huellita.png" />

                    <p>&copy; 2020. Perros en Situación de Calle.</p>
                    <p>Todos los derechos reservados</p>
                </div>
            </div>
        </footer>
    )
}

export default Navbar