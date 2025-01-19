# Nuxt Tina Tailwind Starter Template

## 🥞 Stack

- [Nuxt](https://nuxt.com/docs/getting-started/introduction). This sits on top of Vuejs so you get a lot of the same nice coding experience, but a bunch of under the hood benefits (the nuxt website can tell you about these).
- [Nuxt ESLint](https://eslint.nuxt.com/packages/module). This will keep your code using a standard style as much as possible.
- [Nuxt Image](https://image.nuxt.com/). This will help optimize images, which is good for artists and other visually-driven sites.
- [Nuxt Tailwind](https://nuxt.com/modules/tailwindcss). This gives a giant set of utility classes. It's good for spinning up new things, but has drawbacks for bigger projects. Use thoughtfully and don't at me lol.
- [Nuxt Fonts](https://fonts.nuxt.com/). Fonts with less fuss, hopefully. Basically it downloads fonts for you and stores them in a predetermined place so you are not making a bunch of calls.

## How to use this repo

1. Clone copy etc the repo
1. Change out the fonts for your fonts in the `tailwind.config.js` file and wherever  your reference the font directly.

## Roadmap/TODOs

- Create Tina wysiwyg snippets that add TW classes? ([resource](https://tailwindcss.nuxtjs.org/examples/content))
- Look into [Nuxt Color Mode](https://color-mode.nuxtjs.org/)
- Add [Nuxt Test Utils](https://nuxt.com/modules/test-utils) as needed (and choose between jsdom and happy-dom ouch lol)
- Add Nuxt Icons maybe? This seems a bit extra though, not all the sites I work on need icons.

## Tips, tricks, and gotchas

For all the scripts you can use to run nifty stuff see the `package.json` file scripts section. Usually you'll just run `npm i` and `npm run dev` to get started developing locally. The `npm run preview` command can be helpful if you're trying to figure out why something looks different when you deploy it versus when you're developing locally.
