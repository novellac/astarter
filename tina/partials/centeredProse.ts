import type { TinaField, Template } from 'tinacms'

import { baseHeadingWithIDWarning, wysiwyg } from './baseFields'

const centeredProseBase = {
  label: 'Centered text section',
  fields: [
    baseHeadingWithIDWarning,
    wysiwyg
  ]
}
export const centeredProseBlock: Template = {
  name: 'centeredProseBlock',
  ...centeredProseBase
}

export const centeredProseField: TinaField = {
  name: 'centeredProseField',
  type: 'object',
  ...centeredProseBase
}