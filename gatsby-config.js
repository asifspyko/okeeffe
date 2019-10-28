/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const path = require(`path`)
module.exports = {
    /* Your site config here */

    plugins: [
        'gatsby-plugin-sass',
        {
            resolve: `gatsby-plugin-prefetch-google-fonts`,
            options: {
                fonts: [{
                        family: `Roboto`,
                        variants: [`300`, `300i`, `400`, `400i`, `500`, `500i`, `700`, `700i`, `900`, `900i`],
                        subsets: [`latin`],
                    },
                    {
                        family: `Roboto Slab`,
                        variants: [`400`, `700`],
                        subsets: [`latin`],
                    },
                    {
                        family: `Oswald`,
                        variants: [`400`, `500`, `700`],
                        subsets: [`latin`],
                    }
                ],
            },
        },
    ]
}