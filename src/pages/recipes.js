import React, { useState } from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import RecipeDetail from '../components/recipe_detail';
import {recipeList} from '../../static/recipe_list';

const Recipes = () => {
  const [selectedRecipe, setSelectedRecipe] = useState();
  return (
    <Layout>
      <SEO title="Recipes" />
      <h2>Recipes</h2>
      <button onClick={() => setSelectedRecipe('tea')}>Tea</button>
      <button onClick={() => setSelectedRecipe('coffee')}>Coffee</button>
      <RecipeDetail recipe={recipeList[selectedRecipe]} />
    </Layout>
  );
};

export default Recipes;
