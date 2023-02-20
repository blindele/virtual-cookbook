import { Link } from "react-router-dom";
import { Button,RecipesList,Recipe,Title,Time,Method } from "../../Styles/RecipeList.style";
import { useEffect } from "react";
import { getRecipes } from "../../redux/slices/recipeSlice";
import { useDispatch, useSelector } from "react-redux";

const RecipeList = () => {
    const {recipes,loading} = useSelector((state) => state.recipe)
    const query = useSelector(
        (state) => state.recipeFilter.query
    )
    const dispatch = useDispatch()

    useEffect(() =>{
        dispatch(getRecipes())
    }, [])

    if(loading){
        return <h2>Loading</h2>
    }

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