import React from 'react'
import * as styles from '../../assets/styles.module.scss'
import TimbratApp from '../../assets/images/timbrat-app.png'

export default ({ data }: any) => (
    <section className={styles.Portfolio} id="Portfolio">
        <section className={styles.Centered}>
            <header>
                <h1>Lorem ipsum dolor sit amet</h1>
                <p className={styles.Subtitle}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sed feugiat ex sed orci congue, lacinia eleifend ligula lacinia.
                    Maecenas ut enim vehicula, commodo nunc a, fermentum magna.
                    Cras et dolor sit amet neque cursus condimentum.
                    Praesent tempus egestas eros non laoreet.
                    Donec non dolor risus.
                </p>
            </header>

            <section className={styles.Showcase}>
                <section className={styles.Project}>
                    <div className={styles.Description}>                        
                        <h2>Project Name</h2>
                        <h3 className={styles.Tags}>Branding</h3>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Sed feugiat ex sed orci congue, lacinia eleifend ligula lacinia.
                            Maecenas ut enim vehicula, commodo nunc a, fermentum magna.
                            Cras et dolor sit amet neque cursus condimentum.
                            Praesent tempus egestas eros non laoreet.
                            Donec non dolor risus.
                        </p>

                        <p>
                            <a href="https://timbrat.com.mx">timbrat.com.mx</a>
                        </p>
                    </div><div className={styles.Image}>
                        <img src={TimbratApp} />
                    </div>
                </section>
            </section>
        </section>
    </section>
)