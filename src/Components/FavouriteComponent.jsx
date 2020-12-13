import React from 'react'

export default function FavouriteComponent(props) {
    console.log(props);
    let displayFav = () =>{
       let favDish =  props.favDish.map(dish=>{
            return(
                <div className="inner-recipe">
                    <img src={dish.recipe.image} alt=""/>
                    <h2>{dish.recipe.label}</h2>
                    <button className="fav-btn"><a href={dish.recipe.url}>See Recipe</a></button>
                </div>
            )
        })
        return favDish
    }
    return (
        <div className="fav">
            <div className="recipe">
                {displayFav()}
            </div>
        </div>
    )
}
