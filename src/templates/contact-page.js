import ContactPageTemplate from './ContactPageTemplate'
import MyHelmet from '../components/MyHelmet'
import React from 'react'
import { graphql } from 'gatsby'

function ContactPage({ data }) {
  const fm = data.markdownRemark.frontmatter

  return (
    <>
      <MyHelmet title={fm.title} description={fm.subheading} />
      <ContactPageTemplate
        heading={fm.heading}
        subheading={fm.subheading}
        contactform={fm.contactform}
        office={fm.office}
      />
    </>
  )
}

export default ContactPage

export const contactPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        heading
        subheading
        office {
          tagline
          location
          address {
            html: rawMarkdownBody
          }
          phone {
            html: rawMarkdownBody
          }
          image {
            childImageSharp {
              gatsbyImageData(width: 640, placeholder: BLURRED)
            }
          }
        }
        contactform {
          heading
          description
          image {
            childImageSharp {
              gatsbyImageData(width: 640, placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
`
