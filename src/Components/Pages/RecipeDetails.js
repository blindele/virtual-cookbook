import {useParams } from "react-router-dom";
import { useAPI } from "../useContext";
import useFetch from "../useFetch";
import { Ingredients, Method, RecipeDet, Time, Title } from "../../Styles/RecipeDetails.style";

const RecipeDetails = () => {
    const {id} = useParams()
    const {url} = useAPI()
    const {data: recipe, error, isPending} = useFetch(url + id)

    return (
        <RecipeDet className="recipe-details">
            {isPending &&<div>Loading...</div>}
            {error &&<div>{error}</div>}
            {recipe && (
                <article>
                    <Title>{recipe.title}</Title>
                    <Time>{recipe.time} minutes to cook</Time>
                    <Ingredients className="ing">{recipe.listIngredients.join(',')}</Ingredients>
                    <Method>{recipe.method}</Method>
                </article>
            )}
        </RecipeDet>
    );
}

export default RecipeDetails;