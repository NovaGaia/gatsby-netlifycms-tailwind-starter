import { graphql, useStaticQuery } from 'gatsby'

const useSiteMetadata = () => {
  const { siteMetadata, gatsbyConf } = useStaticQuery(
    graphql`
      query SITE_METADATA_QUERY {
        gatsbyConf: site {
          siteMetadata {
            repoUrl
          }
        }
        siteMetadata: markdownRemark(
          fields: { slug: { regex: "/siteMetadata/" } }
        ) {
          frontmatter {
            seoPrincipal {
              description
              title
            }
            siteBaseline
            copyright {
              label
              url
            }
            showGitHubLink
            logoFooter {
              alt
              height
              width
              image {
                publicURL
                childImageSharp {
                  gatsbyImageData(height: 40)
                }
              }
            }
            logoHeader {
              alt
              height
              width
              image {
                publicURL
                childImageSharp {
                  gatsbyImageData(height: 40)
                }
              }
            }
          }
        }
      }
    `
  )
  siteMetadata.frontmatter['repoURL'] = gatsbyConf?.siteMetadata?.repoUrl
  return siteMetadata.frontmatter
}

export default useSiteMetadata
