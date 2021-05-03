import React from 'react';
import FilmSearch from './FilmSearch';
import RecipeSearch from './RecipeSearch';
// import Form from './Form';

export default class Create extends React.Component {

  state = {
    film: '',
    recipes: new Set()
  }

  handleAddRecipe = recipe => {
    const recipes = this.state.recipes;
    recipes.add(recipe)
    this.setState({
      recipes: recipes
    })
  }

  handleSetFilm = film => {
    this.setState({
      film: film
    })
  }

  render() {
    return (
      <div className="container mx-auto">
        <h1 className="text-indigo-900 mb-4">Create a TV Dinner</h1>
        <div className="grid grid-cols-2 gap-4">
          <div className="border-solid border border-indigo-700 p-1 rounded">
            <FilmSearch handleSetFilm={this.handleSetFilm} />
          </div>
          <div className="border-solid border border-indigo-700 p-1 rounded">
            <RecipeSearch handleAddRecipe={this.handleAddRecipe} />
          </div>
        </div>
        {/* <Form /> */}
      </div>
    );
  }
}