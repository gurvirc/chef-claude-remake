import React from "react"
import Recipe from "./Recipe"
import Ingredients from "./Ingredients"
import ReactMarkdown from 'react-markdown'
export default function Main() {
    
    const [ingredients, setIngredients]=React.useState([])
    const [recipe, setRecipe ] = React.useState("")
    const [showRecipe, setShowRecipe]= React.useState(false)


    const listOfIngredients= ingredients.map(ingredient=> (
        <li key={ingredient}>{ingredient}</li>
    ))

    function addIngredient(formData){
        const newIngredient=formData.get("ingredient")
        setIngredients(prev=> [...prev, newIngredient])
    }

    async function handleClick(){
        try{
            const res = await fetch('http://localhost:3000/api/recipe', {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ingredients: ingredients
                })
                
            })
            const data = await res.json()

            if(res.ok){
                console.log(data.recipe)
                setRecipe(data.recipe)
            }


        }catch(err){
            console.log('error fetching recipe')

        }
    }


    return(
        <main>
        <form action={addIngredient} className="input-form-ingredients">
            <input type="text" name="ingredient" placeholder="   eg.oregano"></input>
            <button>+ Add Ingredient</button>
            <button >Add Macros</button>
        </form>
        <section>
            {ingredients.length>0 && <Ingredients ingredients={ingredients} handleClick={handleClick} listOfIngredients={listOfIngredients}/>}
        </section>
        <section className="recipe-container">
            <ReactMarkdown>{recipe}</ReactMarkdown>
        </section>
        </main>
    )
}