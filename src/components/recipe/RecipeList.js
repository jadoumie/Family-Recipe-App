import React, {useContext, useEffect, useState} from "react"; 
import { Link } from 'react-router-dom'; 
import UserContext from "../../context/UserContext";
import {firestore} from "../../services/firestore"; 
import RecipeNavbar from "./RecipeNavbar";

const RecipeList = () => {
    const [recipes, setRecipes] = useState([]); 

    const user = useContext(UserContext); 

    useEffect(() => {
        const getRecipes = async () => {
            const recipeCol = await firestore
              .collection("users")
              .doc(user.uid)
              .collection("recipes")
              .get();

            setRecipes(recipeCol.docs); 
        }; 
        getRecipes();
    }, [user]); 

    const renderRecipes = () => {
        return recipes.map((recipe, i) => {
          const recipeData = recipe.data();
          return (
            <li key={i}>
              <Link to={`/recipe/${recipe.id}`}>{recipeData.name}</Link>
            </li>
          );
        });
    };

    return (
        <div className = 'recipe-list'>
            <RecipeNavbar/>
            <h1>Recipes</h1>
            <ul>{renderRecipes()}</ul>
        </div>
    );
}; 


export default RecipeList; 