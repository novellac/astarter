import type { TinaField, Template } from 'tinacms'

import { baseHeadingWithIDWarning, iconCardText } from './baseFields'

const iconCardsBase = {
  label: 'Icon Cards',
  fields: [
    baseHeadingWithIDWarning,
    iconCardText
  ],
}

export const iconCardsBlock: Template = {
  name: 'iconCardsBlock',
  ...iconCardsBase
}

export const iconCardsField: TinaField = {
  name: 'iconCardsField',
  type: 'object',
  ...iconCardsBase
}