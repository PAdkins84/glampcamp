module.exports = {
  siteMetadata: {
    title: "glamp-camp",
  },
  plugins: [
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url:
          process.env.WPGRAPHQL_URL ||
          `https://glamp-camp.co.uk/booking/graphql`,
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    {
    resolve: "gatsby-plugin-manifest",
      options: {
        name: "Glamp Camp",
        icon: "src/images/icon2.png",
      },
      },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
