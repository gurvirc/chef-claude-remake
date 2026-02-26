import React from "react"
import Ingredients from "./Ingredients"
import ReactMarkdown from 'react-markdown'
import { getImg } from "./Api"
import { saveRecipe } from "./Api"
export default function Main() {
    
    const [ingredients, setIngredients]=React.useState([])
    const [recipe, setRecipe ] = React.useState("")
    const [recipeObj, setRecipeObj] = React.useState(null)
    const [isLoading, setIsLoading] = React.useState(false)
    const [img, setImg] = React.useState("")

    const recipeSection = React.useRef(null)

    const listOfIngredients= ingredients.map(ingredient=> (
        <li key={ingredient}>{ingredient}</li>
    ))

    function addIngredient(formData){
        const newIngredient=formData.get("ingredient")
        setIngredients(prev=> [...prev, newIngredient])
    }

    async function handleClick(){
        setIsLoading(true)
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
                const jsonPart = data.recipe.split('---JSON---')[1].split('---MARKDOWN---')[0]

                const markDown = data.recipe.split('---MARKDOWN---')[1]

                const recipeObj= JSON.parse(jsonPart)
                setRecipeObj(recipeObj)
                console.log('This is the recipe object')
                console.log(recipeObj)
                setRecipe(markDown)
                setIsLoading(false)
            }


        }catch(err){
            console.log('error fetching recipe')

        }
    }

   

    React.useEffect(()=>{
        if(recipe && recipeSection){
            recipeSection.current.scrollIntoView({behavior: "smooth"})
        }

    }, [recipe])


    return(
        <main>
        <form action={addIngredient} className="input-form-ingredients">
            <input type="text" name="ingredient" placeholder="   eg.oregano"></input>
            <button>+ Add Ingredient</button>
          
        </form>
        <section>
            {ingredients.length>0 && 
                <Ingredients
                    ref= {recipeSection} 
                    ingredients={ingredients} 
                    handleClick={handleClick}
                    isLoading={isLoading}
                    listOfIngredients={listOfIngredients}/>}
        </section>
        <section className="recipe-container">
            {recipe && 
            <div>
                <h1>Chef Claude Recommends:</h1>
               
                <ReactMarkdown>{recipe}</ReactMarkdown>
                <button onClick={async ()=>{
                const imgTemp= await getImg({title: recipeObj.title})
                console.log(imgTemp)
                setImg(imgTemp)
                saveRecipe({recipeObj, recipe, imgTemp})
            }} 
                
                
                className="Save-Recipe">Save Recipe</button>
                {img && <img src={img}/>}
            </div>
    }
        </section>

        </main>
    )
}