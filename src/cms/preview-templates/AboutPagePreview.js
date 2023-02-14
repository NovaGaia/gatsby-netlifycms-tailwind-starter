import AboutPageTemplate from '../../templates/AboutPageTemplate'
import React from 'react'

const AboutPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  // need to get the image assets and put them in the team array
  const team = data.team.map(member => {
    const image = getAsset(member.image)
    return {
      ...member,
      image,
    }
  })

  if (data) {
    return (
      <AboutPageTemplate
        heading={data.heading}
        subheading={data.subheading}
        html={data.body}
        team={team}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

export default AboutPagePreview
