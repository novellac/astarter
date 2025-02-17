import { defineContentConfig, defineCollection, z} from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**/*.md'
    }),
    site: defineCollection({
      type: 'page',
      source: 'site/global.json'
    })
  }
})
