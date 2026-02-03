import React from "react"
import Recipe from "./Recipe"
import Ingredients from "./Ingredients"
import ReactMarkdown from 'react-markdown'
export default function Main() {
    
    const [ingredients, setIngredients]=React.useState([])
    const [recipe, setRecipe ] = React.useState("")
    const [showRecipe, setShowRecipe]= React.useState(false)
    const [recipeObj, setRecipeObj] = React.useState(null)
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

   async function saveRecipe(){
    try {
         const res = await fetch('http://localhost:3000/api/addRecipe', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: recipeObj.title,
                description: recipeObj.description,
                servings: recipeObj.servings,
                timeMinutes: recipeObj.timeMinutes,
                difficulty: recipeObj.difficulty,
                recipe: recipe
            })
         }) 

         const data= await res.json()

         if(res.ok){
            console.log('recipe succesfully saved')
            console.log(data)
            await getImg()
         }
    } catch (error) {
        console.log('An error occurred saving the recipe')
    }
    }

    async function getImg(){
        try {
            const res = await fetch('http://localhost:3000/api/getImg', {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: recipeObj.title
                })
            })

            const data = await res.json()
            console.log('img succesfully recieved')
            console.log(data)
            
            if(res.ok){
                setImg(data)
                console.log(data)
            }



        } catch (err) {
            console.log('Erro fetching img', err)
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
            {ingredients.length>0 && 
                <Ingredients
                    ref= {recipeSection} 
                    ingredients={ingredients} 
                    handleClick={handleClick} 
                    listOfIngredients={listOfIngredients}/>}
        </section>
        <section className="recipe-container">
            {recipe && 
            <div>
                <h1>Chef Claude Recommends:</h1>
               
                <ReactMarkdown>{recipe}</ReactMarkdown>
                <button onClick={saveRecipe} className="Save-Recipe">Save Recipe</button>
                {img && <img src={img}/>}
            </div>
    }
        </section>

        </main>
    )
}