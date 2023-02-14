import ProjectPageTemplate from '../../templates/ProjectPageTemplate'
import React from 'react'

const ProjectPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    // get image assets and transform markdown
    const image =
      data.featuredimage && data.featuredimage.image
        ? {
            ...data.featuredimage,
            image: getAsset(data.featuredimage.image),
          }
        : { image: null, alt: '' }

    return (
      <ProjectPageTemplate
        location={data.location}
        title={data.title}
        date={new Date(data.date).toLocaleDateString('en-GB', {
          weekday: 'short',
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        })}
        image={image}
        body={data.body}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

export default ProjectPagePreview
