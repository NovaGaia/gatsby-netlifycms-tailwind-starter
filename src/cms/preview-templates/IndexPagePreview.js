import React from 'react'
import IndexPageTemplate from '../../templates/IndexPageTemplate'

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <IndexPageTemplate
        heading={data.heading}
        subheading={data.subheading}
        ctaLabel={data.ctaLabel}
        projectHeading={data.projectHeading}
        allProjectsLabel={data.allProjectsLabel}
        image={getAsset(data.image)}
        posts={[]}
        about={data.about || {}}
        about_image={getAsset(data.about.image.image)}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

export default IndexPagePreview
