import type { TinaField, Template } from "tinacms"

import { verticalCardFields } from './baseFields'

const verticalCardBase = {
  label: 'Vertical Card',
  fields: verticalCardFields
}
export const verticalCardBlock: Template = {
  name: 'verticalCardBlock',
  ...verticalCardBase
}

export const verticalCardField: TinaField = {
  name: 'verticalCardField',
  type: 'object',
  ...verticalCardBase
}