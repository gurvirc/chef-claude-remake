import React from 'react'
import recipesDatabase from './RecipeDB'
import Header from './Header.jsx'


const recipes = recipesDatabase.map((recipe) => {
    const difficulty = recipe.difficulty
    return (
        
        <div key={recipe.id} className='recipe-card'>
            <img 
                src={recipe.img} 
                alt={recipe.recipeTitle}
            />
            <div className="recipe-info">
                <h2>{recipe.recipeTitle}</h2>
                <p>{recipe.description}</p>
                
            
            
                <div className="recipe-meta">
                    <br/>
                    <div className='time-serving'>
                        <div className='recipe-time'>
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#787878"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4.51555 7C3.55827 8.4301 3 10.1499 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3V6M12 12L8 8" stroke="#808080" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                            <span className="time">{recipe.time} min</span>
                        </div>
                        <div className='recipe-serving'>
                            <svg width="69px" height="69px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.4800000000000001"></g><g id="SVGRepo_iconCarrier"> <path d="M19 15C21.2091 15 23 16.7909 23 19V21H21M16 10.874C17.7252 10.4299 19 8.86383 19 6.99999C19 5.13615 17.7252 3.57005 16 3.12601M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7ZM5 15H13C15.2091 15 17 16.7909 17 19V21H1V19C1 16.7909 2.79086 15 5 15Z" stroke="#808080" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                            <span className="servings">{recipe.servingSize} servings</span>
                        </div>
                        <span className={difficulty}>{recipe.difficulty}</span>
                    </div>
                    
                    
                    
                </div>
            </div>
        </div>
    )
})


export default function SavedRecipes(){
    return(
        <div>
            <Header/>
            <main className='recipe-page'>
                {recipes}
            </main>
        </div>
    )
}