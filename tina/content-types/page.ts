import type { Collection } from 'tinacms'

import { metadata } from '../partials/baseFields'
import { heroField } from '../partials/hero'
import { dividerField } from '../partials/divider'
import { pageSections } from '../partials/pageSections'

export const page: Collection = {
  label: "Pages",
  name: "page",
  path: "content",
  // match: {
  //   exclude: "some/path/**/**"
  // },
  fields: [
    ...metadata,
    heroField,
    dividerField,
    pageSections
  ]
}