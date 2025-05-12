import React from "react"
export default function Main() {
    
    const [ingredients, setIngredients]=React.useState([])

    const listOfIngredients= ingredients.map(ingredient=> (
        <li key={ingredient}>{ingredient}</li>
    ))

    function addIngredient(formData){
        const newIngredient=formData.get("ingredient")
        setIngredients(prev=> [...prev, newIngredient])
    }

    return(
        <main>
        <form action={addIngredient} className="input-form-ingredients">
            <input type="text" name="ingredient" placeholder="   eg.oregano"></input>
            <button>+ Add Ingredient</button>
        </form>
        <section className="Ingredients-list-items">
            <h2>Ingredients on hand:</h2>
            <ul>{listOfIngredients}</ul>
        </section>

        <section className="Get-recipe-container">
            <div>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients</p>
            </div>
            <button>Generate a recipe</button>
        </section>
        </main>
    )
}