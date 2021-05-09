import React from 'react';
import { connect } from 'react-redux';
import { addRecipe, searchRecipeApi } from '../../actions/actionCreators/recipe.js';
import { ArrowRightIcon } from '@heroicons/react/solid';

export class RecipeSearch extends React.Component {
  state = {
    searchString: ''
  };

  handleChange = e => {
    this.setState({
      searchString: e.target.value
    });
  };

  handleEnter = e => {
    if (e.key === 'Enter') {
      this.handleSearch();
    }
  };

  handleSearch = () => {
    const searchString = this.state.searchString;
    if (searchString === "") {
      return null;
    } else {
      this.props.searchRecipeApi(searchString);
    }
  };

  handleSelection = e => {
    this.props.addRecipe(e.target.id);
  }

  render() {
    return (
      <>
        <div className="grid grid-cols-6 gap-2">
          <div className="col-span-5">
            <input 
              name="recipesearch" 
              type="text" 
              placeholder="Search Recipes" 
              onChange={e => this.handleChange(e)} 
              onKeyPress={this.handleEnter} 
              value={this.state.searchString}
              className="p-3 placeholder-indigo-500 text-indigo-800 relative bg-white rounded border border-indigo-400 focus:outline-none focus:ring-1 focus:ring-indigo-300 focus:outline-none w-full"
            />
          </div>
          <div>
            <button
              onClick={this.handleSearch} 
              className="bg-indigo-500 text-white hover:bg-indigo-600 active:bg-indigo-300 focus:outline-none py-3 border border-indigo-600 rounded w-full"
            >
              <ArrowRightIcon className="h-6 w-6 mx-auto" />
            </button>
          </div>
        </div>
        {this.props.searchedRecipes.length ? (
          <div className="recipes-container mt-4 max-h-96">
            {this.props.searchedRecipes.map((recipe, index) => (
              <div className="recipe" key={index}>
                <div className="grid grid-cols-6 gap-2">
                  <div className="col-span-2">
                    {recipe.recipe.image === null || recipe.recipe.image === undefined ? (
                      <img className="border border-indigo-900 rounded" src="https://via.placeholder.com/300x300?text=X" alt="recipe-thumbnail" />
                    ) : (
                      <img className="border border-indigo-900 rounded" src={recipe.recipe.image} alt="recipe-thumbnail" />
                    )}
                  </div>
                  <div className="col-span-4">
                    <a href={recipe.recipe.url} target="_new">
                      <h2 className="text-blue-600">
                        {recipe.recipe.label}
                      </h2>
                    </a>
                    <ul>
                      {recipe.recipe.ingredientLines.map((ingredient, index) => (
                        <li key={index}> {ingredient} </li>
                      ))}
                    </ul>
                    <button 
                      id={recipe.recipe.uri.split("_")[1]}
                      onClick={this.handleSelection}
                      className="bg-indigo-500 text-white hover:bg-indigo-600 active:bg-indigo-300 focus:ring-1 focus:ring-indigo-900 focus:outline-none p-2 border border-indigo-600 rounded mt-5"
                    >
                      Add Recipe
                    </button>
                  </div>
                </div>
                <hr className="border-solid border-4 border-indigo-700 my-4" />
              </div>
            ))}
          </div>
        ) : (
          null
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({ searchedRecipes: state.searchedRecipes });

export default connect(mapStateToProps, { searchRecipeApi, addRecipe })(RecipeSearch);