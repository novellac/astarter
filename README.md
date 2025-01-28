# Nuxt Tina Tailwind Starter Template

[![Hippocratic License HL3-FULL](https://img.shields.io/static/v1?label=Hippocratic%20License&message=HL3-FULL&labelColor=5e2751&color=bc8c3d)](https://firstdonoharm.dev/version/3/0/full.html)

## 🥞 Stack

- [Nuxt](https://nuxt.com/docs/getting-started/introduction). This sits on top of Vuejs so you get a lot of the same nice coding experience, but a bunch of under the hood benefits (the nuxt website can tell you about these).
- [Nuxt ESLint](https://eslint.nuxt.com/packages/module). This will keep your code using a standard style as much as possible.
- [Nuxt Image](https://image.nuxt.com/). This will help optimize images, which is good for artists and other visually-driven sites.
- [Nuxt Tailwind](https://nuxt.com/modules/tailwindcss). This gives a giant set of utility classes. It's good for spinning up new things, but has drawbacks for bigger projects. Use thoughtfully and don't at me lol.
- [Nuxt Fonts](https://fonts.nuxt.com/). Fonts with less fuss, hopefully. Basically it downloads fonts for you and stores them in a predetermined place so you are not making a bunch of calls.
- [Tina CMS](https://tina.io/). This is a CMS that is git-based, so it will create markdown files we can use for our site's content.

## How to use this repo

1. Clone copy etc the repo
1. Change out the fonts for your fonts in the `tailwind.config.js` file and wherever  your reference the font directly.

### Set up Tina.io

1. Go to [tina.io](https://tina.io), log in, and create a new project.
1. Copy the `.env.example` file to create your own `.env` file.
1. Copy the Tina tokens into the `.env` file (which tokens correspond to which env vars can be found in the Tina dashboard or the [Tina production docs](https://tina.io/docs/tina-cloud/overview))

## Roadmap/TODOs

- Create Tina wysiwyg snippets that add TW classes? ([resource](https://tailwindcss.nuxtjs.org/examples/content))
- Look into [Nuxt Color Mode](https://color-mode.nuxtjs.org/)
- Add [Nuxt Test Utils](https://nuxt.com/modules/test-utils) as needed (and choose between jsdom and happy-dom ouch lol)
- Add Nuxt Icons maybe? This seems a bit extra though, not all the sites I work on need icons.
- Look into Nuxt Layers for getting things like shared base components from an external repo.

## Tips, tricks, and gotchas

- For all the scripts you can use to run nifty stuff see the `package.json` file scripts section. Usually you'll just run `npm i` and `npm run dev` to get started developing locally. The `npm run preview` command can be helpful if you're trying to figure out why something looks different when you deploy it versus when you're developing locally.
- When first running the dev command you may get some errors. These shouldn't happen again after first load. ([Github issue](https://github.com/nuxt/nuxt/issues/30461))
- You'll see many of the Tina partials have a Field and Block version. This is so we can take in the same kind of info either in a set field in the content type, or as part of a drag and drop list of sections the user can control.
