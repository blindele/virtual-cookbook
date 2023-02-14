import { Link } from "react-router-dom";
import { useAPI } from "../useContext";

const RecipeList = () => {
    const {recipes,query} = useAPI()

    return(
        <div>
            {
                recipes.filter(recipes => {
                    if(query === ''){
                        return recipes
                    } else if (recipes.title.toLowerCase().includes(query.toLowerCase())){
                        return recipes
                    }
                }).map((recipe) => {
                    return(
                        <div className="recipe-preview" key={recipe.id}>
                        <h1>{recipe.title}</h1>
                        <h2>{recipe.time}</h2>
                        <p>{recipe.method}</p>
                        <Link to={`/recipes/${recipe.id}`}>
                            <button>cook this</button>
                        </Link>
                        </div>
                    )                
                })
            }
        </div>
    )
}

export default RecipeList;