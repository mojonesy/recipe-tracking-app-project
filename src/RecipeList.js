import React from "react";
import Recipe from "./Recipe";

function RecipeList({ recipes, deleteRecipe }) {

  // Display column headings and list recipes passed to Recipe.js component //
  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {recipes.map((recipe, index) => (
          <Recipe 
            deleteRecipe={() => deleteRecipe(index)}
            key={index}
            recipe={recipe}
          />
        ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
