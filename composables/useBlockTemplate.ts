import HorizontalCardBlock from '~/components/HorizontalCardBlock.vue';
import TwoUpVerticalCardsBlock from '~/components/TwoUpVerticalCardsBlock.vue';
import VerticalCardBlock from '~/components/VerticalCardBlock.vue';
import IconCardsBlock from '~/components/IconCardsBlock.vue';
import ImageGalleryBlock from '~/components/ImageGalleryBlock.vue';
import CenteredProseBlock from '~/components/CenteredProseBlock.vue';
import LeftAlignedProseBlock from '~/components/LeftAlignedProseBlock.vue';

export const useBlockTemplate = (template: string) => {
  switch (template) {
    case 'centeredProseBlock':
      return CenteredProseBlock

    case 'leftAlignedProseBlock':
      return LeftAlignedProseBlock

    case 'horizontalCardBlock':
      return HorizontalCardBlock;

    case 'verticalCardBlock':
      return VerticalCardBlock;

    case 'twoUpVerticalCardsBlock':
      return TwoUpVerticalCardsBlock;

    case 'iconCardsBlock':
      return IconCardsBlock

    case 'imageGalleryBlock':
      return ImageGalleryBlock

    default:
      return 'HorizontalCardBlock';
  }
}
