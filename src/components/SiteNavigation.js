import { graphql, useStaticQuery } from 'gatsby'

const useSiteNavigation = () => {
  const { markdownRemark } = useStaticQuery(
    graphql`
      query SITE_NAVIGATION_QUERY {
        markdownRemark(fields: { slug: { regex: "/navigations/" } }) {
          navigations: frontmatter {
            navPrimary {
              name
              title
              url
            }
            navSecondary {
              name
              links {
                name
                title
                url
              }
            }
          }
        }
      }
    `
  )
  return markdownRemark.navigations
}

export default useSiteNavigation
