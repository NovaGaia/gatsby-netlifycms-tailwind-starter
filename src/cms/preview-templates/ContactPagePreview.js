import ContactPageTemplate from "../../templates/ContactPageTemplate"
import React from "react"
const marked = require("marked")

const ContactPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS()

  // get image assets and transform markdown
  const contactform = {
    ...data.contactform,
    image: getAsset(data.contactform.image),
  }

  const office = {
    ...data.office,
    image: getAsset(data.office.image),
    address: {
      html: marked.parse(data.office.address),
    },
    phone: { html: marked.parse(data.office.phone) },
  }

  if (data) {
    return (
      <ContactPageTemplate
        heading={data.heading}
        subheading={data.subheading}
        contactform={contactform}
        office={office}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

export default ContactPagePreview
