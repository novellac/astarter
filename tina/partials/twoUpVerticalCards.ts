import type { TinaField, Template } from 'tinacms'

import { verticalCardFields } from './baseFields'

const twoUpVerticalCardsBase = {
  label: '2-up Vertical Cards',
  list: true,
  fields: [
    {
      label: '2-up vertical card 1',
      name: 'twoUpOne',
      type: 'object',
      fields: [
        ...verticalCardFields
      ]
    },
    {
      label: '2-up vertical card 2',
      name: 'twoUpTwo',
      type: 'object',
      fields: [
        ...verticalCardFields
      ]
    }
  ]
}

// @ts-expect-error We're expecting this error as we learn to better wrangle the field vs block types
export const twoUpVerticalCardsBlock: Template = {
  name: 'twoUpVerticalCardsBlock',
  ...twoUpVerticalCardsBase
}

// @ts-expect-error We're expecting this error as we learn to better wrangle the field vs block types
export const twoUpVerticalCardsField: TinaField = {
  name: 'twoUpVerticalCardsField',
  type: 'object',
  ...twoUpVerticalCardsBase
}