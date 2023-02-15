import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React, { useEffect, useState } from 'react'

const getImageSize = (setImageDimensions, img, height) => {
  const _height = height || 40
  const imgHeights = { height: `${_height}px` }
  if (img && img.publicURL) {
    const _img = new Image()
    _img.src = img.publicURL
    _img.onload = () => {
      imgHeights['width'] = _img.width * (_img.height / _height) + 'px'
      setImageDimensions(imgHeights)
    }
  }
}

function MyImage({ image, height = 40, ...rest }) {
  const [imageDimensions, setImageDimensions] = useState({})
  useEffect(() => {
    getImageSize(setImageDimensions, image?.image, height)
  }, [])
  return (
    <>
      {image &&
        (getImage(image?.image) ? (
          <GatsbyImage
            alt={image?.alt}
            {...rest}
            image={getImage(image?.image)}
          />
        ) : (
          <img
            src={image?.image?.publicURL}
            alt={image?.alt}
            {...rest}
            height={imageDimensions.height}
            width={imageDimensions.width}
          />
        ))}
    </>
  )
}

export default MyImage
