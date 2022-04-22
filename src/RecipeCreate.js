import React, { useState } from "react";


function RecipeCreate({ createRecipe }) {
  // Initial empty form //
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };

  // useState() initially sets formData as initialFormState //
  const [formData, setFormData] = useState({...initialFormState});

  // formData change handler //
  const handleChange = ({ target }) => {
      setFormData({ ...formData, [target.name]: target.value });
  };

  // Submit button handler - create new recipe & clear formData //
  const handleSubmit = (event) => {
    event.preventDefault();
      createRecipe(formData);
      setFormData({...initialFormState});
  };

  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input 
                id="name" 
                type="text" 
                name="name"
                placeholder="Name"
                required={true}
                onChange={handleChange}
                value={formData.name}
              />
            </td>
            <td>
              <input
                id="cuisine"
                type="text"
                name="cuisine"
                placeholder="Cuisine"
                onChange={handleChange}
                value={formData.cuisine}
              />
            </td>
            <td>
              <input
                id="photo"
                type="url"
                name="photo"
                placeholder="URL"
                onChange={handleChange}
                value={formData.photo}
              />
            </td>
            <td>
              <textarea
                id="ingredients"
                name="ingredients"
                placeholder="Ingredients"
                rows={2}
                required={true}
                onChange={handleChange}
                value={formData.ingredients}
                style={{fontFamily:"sans-serif"}}
              />
            </td>
            <td>
              <textarea
                id="preparation"
                name="preparation"
                placeholder="Preparation"
                rows={2}
                onChange={handleChange}
                value={formData.preparation}
                style={{fontFamily:"sans-serif"}}
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
