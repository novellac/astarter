import type { TinaField, Template } from 'tinacms'

import { baseHeadingWithIDWarning, wysiwyg } from './baseFields'

const leftAlignedProseBase = {
  label: 'Left-aligned text section',
  fields: [
    baseHeadingWithIDWarning,
    wysiwyg
  ]
}
export const leftAlignedProseBlock: Template = {
  name: 'leftAlignedProseBlock',
  ...leftAlignedProseBase
}

export const leftAlignedProseField: TinaField = {
  name: 'leftAlignedProseField',
  type: 'object',
  ...leftAlignedProseBase
}