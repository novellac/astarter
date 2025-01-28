import type { TinaField, Template } from 'tinacms'
import { horizontalCardFields } from './baseFields'

const horizontalCardBase = {
  label: 'Horizontal Card',
  fields: [
    ...horizontalCardFields
  ]
}

export const horizontalCardBlock: Template = {
  name: 'horizontalCardBlock',
  ...horizontalCardBase
}

export const horizontalCardField: TinaField = {
  name: 'horizontalCardField',
  type: 'object',
  ...horizontalCardBase
}