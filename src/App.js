import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  // Add new recipe to current recipe list //
  const createRecipe = (newRecipe) =>
    setRecipes((currentRecipes) => [...currentRecipes, newRecipe]);
    
  // Remove recipe to delete from current recipe list //
  const deleteRecipe = (indexToDelete) =>
    setRecipes((currentRecipes) =>
      currentRecipes.filter((recipe, index) => index !== indexToDelete)
    );

  // createRecipe passed to RecipeCreate.js //
  // List of recipes and deleteRecipe handler passed to RecipeList.js //
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe}/>
      <RecipeCreate createRecipe={createRecipe}/>
    </div>
  );
}

export default App;
