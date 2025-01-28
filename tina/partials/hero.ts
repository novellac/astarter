import type { TinaField, Template } from 'tinacms'
import { horizontalCardFields, visuallyHideHeading } from './baseFields'

const heroBase = {
  label: 'Hero',
  fields: [
    visuallyHideHeading,
    ...horizontalCardFields
  ]
}
export const heroBlock: Template = {
  name: 'heroBlock',
  ...heroBase
}

export const heroField: TinaField = {
  name: 'heroField',
  type: 'object',
  ...heroBase
}