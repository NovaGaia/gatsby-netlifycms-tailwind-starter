import { Link, graphql } from 'gatsby'

import { Container } from '../components/Sections'
import MyHelmet from '../components/MyHelmet'
import ProjectPageTemplate from './ProjectPageTemplate'
import React from 'react'

const ProjectPage = ({ data, pageContext }) => {
  const { next, previous } = pageContext
  const { markdownRemark: project } = data
  const { frontmatter: fm } = project

  return (
    <>
      <MyHelmet title={fm.title} description={project.excerpt} />
      <ProjectPageTemplate
        location={fm.location}
        title={fm.title}
        date={fm.date}
        image={fm.featuredimage}
        body={project.html}
      />

      {/* Links to previous and next project */}
      <Container>
        <div className="sm:flex sm:justify-between sm:items-center sm:gap-4 border-t py-4">
          {previous && previous.frontmatter.templateKey === 'project-page' ? (
            <Link to={previous.fields.slug} className="group">
              <div className="flex items-center gap-x-2 text-gray-500 dark:text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M20.25 12a.75.75 0 01-.75.75H6.31l5.47 5.47a.75.75 0 11-1.06 1.06l-6.75-6.75a.75.75 0 010-1.06l6.75-6.75a.75.75 0 111.06 1.06l-5.47 5.47H19.5a.75.75 0 01.75.75z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="mt-1 p-0 leading-none">Next</span>
              </div>
              <p className="mt-4 uppercase text-primary-accent dark:text-primary-accent font-bold text-xs tracking-wide">
                {previous.frontmatter.location}
              </p>
              <h3 className="font-bold text-lg text-gray-700 dark:text-gray-400 group-hover:underline">
                {previous.frontmatter.title}
              </h3>
            </Link>
          ) : (
            <div />
          )}
          {next && next.frontmatter.templateKey === 'project-page' ? (
            <div className="mt-6 sm:mt-0">
              <Link to={next.fields.slug} className="group sm:text-right">
                <div className="flex items-center gap-x-2 text-gray-500 sm:justify-end dark:text-gray-400">
                  <span className="mt-1 p-0 leading-none">Previous</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="mt-4 uppercase text-primary-accent font-bold text-xs tracking-wide">
                  {next.frontmatter.location}
                </p>
                <h3 className="font-bold text-lg text-gray-700 dark:text-gray-400 group-hover:underline">
                  {next.frontmatter.title}
                </h3>
              </Link>
            </div>
          ) : (
            <div />
          )}
        </div>
      </Container>
    </>
  )
}

export default ProjectPage

export const projectQuery = graphql`
  query ProjectPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html: rawMarkdownBody
      excerpt
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        location
        featuredimage {
          alt
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
