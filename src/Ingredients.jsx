export default function Ingredients(props){
    return(
        <section>
            <div className="Ingredients-list-items">
            <h2>Ingredients on hand:</h2>
            <ul>{props.listOfIngredients}</ul>
            </div>
    

        {props.ingredients.length > 4 && <div className="Get-recipe-container">
            <div ref={props.ref}>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients</p>
            </div>
            <button onClick={props.handleClick}>Generate a recipe</button>
        </div>}
        </section>
    )
}