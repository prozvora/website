import PropTypes from 'prop-types';
import React from 'react';

const RecipeDetail = ({recipe}) => {
  return recipe ? (
    <div className="RecipeDetail">
      <h3>{recipe.name}</h3>
      <h4>Ingredients</h4>
      <p>Required:</p>
      <ul>
        {recipe.ingredients.required.map((ingredient, i) => (
          <li key={i}>{ingredient}</li>
        ))}
      </ul>
      <p>Optional:</p>
      <ul>
        {recipe.ingredients.optional.map((ingredient, i) => (
          <li key={i}>{ingredient}</li>
        ))}
      </ul>
      <h4>Steps:</h4>
      <ol>
        {recipe.steps.map((step, i) => (
          <li key={i}>{step}</li>
        ))}
      </ol>
      <h4>Notes:</h4>
      <p>{recipe.notes}</p>
    </div>
  ) : null;
};

RecipeDetail.propTypes = {
  recipe: PropTypes.shape({
    name: PropTypes.string,
    ingredients: PropTypes.shape({
      required: PropTypes.arrayOf(PropTypes.string),
      optional: PropTypes.arrayOf(PropTypes.string),
    }),
    steps: PropTypes.arrayOf(PropTypes.string),
    notes: PropTypes.string,
  }),
};

export default RecipeDetail;
