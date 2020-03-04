export const recipeList = {
  tea: {
    name: 'Tea',
    ingredients: {
      required: ['water', 'sachet of leaves'],
      optional: ['milk', 'honey'],
    },
    steps: [
      'Boil water',
      'Add sachet to cup and pour in the hot water',
      'Wait 2 minutes for black tea, or 4 minutes for herbal',
      'Remove leaves',
      'Add milk/honey',
    ],
    notes: 'I prefer black tea with milk, and herbal tea unsweetened.',
  },
  coffee: {
    name: 'Coffee',
    ingredients: {
      required: ['water', 'ground coffee beans'],
      optional: ['milk', 'cream', 'sugar'],
    },
    steps: [
      'Put ground coffee beans in reusable K-cup',
      'Brew coffee into mug',
      'Add milk/sugar/creamer',
      'Enjoy!',
    ],
    notes: 'I have my coffee with milk or half and half. No sugar.',
  },
};

export default recipeList;
