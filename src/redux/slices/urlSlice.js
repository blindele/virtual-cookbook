import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    url: 'http://localhost:3001/recipes',
}

export const urlSlice = createSlice({
    name: 'url',
    initialState,
})


export default urlSlice.reducer