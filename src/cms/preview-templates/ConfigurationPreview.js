import React from 'react'

function ConfigurationPreview({ entry, getAsset }) {
  const data = entry.getIn(['data']).toJS()
  if (data) {
    return (
      <>
        <h1
          style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }}
        >
          Configuration
        </h1>
        <section style={{ marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
            Display GitHub icon
          </h2>
          <cite>In header bar.</cite>
          <ul>
            <li>
              <strong>Value</strong>: {data.showGitHubLink ? 'true' : 'false'}
            </li>
          </ul>
        </section>
        <section style={{ marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>SEO</h2>
          <cite>Default SEO.</cite>
          <ul>
            <li>
              <strong>Title</strong>: {data.seoPrincipal?.title}
            </li>
            <li>
              <strong>Description</strong>: {data.seoPrincipal?.description}
            </li>
          </ul>
        </section>
        <section style={{ marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
            Logo Header/Principal
          </h2>
          <cite>Displayed in Header.</cite>
          <ul>
            <li>
              <strong>Image</strong>:{' '}
              <img
                alt={data.logoHeader?.alt}
                src={getAsset(data.logoHeader?.image)}
              />
            </li>
            <li>
              <strong>Alt</strong>: {data.logoHeader?.alt}
            </li>
            <li>
              <strong>Height</strong>: {data.logoHeader?.height}
            </li>
            <li>
              <strong>Width</strong>: {data.logoHeader?.width}
            </li>
          </ul>
        </section>
        <section style={{ marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
            Logo Footer/Secondary
          </h2>
          <cite>Displayed in Footer.</cite>
          <ul>
            <li>
              <strong>Image</strong>:{' '}
              <img
                alt={data.logoFooter?.alt}
                src={getAsset(data.logoFooter?.image)}
              />
            </li>
            <li>
              <strong>Alt</strong>: {data.logoFooter?.alt}
            </li>
            <li>
              <strong>Height</strong>: {data.logoFooter?.height}
            </li>
            <li>
              <strong>Width</strong>: {data.logoFooter?.width}
            </li>
          </ul>
        </section>
        <section style={{ marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Base line</h2>
          <cite>Displayed in Footer, near secondary logo.</cite>
          <ul>
            <li>
              <strong>Text</strong>: {data.siteBaseline}
            </li>
          </ul>
        </section>
        <section style={{ marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Copyright</h2>
          <cite>Displayed in Footer, at the bottom.</cite>
          <ul>
            <li>
              <strong>Text</strong>: {data.copyright?.label}
            </li>
            <li>
              <strong>Url</strong>: {data.copyright?.url}
            </li>
            <li>
              <strong>Title</strong>: {data.copyright?.title}
            </li>
          </ul>
        </section>
      </>
    )
  } else {
    return <div>Loading...</div>
  }
}

export default ConfigurationPreview
