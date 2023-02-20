import styled from "styled-components";

export const RecipesList = styled.div`
display: grid;
background-color: lightgray;
grid-template-columns: [first] 1fr [second] 1fr [third] 1fr;
grid-gap: 30px;

`
export const Recipe = styled.div`
padding: 10px 15px;

`

export const Title = styled.h1`
text-align: left;
`

export const Time = styled.h2`
color:gray;
font-size: 18px;

`

export const Method = styled.p`
margin: 10px;
`

export const Button = styled.button`
background-color: gray;
padding: 5x 15px;
border-radius: 2px;
text-align: center;
`