import IndexPageTemplate from './IndexPageTemplate'
import MyHelmet from '../components/MyHelmet'
import React from 'react'
import { graphql } from 'gatsby'

const IndexPage = ({ data }) => {
  const { frontmatter: fm } = data.markdownRemark

  // featured posts
  const { edges: posts } = data.allMarkdownRemark

  return (
    <>
      <MyHelmet title={fm.title} description={fm.subheading} />
      <IndexPageTemplate
        heading={fm.heading}
        subheading={fm.subheading}
        ctaLabel={fm.ctaLabel}
        projectHeading={fm.projectHeading}
        allProjectsLabel={fm.allProjectsLabel}
        image={fm.image}
        posts={posts}
        about={fm.about}
      />
    </>
  )
}

export default IndexPage

export const indexPageQuery = graphql`
  query IndexPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html: rawMarkdownBody
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(width: 1024, placeholder: BLURRED)
          }
        }
        heading
        subheading
        ctaLabel
        projectHeading
        allProjectsLabel
        about {
          description
          heading
          image {
            alt
            image {
              childImageSharp {
                gatsbyImageData(width: 1024, placeholder: BLURRED)
              }
            }
          }
          button {
            label
            url
          }
        }
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {
        frontmatter: {
          templateKey: { eq: "project-page" }
          featured: { eq: true }
        }
      }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            location
            featuredimage {
              alt
              image {
                childImageSharp {
                  gatsbyImageData(
                    width: 640
                    placeholder: BLURRED
                    aspectRatio: 1.5
                  )
                }
              }
            }
          }
        }
      }
    }
  }
`
