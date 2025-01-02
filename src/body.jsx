import React from "react";
import IngredientsList from "./components/IngredientsList";
import ClaudeRecipe from "./components/ClaudeRecipe";
import { getRecipeFromMistral } from "./ai"

export default function Main() {
    const [ingredients, setIngredients] = React.useState([]);
    const [recipe, setRecipe] = React.useState("");

    async function getRecipe() {
       const recipeMarkdown = await getRecipeFromMistral(ingredients)
       setRecipe(recipeMarkdown)
    }

    function addIngredient(event) {
        event.preventDefault(); 
        const formData = new FormData(event.target);
        const newIngredient = formData.get("ingredient");
        setIngredients((prevIngredients) => [...prevIngredients, newIngredient]); 
        event.target.reset(); 
    }

    return (
        <main>
            <form onSubmit={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. My Email is Full"
                    aria-label="Add Problem"
                    name="ingredient"
                />
                <button type="submit">Add Problem</button>
            </form>

            {ingredients.length > 0 && (
                <IngredientsList
                    ingredients={ingredients}
                    getRecipe={getRecipe}
                />
            )}

            {recipe && <ClaudeRecipe recipe={recipe}/>}
        </main>
    );
}
