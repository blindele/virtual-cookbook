import React from "react";
import { Nav, Link, Search, Title, Click } from "../Styles/Navbar.style";
import { useAPI } from "./useContext";


const Navbar = () => {
    const {setQuery} = useAPI()

    return(
        <Nav>
            <Title><Click href="/">Cook Book</Click></Title>
            <div>
                Search:
            <Search type="text" onChange={(e) => setQuery(e.target.value)}/>
            <Link href="/create">create recipe</Link>
            </div>
        </Nav>

    )
}

export default Navbar;