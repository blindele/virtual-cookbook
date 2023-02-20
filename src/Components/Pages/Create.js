import { useState } from "react";
import {useNavigate } from "react-router-dom";
import { useAPI } from "../useContext";
import { CreateForm, CreateRecipe, CreateTitle, Inputfield, Inputtext, Bothbuttons } from "../../Styles/Create.style";


const Create = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [time, setTime] = useState('');
  const [method, setMethod] = useState('');
  const [listIngredients, setListIngredients] = useState([])
  const nav = useNavigate();
  const {isPending, setIsPending, url} = useAPI();


  const handleIngredients = (e) => {
    e.preventDefault()
    setListIngredients([...listIngredients,ingredients])
    setIngredients('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const recipe = { title, listIngredients, method, time};
    setIsPending(true);
    fetch(url, {
        method: 'POST',
        headers: {"Content-type": "application/json"},
        body: JSON.stringify(recipe)
    }).then(() =>{
        setIsPending(false);
        nav('/')
    })
  }

  return (
    <CreateRecipe className="create">
      <CreateTitle>New recipe</CreateTitle>
      <CreateForm onSubmit={handleSubmit}>
        <label>Recipe title:</label>
        <Inputfield
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Recipe ingredients:</label>
        <Inputfield
          type="text"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
        <Bothbuttons type="button" onClick={handleIngredients}>Add</Bothbuttons>
        <p>Current ingredients: {listIngredients.toString()}</p>
        <label>Recipe method:</label>
        <Inputtext
        required
        value={method}
        onChange={(e) => setMethod(e.target.value)}
        />
        <label>Cooking time (in minutes):</label>
        <Inputfield
        type="number"
        min="0"
        required
        value={time}
        onChange={(e) => setTime(e.target.value)}
        />
        {!isPending && <Bothbuttons type="submit">Submit</Bothbuttons>}
        {isPending && <Bothbuttons disabled>Submiting...</Bothbuttons>}
      </CreateForm>
    </CreateRecipe>
  );
}
 
export default Create;