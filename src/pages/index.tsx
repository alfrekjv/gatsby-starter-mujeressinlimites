import React from 'react'
import * as styles from '../assets/styles.module.scss'
import { default as Navbar } from '../components/navbar'
import { default as Heroshot } from '../components/heroshot'
import { default as Tagline } from './homepage/tagline'
import { default as Services } from './homepage/services'
import { default as Contact } from './homepage/contacto'
import { default as Footer } from '../components/footer'
import { Helmet } from 'react-helmet'

const Index = () => {
    return(
        <section className={styles.Container}>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Perros en Situación de Calle</title>
                <link rel="canonical" href="https://coretta.mx/" />
            </Helmet>
            
            <Navbar />

            <Heroshot
                title="Perros en Situación de Calle"
                subtitle="Adopta, dona y ayuda a un perro"
            />

            <div className={styles.Homepage}>
                <Tagline />
                <Services />
                <Contact />
            </div>
            <Footer />
        </section>
    )
}

export default Index