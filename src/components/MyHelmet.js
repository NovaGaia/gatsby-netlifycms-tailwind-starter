import { Helmet } from 'react-helmet'
import React from 'react'
import useSiteMetadata from './SiteMetadata'

function MyHelmet({ title, description }) {
  const {
    seoPrincipal: { title: meta },
  } = useSiteMetadata()
  return (
    <Helmet>
      {title ? (
        <title>
          {title} | {meta}
        </title>
      ) : null}
      {description ? <meta name="description" content={description} /> : null}
    </Helmet>
  )
}

export default MyHelmet
