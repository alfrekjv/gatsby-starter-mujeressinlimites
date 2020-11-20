module.exports = {
  siteMetadata: {
    name: `Starter de Gatsby para Mujeres Sin Límites`,
    tagline: ``
  },
  plugins: [
    {
        resolve: 'gatsby-plugin-react-svg',
        options: {
            rule: {
              include: `${__dirname}/src/assets/vectors`
            }
        }
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-tslint`,
    `gatsby-plugin-react-helmet`
  ],
}
