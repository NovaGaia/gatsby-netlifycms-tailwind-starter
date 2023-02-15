const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/templates/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    colors: {
      gray: colors.gray,
      transparent: colors.transparent,
      white: {
        DEFAULT: 'rgb(var(--color-white) / <alpha-value>)',
      },
      primary: {
        // green-700
        DEFAULT: 'rgb(var(--color-primary) / <alpha-value>)',
        light: 'rgb(var(--color-primary--light) / <alpha-value>)',
        accent: 'rgb(var(--color-primary--accent) / <alpha-value>)',
        'inside--text':
          'rgb(var(--color-primary--inside--text) / <alpha-value>)',
        'inside--bg': 'rgb(var(--color-primary--inside--bg) / <alpha-value>)',
        'inside--bg-active':
          'rgb(var(--color-primary--inside--bg-active) / <alpha-value>)',
      },
      btprimary: {
        neutral: 'rgb(var(--color-btprimary-bg--neutral) / <alpha-value>)',
        hover: 'rgb(var(--color-btprimary-bg--hover) / <alpha-value>)',
        text: 'rgb(var(--color-btprimary-text--neutral) / <alpha-value>)',
      },
      ringprimary: {
        neutral: 'rgb(var(--color-ringprimary--neutral) / <alpha-value>)',
        dark: 'rgb(var(--color-ringprimary--dark) / <alpha-value>)',
      },
      btsecondary: {
        neutral: 'rgb(var(--color-btsecondary-bg--neutral) / <alpha-value>)',
        hover: 'rgb(var(--color-btsecondary-bg--hover) / <alpha-value>)',
        text: 'rgb(var(--color-btsecondary-text--neutral) / <alpha-value>)',
      },
      btdark: {
        neutral: 'rgb(var(--color-btdark-bg--neutral) / <alpha-value>)',
        hover: 'rgb(var(--color-btdark-bg--hover) / <alpha-value>)',
        text: 'rgb(var(--color-btdark-text--neutral) / <alpha-value>)',
      },
    },
    extend: {
      typography: ({ theme }) => ({
        green: {
          css: {
            '--tw-prose-body': theme('colors.gray[600]'),
            '--tw-prose-invert-body': theme('colors.gray[300]'),
            '--tw-prose-headings': theme('colors.gray[800]'),
            '--tw-prose-invert-headings': theme('colors.gray[300]'),
            a: {
              color: 'rgb(var(--color-primary--accent))',
              '&:hover': {
                color: 'rgb(var(--color-primary--light))',
              },
            },
          },
        },
      }),
      spacing: {
        '1/2': '50%',
        '1/3': '33.33333%',
        '2/3': '66.66666%',
        '1/4': '25%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
      },
    },
  },
  variants: {
    extend: {
      translate: ['active', 'group-hover'],
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
}
