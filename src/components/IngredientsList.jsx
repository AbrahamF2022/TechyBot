export default function IngredientsList(props) {
    const ingredientsListItems = props.ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))
    return (
        <section>
            <h2>Problems Inputted:</h2>
            <ul className="ingredients-list" aria-live="polite">{ingredientsListItems}</ul>
            {props.ingredients.length > 2 && <div className="get-recipe-container">
                <div>
                    <h3>Ready For A Techy Fix</h3>
                    <p>Get a technology diagnosis and fix in seconds</p>
                </div>
                <button onClick={props.getRecipe}>Get Fix Recomendation</button>
            </div>}
        </section>
    )
}