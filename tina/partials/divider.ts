import type { TinaField, Template } from 'tinacms'
import { pageDivider } from './baseFields'

const dividerBase = {
  label: 'Page divider',
  fields: [
    pageDivider
  ],
}
export const dividerBlock: Template = {
  name: 'dividerBlock',
  ...dividerBase
}

export const dividerField: TinaField = {
  name: 'dividerField',
  type: 'object',
  ...dividerBase
}