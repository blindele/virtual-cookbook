import { Link } from "react-router-dom";
import { useAPI } from "../useContext";
import { Button,RecipesList,Recipe,Title,Time,Method } from "../../Styles/RecipeList.style";

const RecipeList = () => {
    const {recipes,query} = useAPI()

    return(
        <RecipesList>
            {
                recipes.filter(recipes => {
                    if(query === ''){
                        return recipes
                    } else if (recipes.title.toLowerCase().includes(query.toLowerCase())){
                        return recipes
                    }
                }).map((recipe) => {
                    return(
                        <Recipe className="recipe-preview" key={recipe.id}>
                        <Title>{recipe.title}</Title>
                        <Time>{recipe.time} minutes to make</Time>
                        <Method>{recipe.method}</Method>
                        <Link to={`/recipes/${recipe.id}`}>
                            <Button>cook this</Button>
                        </Link>
                        </Recipe>
                    )                
                })
            }
        </RecipesList>
    )
}

export default RecipeList;