import { SEARCH_RECIPE_API } from '..';

export function searchRecipes(recipes) {
  return {
    type: SEARCH_RECIPE_API,
    payload: recipes
  }
}

export function searchRecipeApi(searchString) {
  return(dispatch) => {
    fetch(`https://api.edamam.com/search?app_id=c3275f9e&app_key=2adeb2b07ad4cdee66f74a93d8f12928&q=${searchString}`)
      .then((res) => res.json())
      .then((json) => {
        dispatch(searchRecipes(json.hits));
      })
  }    
}