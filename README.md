<div align="center" >
    <a href="https://www.gatsbyjs.com" target="_blank">
      <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" height="40" />
    </a>
      &nbsp;
    <a href="https://www.netlifycms.org/" target="_blank">
      <img alt="Netlify CMS" src="https://upload.wikimedia.org/wikipedia/commons/d/d4/Netlify_CMS_logo.svg" height="40" />
    </a>
      &nbsp;
    <a href="https://tailwindcss.com/" target="_blank">
      <a href="https://tailwindcss.com" target="_blank">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/tailwindlabs/tailwindcss/HEAD/.github/logo-dark.svg">
      <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/tailwindlabs/tailwindcss/HEAD/.github/logo-light.svg">
      <img alt="Tailwind CSS" src="https://raw.githubusercontent.com/tailwindlabs/tailwindcss/HEAD/.github/logo-light.svg" width="200" height="40" style="max-width: 100%;">
    </picture>
  </a>
    </a>
</div>
<h1 align="center">
  Gatsby v4 - Netlify CMS - Tailwind CSS - Starter
</h1>

[![Netlify Status](https://api.netlify.com/api/v1/badges/8a3b8c4d-3e0d-4a6e-8761-2fe0eaba8df9/deploy-status)](https://app.netlify.com/sites/rad-lamington-09d0a9/deploys)

Enable Netlify CMS w/ Github

1. in `./static/admin/config.yml` set your repo url. `organisation/repo_name`
2. Create a new OAuthApp at https://github.com/settings/developers, set Netlify site URL and copy **Client ID** and **Client Access**
3. In Netlify, in **Site settings** enable **Identity** and **Git Gateaway**
4. In **Site settings** > **AccessControl** in **OAuth** set **Github** w/ informations copied in step 2.

NPM --force
npm i gatsby-remark-relative-images gatsby-transformer-remark-frontmatter --force

An example website built using Gatsby v3, Netlify CMS and Tailwind CSS.

It's a website of a fake urban gardening agency and comprises of a landing page, a project portfolio, about page with team members, and a contact form.

👉 Check out the [demo site](https://rad-lamington-09d0a9.netlify.app/)!

<a href="https://app.netlify.com/start/deploy?repository=https://github.com/NovaGaia/gatsby-netlifycms-tailwind-starter" target="_blank"><img src="https://www.netlify.com/img/deploy/button.svg"></a>

## 🦾 Technologies and Plugins

- ⚛️ **Gatsby v4**
  - "gatsby": "^4.25.4",
- ✍️ **Netlify CMS** (incl. Admin live preview for all pages)
  - "gatsby-plugin-netlify-cms": "^6.25.0"
  - "netlify-cms-app": "^2.15.72",
- 💨 **Tailwind CSS** for styling
  - "tailwindcss": "^3.2.6"
- 🌃 Performant images with gatsby-plugin-image and gatsby-plugin-sharp
- ⛑ Site metadata with react-helmet
- 🗺 Sitemap with gatsby-plugin-sitemap
- 🤖 Robots.txt with gatsby-plugin-robots-txt
- 🧩 Persistent navbar and footer with gatsby-plugin-layout
- ...

## 💻 Local Development

Start development environment with

```
$ git clone https://github.com/NovaGaia/gatsby-netlifycms-tailwind-starter.git
$ cd gatsby-netlifycms-tailwind-starter
$ npm install --force
$ gatsby develop
```

> You need ut use `--force` because of `gatsby-remark-relative-images` who use an react older version.

The site is now available at `localhost:8000/`.

You can connect Netlify CMS to your [local git repo](https://www.netlifycms.org/docs/beta-features/#working-with-a-local-git-repository) (currenly a beta feature) by running this command in a separate terminal.

```
$ npx netlify-cms-proxy-server
```

The Netlify CMS Admin will then be available at `localhost:8000/admin`.

For more details on how to set up the CMS, check out the [Netlify CMS Docs](https://www.netlifycms.org/docs/intro/).

## 🚨 Known issues

When running Netlify CMS locally and updating a page, I regularly get the following error:

`There was an error in your GraphQL query: Field "image" must not have a selection since type "String" has no subfields.`

This seems to have to do with the `gatsby-remark-relative-images` plugin. However, the solution suggested in the [docs](https://www.gatsbyjs.com/plugins/gatsby-remark-relative-images/?=gatsby-remark-relative-images#im-getting-the-error-field-image-must-not-have-a-selection-since-type-string-has-no-subfields) didn't fix the issue for me.

I've you find a solution that works, please let me know or submit a pull request. Thanks!

## 🙌 Credits and thanks

- This template was forked from [gatsby-remark-relative-images](https://github.com/danielmahon/gatsby-remark-relative-images)
- Taylor Bell for his great course [Build a Blog with React and Markdown using Gatsby](https://egghead.io/courses/build-a-blog-with-react-and-markdown-using-gatsby), available for free on Egghead.io
- [Merakiui.com](https://merakiui.com/) for the great free Tailwind CSS components
- [Unsplash](https://unsplash.com/) and photographers for amazing photos
- How to hide and show navbar on scroll: https://dev.to/pratiksharm/navbar-hide-and-show-on-scroll-using-custom-react-hooks-1k98
- How to use prevent layout components from unmounting: https://www.gatsbyjs.com/docs/how-to/routing/layout-components/#how-to-prevent-layout-components-from-unmounting

## 🛠 Todo

- [x] Gatsby V4
- [ ] Remove `gatsby-remark-relative-images` if possible
- [ ] Gatsby V5
- [ ] Use Gatsby V4/V5 <Head> instead of Helmet
- [ ] Page builder
- [ ] Blog