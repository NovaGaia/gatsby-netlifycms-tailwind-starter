import React from 'react'

function NavigationPreview({ entry, getAsset }) {
  const data = entry.getIn(['data']).toJS()
  console.log(data)
  if (data) {
    return (
      <>
        <h1
          style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }}
        >
          Navigation
        </h1>
        <section style={{ marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
            Primary navigation
          </h2>
          <cite>In header bar</cite>
          <ul style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
            {data.navPrimary?.map((item, key) => {
              return (
                <li
                  key={key}
                  style={{
                    border: 'solid 1px',
                    borderRadius: '.2rem',
                    padding: '1rem',
                    display: 'flex',
                    gap: '.5rem',
                    flexDirection: 'column',
                  }}
                >
                  <div>
                    <strong>Label</strong>: <span style={{ wordBreak: 'break-word' }}>{item.name}</span>
                  </div>
                  <div>
                    <strong>Title</strong>: <span style={{ wordBreak: 'break-word' }}>{item.title}</span>
                  </div>
                  <div>
                    <strong>Url</strong>: <span style={{ wordBreak: 'break-word' }}>{item.url}</span>
                  </div>
                </li>
              )
            })}
          </ul>
        </section>
        <section style={{ marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
            Secondary navigation
          </h2>
          <cite>In footer bar, separate in columns.</cite>
          <ul
            style={{
              gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
              display: 'grid',
              columnGap: '.5rem',
              rowGap: '.5rem',
            }}
          >
            {data.navSecondary?.map((item, key) => {
              return (
                <li
                  key={key}
                  style={{
                    border: 'solid 1px',
                    borderRadius: '.2rem',
                    padding: '1rem',
                    display: 'flex',
                    gap: '.5rem',
                    flexDirection: 'column',
                  }}
                >
                  <div>
                    <strong>Label</strong>:
                    <span style={{ wordBreak: 'break-word' }}>{item.name}</span>
                  </div>
                  <ul
                    style={{
                      display: 'flex',
                      gap: '1rem',
                      flexDirection: 'column',
                    }}
                  >
                    {item?.links?.map((subItem, subKey) => {
                      return (
                        <li
                          key={subKey}
                          style={{
                            border: 'solid 1px',
                            borderRadius: '.2rem',
                            padding: '1rem',
                            display: 'flex',
                            gap: '.5rem',
                            flexDirection: 'column',
                          }}
                        >
                          <div>
                            <strong>Label</strong>:{' '}
                            <span style={{ wordBreak: 'break-word' }}>
                              {subItem.name}
                            </span>
                          </div>
                          <div>
                            <strong>Title</strong>:{' '}
                            <span style={{ wordBreak: 'break-word' }}>
                              {subItem.title}
                            </span>
                          </div>
                          <div>
                            <strong>Url</strong>:{' '}
                            <span style={{ wordBreak: 'break-word' }}>
                              {subItem.url}
                            </span>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </li>
              )
            })}
          </ul>
        </section>
      </>
    )
  } else {
    return <div>Loading...</div>
  }
}

export default NavigationPreview
