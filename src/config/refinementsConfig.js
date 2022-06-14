// ------------------------------------------
// Configuration for refinements/facets
// ------------------------------------------

import { hitsConfig } from './hitsConfig';

// This const defines the refinements to be shown
// There are five possible types: hierarchical, price, colour, size, list
// Generally you should use type list if you are adding a new facet here
export const refinements = [
  {
    type: 'hierarchical',
    label: 'Category',
    options: {
      attribute: [
        hitsConfig.hierarchicalCategoriesLvl0,
        hitsConfig.hierarchicalCategoriesLvl1,
        hitsConfig.hierarchicalCategoriesLvl2,
        hitsConfig.hierarchicalCategoriesLvl3,
      ],
      searchable: true,
    },
  },
  {
    type: 'price',
    label: 'Price',
    options: {
      attribute: hitsConfig.price,
    },
  },
  {
    type: 'list',
    label: 'Brand',
    options: {
      attribute: hitsConfig.brand,
      searchable: true,
    },
  },
  {
    type: 'colour',
    label: 'Colour',
    options: {
      attribute: hitsConfig.colourHexa,
    },
  },
  {
    type: 'list',
    label: 'Gender',
    options: {
      attribute: hitsConfig.genderFilter,
    },
  },
  {
    type: 'size',
    label: 'Size',
    options: {
      attribute: hitsConfig.sizeFilter,
      limit: 8,
    },
  },
];

// This const defines the labels used in price refinements
export const refinementPriceLabels = {
  moreThan: 'More than',
  lessThan: 'Less than',
};
