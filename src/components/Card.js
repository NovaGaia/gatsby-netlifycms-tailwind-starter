import React from 'react'
import { Link } from 'gatsby'
import Image from '../components/Image'

function Card({ image, heading, date, location, url, ...rest }) {
  return (
    <Link
      to={url}
      className="group transform hover:-translate-y-2 duration-200"
      {...rest}
    >
      <Image
        image={image.image}
        alt={image.alt}
        className="rounded-md overflow-hidden"
      />
      <div className="mt-4 flex items-baseline gap-x-2 justify-between">
        <span className="uppercase text-primary dark:text-primary-accent font-bold text-xs tracking-wide">
          {location}
        </span>
        <span className="text-sm text-gray-600 dark:text-gray-400">{date}</span>
      </div>
      <h3 className="mt-1 font-bold text-lg group-hover:underline text-gray-600 dark:text-gray-300">
        {heading}
      </h3>
    </Link>
  )
}

export default Card
