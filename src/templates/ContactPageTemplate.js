import { SectionHeading, TextImageSplit } from '../components/Sections'

import Header from '../components/Header'
import Mardown from 'react-markdown'
import React from 'react'

function ContactPageTemplate({
  heading,
  subheading,
  contactform,
  office,
  ctaLabel,
}) {
  return (
    <div>
      <Header heading={heading} subheading={subheading} />

      <TextImageSplit image={contactform.image}>
        <SectionHeading>{contactform.heading}</SectionHeading>
        <p className="mt-6 text-gray-500 text-lg dark:text-gray-300">
          {contactform.description}
        </p>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden">
            <label>
              Don’t fill this out if you’re human: <input name="bot-field" />
            </label>
          </p>
          <div className="mt-6">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  First name
                </label>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="mt-1 focus:ring-ringprimary-neutral focus:border-ringprimary-neutral block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Last name
                </label>
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="mt-1 focus:ring-ringprimary-neutral focus:border-ringprimary-neutral block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="email-address"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Email
                </label>
                <input
                  type="text"
                  name="email-address"
                  id="email-address"
                  autoComplete="email"
                  className="mt-1 focus:ring-ringprimary-neutral focus:border-ringprimary-neutral block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <div className="flex justify-between">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Phone
                  </label>
                  <span className="text-gray-500 dark:text-gray-400 text-sm">
                    Optional
                  </span>
                </div>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  autoComplete="email"
                  className="mt-1 focus:ring-ringprimary-neutral focus:border-ringprimary-neutral block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div className="col-span-6">
                <div className="flex justify-between">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Message
                  </label>
                  <span className="text-gray-500 dark:text-gray-400 text-sm">
                    Max. 500 characters
                  </span>
                </div>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    className="shadow-sm focus:ring-ringprimary-neutral focus:border-ringprimary-neutral mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                    defaultValue={''}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-2 py-3 text-right">
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-btdark-text bg-btdark-neutral hover:bg-btdark-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ringprimary-neutral"
            >
              {ctaLabel}
            </button>
          </div>
        </form>
      </TextImageSplit>

      <TextImageSplit image={office.image} imageLeft={true}>
        <p className="text-primary font-semibold tracking-wide dark:text-primary-accent">
          {office.tagline}
        </p>
        <SectionHeading>{office.location}</SectionHeading>
        <div className="mt-6 sm:flex sm:flex-row text-gray-500 dark:text-gray-300">
          <div className="sm:w-1/2">
            <Mardown>{office.address}</Mardown>
          </div>
          <div className="mt-6 sm:mt-0 sm:w-1/2">
            <Mardown>{office.phone}</Mardown>
          </div>
        </div>
      </TextImageSplit>
    </div>
  )
}

export default ContactPageTemplate
