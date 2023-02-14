import {useParams } from "react-router-dom";
import { useAPI } from "../useContext";
import useFetch from "../useFetch";

const RecipeDetails = () => {
    const {id} = useParams()
    const {url} = useAPI()
    const {data: recipe, error, isPending} = useFetch(url + id)

    return (
        <div className="recipe-details">
            {isPending &&<div>Loading...</div>}
            {error &&<div>{error}</div>}
            {recipe && (
                <article>
                    <h1>{recipe.title}</h1>
                    <h2>{recipe.time} minutes to cook</h2>
                    <p className="ing">{recipe.listIngredients.join(',')}</p>
                    <div>{recipe.method}</div>
                </article>
            )}
        </div>
    );
}

export default RecipeDetails;