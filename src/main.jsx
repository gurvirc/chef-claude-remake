import React from "react"
import Recipe from "./Recipe"
import Ingredients from "./Ingredients"
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
        <section>
            {ingredients.length>0 && <Ingredients ingredients={ingredients} handleClick={handleClick} listOfIngredients={listOfIngredients}/>}
        </section>
        {showRecipe && <Recipe />}
        </main>
    )
}