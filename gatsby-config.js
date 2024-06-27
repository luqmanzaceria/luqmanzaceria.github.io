/**
 * @type {import('gatsby').GatsbyConfig}
 */

require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Luqman Zaceria`,
    description: `Luqman Zaceria's Personal Website`,
    siteUrl: `https://luqmanzaceria.github.io`
  },
  plugins: [
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // your google analytics tracking id
        trackingIds: [process.env.GOOGLE_ANALYTICS_ID],
        // Puts tracking script in the head instead of the body
        head: false,
        // enable ip anonymization
        anonymize: true,
      },
    }, 
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
          trackingId: process.env.GOOGLE_ANALYTICS_ID,
          head: true
      }
    },
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-robots-txt'
  ]
};