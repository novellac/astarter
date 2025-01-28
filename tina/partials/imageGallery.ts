import type { TinaField, Template } from 'tinacms'

import { baseHeadingWithIDWarning, caption, multipleImages } from './baseFields'

export const imageGalleryBase = {
  label: 'Image gallery with caption',
  fields: [
    baseHeadingWithIDWarning,
    caption,
    multipleImages
  ],
}

export const imageGalleryBlock: Template = {
  name: 'imageGalleryBlock',
  ...imageGalleryBase
}

export const imageGalleryField: TinaField = {
  name: 'imageGalleryField',
  type: 'object',
  ...imageGalleryBase
}