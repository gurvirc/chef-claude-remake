import React from "react"
import Recipe from "./Recipe"
export default function Main() {
    
    const [ingredients, setIngredients]=React.useState([])
    const [showRecipe, setShowRecipe]= React.useState(false)


    const listOfIngredients= ingredients.map(ingredient=> (
        <li key={ingredient}>{ingredient}</li>
    ))

    function addIngredient(formData){
        const newIngredient=formData.get("ingredient")
        setIngredients(prev=> [...prev, newIngredient])
    }

    function handleClick(){
        setShowRecipe(prev=> !prev)
    }

    return(
        <main>
        <form action={addIngredient} className="input-form-ingredients">
            <input type="text" name="ingredient" placeholder="   eg.oregano"></input>
            <button>+ Add Ingredient</button>
        </form>
        <section className="Ingredients-list-items">
            {ingredients.length>0 && <h2>Ingredients on hand:</h2>}
            <ul>{listOfIngredients}</ul>
        </section>

        {ingredients.length > 4 && <section className="Get-recipe-container">
            <div>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients</p>
            </div>
            <button onClick={handleClick}>Generate a recipe</button>
        </section>}
        {showRecipe && <Recipe />}
        </main>
    )
}