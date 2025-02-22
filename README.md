# Nuxt Tina Tailwind Starter Template

[![Hippocratic License HL3-FULL](https://img.shields.io/static/v1?label=Hippocratic%20License&message=HL3-FULL&labelColor=5e2751&color=bc8c3d)](https://firstdonoharm.dev/version/3/0/full.html)

## 🥞 Stack

- [Nuxt](https://nuxt.com/docs/getting-started/introduction). This sits on top of Vuejs so you get a lot of the same nice coding experience, but a bunch of under the hood benefits (the nuxt website can tell you about these).
- [Nuxt ESLint](https://eslint.nuxt.com/packages/module). This will keep your code using a standard style as much as possible.
- [Nuxt Image](https://image.nuxt.com/). This will help optimize images, which is good for artists and other visually-driven sites.
- [Tina CMS](https://tina.io/). This is a CMS that is git-based, so it will create markdown files we can use for our site's content.
- [NuxtContent](https://content.nuxt.com/). This gives a bunch of helpers for automagically rendering from static folders and files.

## How to use this repo

1. Clone copy etc the repo

### Set up Tina.io

1. Navigate to [AStarter](https://github.com/novellac/astarter) repo and click "Use template."
1. Git clone into the editor/IDE of your choice.
1. Replace the `name` field in `package.json` with your chosen name.
1. Run `npm i` to install dependencies.
1. Push up the changes to your new repo. (You may have to set your git name/email first.)
1. Go to [tina.io](https://tina.io), log in, and create a new project.
1. Copy the `.env.example` file to create your own `.env` file.
1. Copy the Tina tokens into the `.env` file (which tokens correspond to which env vars can be found in the Tina dashboard or the [Tina production docs](https://tina.io/docs/tina-cloud/overview))
1. Go to the deploy service of your choice (I suggest Vercel) and import the repo
1. On the deploy platform, add the env variables `NEXT_PUBLIC_TINA_CLIENT_ID`, `TINA_TOKEN`, and `TINA_INDEXER_TOKEN` you got from the Tina dashboard.
1. Once your site has been built and deployed, copy the URL (usually something like `https://my-cool-site.vercel.app`) and add it in the Configuration tab of the Tina dashboard. This will ensure you can go to `/admin` on your site and be able to sign into Tina.
1. To be able to use media (like pictures, videos, and files you upload), go to the Tina dashboard's Media tab. Follow the prompts (you should not need to change any of the values) to sync media.
1. Serve locally and start to copy and customize!

### Changing out fonts

1. Download the fonts to the `styles/fonts` directory.
1. In `main.css`, replace the `font-face` declarations and the CSS variables under the "Custom Fonts" section

## Roadmap/TODOs

- Create Tina wysiwyg snippets that add TW classes? ([resource](https://tailwindcss.nuxtjs.org/examples/content))
- Look into [Nuxt Color Mode](https://color-mode.nuxtjs.org/)
- Add [Nuxt Test Utils](https://nuxt.com/modules/test-utils) as needed (and choose between jsdom and happy-dom ouch lol)
- Add Nuxt Icons maybe? This seems a bit extra though, not all the sites I work on need icons.
- Look into Nuxt Layers for getting things like shared base components from an external repo.
- Check if we have headingLevel in a Tina field, because it is referenced a lot in Vue SFCs!
- Make IconCards more flexible, to take any icon instead of just the one we've hardcoded.
- Site vars to be added to Tina:
-- BaseNavMenu - Home link
-- BaseNavMenu - Mobile close button aria label
- Maybe use [Nuxt Fonts](https://fonts.nuxt.com/). Fonts with less fuss, hopefully. Basically it downloads fonts for you and stores them in a predetermined place so you are not making a bunch of calls.
- Figure out where the public/static assets should come from when used in app.vue
- Wrangle the TS
- Ensure that focus outlines contrast with the bg and are still overridable by OS configs.
- Dark/Light modes

## Tips, tricks, and gotchas

- For all the scripts you can use to run nifty stuff see the `package.json` file scripts section. Usually you'll just run `npm i` and `npm run dev` to get started developing locally. The `npm run preview` command can be helpful if you're trying to figure out why something looks different when you deploy it versus when you're developing locally.
- When first running the dev command you may get some errors. These shouldn't happen again after first load. ([Github issue](https://github.com/nuxt/nuxt/issues/30461))
- You'll see many of the Tina partials have a Field and Block version. This is so we can take in the same kind of info either in a set field in the content type, or as part of a drag and drop list of sections the user can control.
