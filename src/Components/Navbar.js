import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQuery } from "../redux/slices/querySlice";
import { Nav, Link, Search, Title, Click } from "../Styles/Navbar.style";


const Navbar = () => {
    const query = useSelector(
        (state) => state.recipeFilter.query
    )

    const dispatch = useDispatch()


    return(
        <Nav>
            <Title><Click href="/">Cook Book</Click></Title>
            <div>
                Search:
            <Search type="text" onChange={(e) =>
                 dispatch(setQuery(e.target.value))
            }/>
            <Link href="/create">create recipe</Link>
            </div>
        </Nav>

    )
}

export default Navbar;