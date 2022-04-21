import React from "react";

function Recipe({ recipe, deleteRecipe }) {
    return (
        <tr>
            <td className="content"><p>{(recipe.name)}</p></td>
            <td className="content"><p>{(recipe.cuisine)}</p></td>
            <td className="content"><img src ={(recipe.photo)} /></td>
            <td className="content_td"><p>{(recipe.ingredients)}</p></td>
            <td className="content_td"><p>{(recipe.preparation)}</p></td>
            <td className="content">
                <button name="delete" onClick={deleteRecipe}>Delete</button>
            </td>
        </tr>
    )
}

export default Recipe;