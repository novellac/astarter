import type { TinaField } from 'tinacms'

import { heroBlock } from './hero'
import { centeredProseBlock } from './centeredProse'
import { leftAlignedProseBlock } from './leftAlignedProse'
import { dividerBlock } from './divider'
import { horizontalCardBlock } from './horizontalCard'
import { verticalCardBlock } from './verticalCard'
import { twoUpVerticalCardsBlock } from './twoUpVerticalCards'
import { iconCardsBlock } from './iconCards'
import { imageGalleryBlock } from './imageGallery'
import { fullWidthImageBlock } from './fullWidthImage'

export const pageSections: TinaField = {
  type: 'object',
  list: true,
  name: 'blocks',
  label: 'Sections',
  templates: [
    heroBlock,
    centeredProseBlock,
    leftAlignedProseBlock,
    dividerBlock,
    horizontalCardBlock,
    verticalCardBlock,
    twoUpVerticalCardsBlock,
    iconCardsBlock,
    imageGalleryBlock,
    fullWidthImageBlock
  ]
}