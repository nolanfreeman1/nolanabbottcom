/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    siteMetadata: {
        title: `Nolan Freeman`,
    },
    plugins: [
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography`,
            },
        },
            `gatsby-transformer-sharp`,
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 800,
                            backgroundColor: 'transparent',
                        },
                    },
                ],
            },

        },
            `gatsby-plugin-sharp`,
            {
                resolve: `gatsby-source-filesystem`,
                options: {
                    path: `${__dirname}/src/images/`,
                    name: 'images'
                },
            },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/pages/articles`,
                name: 'articles'
            },
        },
    ],
};
