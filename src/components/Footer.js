import { Link } from 'gatsby'
import MyImage from './MyImage'
import React from 'react'

const Footer = ({ siteBaseline, logo, copyright, navigation }) => {
  return (
    <footer className="bg-gray-100">
      <div className="max-w-7xl px-4 py-4 mx-auto sm:px-6 lg:px-8">
        <div className="lg:flex">
          <div className="w-full -mx-4 sm:-mx-6 lg:-mx-8 lg:w-2/5">
            <div className="px-4 sm:px-6 lg:px-8">
              <Link className="flex items-center gap-1" to="/">
                <MyImage image={logo} />
              </Link>

              <p className="max-w-md mt-2 text-gray-600 dark:text-gray-400">
                {siteBaseline}
              </p>
            </div>
          </div>

          <div className="mt-6 lg:mt-0 lg:flex-1">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
              {navigation?.map((column, key) => {
                return (
                  <div key={key}>
                    <h3 className="text-gray-700 font-semibold uppercase dark:text-white">
                      {column.name}
                    </h3>
                    {column?.links?.map((link, subKey) => {
                      if (
                        link?.url.startsWith('http') ||
                        link?.url.startsWith('mailto') ||
                        link?.url.startsWith('tel')
                      ) {
                        return (
                          <a
                            href={link?.url}
                            title={link.title}
                            target={`_blank`}
                            rel={`noreferer`}
                            key={subKey}
                            className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                          >
                            {link.name}
                          </a>
                        )
                      } else {
                        return (
                          <Link
                            to={link.url}
                            title={link.title}
                            key={subKey}
                            className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                          >
                            {link.name}
                          </Link>
                        )
                      }
                    })}
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {copyright && (
          <>
            <hr className="h-px my-6 bg-gray-300 border-none dark:bg-gray-700" />
            <div className="text-center">
              <a
                href={copyright.url}
                title={copyright.title}
                target={`_blank`}
                rel={`noreferer`}
                className="text-gray-800 dark:text-white hover:underline"
              >
                {copyright.label}
              </a>
            </div>
          </>
        )}
      </div>
    </footer>
  )
}

export default Footer
