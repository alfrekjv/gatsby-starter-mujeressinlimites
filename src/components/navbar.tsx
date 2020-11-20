import * as React from 'react'
import * as styles from '../assets/styles.module.scss'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default class Navbar extends React.Component<{}, {}> {
    render() {
        return (
            <section className={styles.Navbar}>
                <section className={styles.Centered}>
                    <div className={styles.Logo}>
                        <AnchorLink offset="100" href="/">
                            <img src="/assets/images/huellita.png" />
                        </AnchorLink>
                    </div>

                    <nav className={styles.Menu}>
                        <AnchorLink offset="100" href="/">Inicio</AnchorLink>
                        <AnchorLink offset="100" href="#Me">Acerca de</AnchorLink>
                        <AnchorLink offset="100" href="#Contact">Dona</AnchorLink>
                    </nav>
                </section>
            </section>
        )
    }
}