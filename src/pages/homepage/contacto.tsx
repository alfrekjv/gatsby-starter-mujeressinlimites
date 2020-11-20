import React from 'react'
import * as styles from '../../assets/styles.module.scss'
import { default as ContactForm } from './contactForm'

export default ({ data }: any) => (
    <div className={styles.Contact} id="Contact">
        <header>
            <h1>¿Quieres ayudar?</h1>
            <p className={styles.Subtitle}>
                Para seguir trabajando en nuestra misión, necesitamos de tu ayuda,
                si deseas donar y/o adoptar a uno de nuestros lomitos, ponte en 
                contacto con nosotros.
            </p>
        </header>
        <ContactForm />
    </div>
)