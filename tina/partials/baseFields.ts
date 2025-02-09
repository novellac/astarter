import type { TinaField } from 'tinacms';

export const formatFileName = (rawTitle: string, defaultSlug: string) => {
  return (
    rawTitle
      ?.toLowerCase()
      .trim()
      .replace(/[^a-zA-Z0-9]/g, '-') ||
    defaultSlug.toLowerCase().replace(/[^a-zA-Z0-9]/g, '-')
  );
};

export const metadata: TinaField[] = [
  {
    label: 'Page title',
    name: 'title',
    type: 'string',
    isTitle: true,
    required: true,
  },
  {
    label: 'Draft',
    name: 'draft',
    type: 'boolean',
  },
  {
    label: 'Date',
    name: 'date',
    type: 'datetime',
    required: true,
  },
];

// Prose

export const baseHeading: TinaField = {
  label: 'Heading',
  name: 'heading',
  type: 'string',
};

export const baseHeadingWithIDWarning: TinaField = {
  name: baseHeading.name,
  label: baseHeading.label,
  type: baseHeading.type,
  description: 'Make sure all the headings on the page are unique, since they are used for anchor links.'
};

export const visuallyHideHeading: TinaField = {
  label: 'Visually hide heading',
  name: 'hideHeading',
  type: 'boolean',
};

export const wysiwyg: TinaField = {
  label: 'WYSIWYG text',
  name: 'richText',
  type: 'rich-text',
};

export const iconCardText: TinaField = {
  label: 'Icon card text',
  name: 'text',
  type: 'string',
  list: true,
};

export const caption: TinaField = {
  label: 'Caption',
  name: 'caption',
  type: 'string',
  ui: {
    component: 'textarea',
  },
};

// Graphics

export const altText: TinaField = {
  label: 'Alt text',
  name: 'alt',
  type: 'string',
  description:
    'Provide clear, concise alt text to let screen readers and users with broken images know what is going on in the image.',
};

export const baseImage: TinaField = {
  label: 'Image',
  name: 'image',
  type: 'image',
};

export const imageRight: TinaField = {
  label: 'Image right?',
  name: 'imageRight',
  type: 'boolean',
};

export const pageDivider: TinaField = {
  label: 'Divider style',
  name: 'dividerStyle',
  type: 'string',
  options: [
    {
      label: 'Dotted line',
      value: 'dottedLine',
    },
    {
      label: 'Horizontal line',
      value: 'horizontalLine',
    },
  ],
};

// Collections of fields, reusable in blocks and collections (content types)
export const imageFields = [altText, baseImage];

export const multipleImages: TinaField = {
  label: 'Images',
  name: 'imageGalleryBlockImages',
  type: 'object',
  list: true,
  fields: imageFields,
};

export const horizontalCardFields = [
  baseHeadingWithIDWarning,
  wysiwyg,
  {
    ...pageDivider,
    description: '(optional) Show a divider below the WYSIWYG content.'
  },
  ...imageFields,
  imageRight
];

export const verticalCardFields = [baseHeadingWithIDWarning, wysiwyg, ...imageFields];
