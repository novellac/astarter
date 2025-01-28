import type { TinaField, Template } from 'tinacms'

import { imageFields } from './baseFields'

const fullWidthImageBase = {
  label: 'Full width image',
  fields: imageFields
}
export const fullWidthImageBlock: Template = {
  name: 'fullWidthImageBlock',
  ...fullWidthImageBase
}

export const fullWidthImageField: TinaField = {
  name: 'fullWidthImageField',
  type: 'object',
  ...fullWidthImageBase
}