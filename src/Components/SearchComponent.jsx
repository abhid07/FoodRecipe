import React from 'react'
import {Link} from 'react-router-dom'

export default function SearchComponent(props) {
    return (
        <div className="search-bar">
            <form onSubmit={props.searchRecipe}>
            <label>Search Recipe :
            <input type="text" value={props.value} onChange={props.setSearch} placeholder="Enter Recipe Name"/>
            </label>
            <button type="submit">Submit</button>
            <button><Link className="link1" to="/Fav">Fav recipe</Link></button>
            </form>
        </div>
    )
}
