import React from 'react'
import DisplayComponent from './DisplayComponent'
import SearchComponent from './SearchComponent'
import { useEffect, useState } from 'react'
import axios from 'axios'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import EnlargeComponent from './EnlargeComponent.jsx'
import FavouriteComponent from './FavouriteComponent'



export default function HomeComponent() {

    const [recipe, setRecipe] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const [query, setQuery] = useState('Roll')
    const [title,setTitle] = useState('')
    const [largeRecipe, setLargeRecipe] = useState('')
    const [fav , setFav] = useState ([])

    const appid = 'd6384881'
    const apikey = "f70cd4e5ff96c0586c3109f64afaa103"
    const url =
        `https://api.edamam.com/search?q=${query}&app_id=${appid}&app_key=${apikey}`

    useEffect(() => {
        axios.get(url)
            .then(res => {
                console.log(res.data)
                setTitle(res.data.q)
                setRecipe(res.data.hits)
            })
            .catch(err => console.log(err))
    }, [query])

    let setSearch=(e)=>{
        let name = e.target.value
        console.log(name);
        setSearchValue(name)
    }

    let searchRecipe=(e)=>{
        e.preventDefault()
        console.log(query);
        setQuery(searchValue)
        setSearchValue('')
    }

    let showLarge=(recipe)=>{
        setLargeRecipe(recipe)
    }

    let hide = () => {
        let toast = document.getElementById('toast')
        let toast1 = document.getElementById('toast1')
        toast.style.display = 'none'
        toast1.style.display='none'
    }
    let addFav=(favv)=>{ 
        let toast = document.getElementById('toast')
        let toast1 = document.getElementById('toast1')
        if(fav.length>0)
        {
            fav.map(val=>{
                if (favv.recipe.label !== val.recipe.label) {
                    setFav([...fav, favv])
                    toast.style.display="block"
                    setTimeout(hide, 1000)
                }
                else {
                    setFav([...fav])
                    toast1.style.display='block'
                    console.log("alreday added");
                    setTimeout(hide, 1000)
                }
            })
        }
        else{
            setFav([...fav, favv])
            toast.style.display = "block"
            setTimeout(hide, 1000)
        }

       
    }
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <SearchComponent setSearch={setSearch} searchRecipe={searchRecipe} value={searchValue}/>
                        <DisplayComponent recipeData = {recipe} title={title} showLarge={showLarge} addFav={addFav}/>
                    </Route>
                    <Route path = "/EnlargeComponent">
                        <EnlargeComponent largeRecipe={largeRecipe}/>
                    </Route>
                    <Route path="/Fav">
                        <FavouriteComponent favDish = {fav} />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}
