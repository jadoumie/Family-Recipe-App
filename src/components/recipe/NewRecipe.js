import React, { useContext, useState } from "react";
import UserContext from "../../context/UserContext";
import { firestore } from "../../services/firestore";
import  '../App/App.css'; 

const NewRecipe = () => {
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [description, setDescription] = useState("");

  const user = useContext(UserContext);

  const saveRecipe = async (e) => {
    e.preventDefault();

    const ingredientsArray = ingredients.split(",");

    await firestore
      .collection("users")
      .doc(user.uid)
      .collection("recipes")
      .add({
        name,
        ingredients: ingredientsArray,
        description,
      });

    setName("");
    setIngredients("");
    setDescription("");
  };

  return (
    <div className="new-recipe">
      <h1 className='recipe-list'>New recipe</h1>
      <div className = "custContainer">
      <form>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />{" "}
        <input
          type="text"
          placeholder="Ingredients separated by comma"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className = "newRecipeButton" onClick={saveRecipe}>Save recipe</button>
      </form>
      </div>
    </div>
  );
};

export default NewRecipe;