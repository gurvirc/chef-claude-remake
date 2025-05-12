import React from "react"
export default function Main() {
    return(
        <main>
        <form className="input-form-ingredients">
            <input type="text" name="ingredients" placeholder="   eg.oregano"></input>
            <button>+ Add Ingredient</button>
        </form>
        <section className="Ingredients-list-items">
            <h2>Ingredients on hand:</h2>
        </section>
        </main>
    )
}