import React from 'react';
import { connect } from 'react-redux';
import FilmResults from './search/results/FilmResults';
import RecipeResults from './search/results/RecipeResults';
import FilmSearch from './search/searchbars/FilmSearch';
import RecipeSearch from './search/searchbars/RecipeSearch';

const MOVIE_API = "https://api.themoviedb.org/3/search/multi?api_key=e1662fac6894a9932ee327479a6591b1&query=";
const RECIPE_API = "https://api.edamam.com/search?app_id=c3275f9e&app_key=2adeb2b07ad4cdee66f74a93d8f12928&q=";

class Create extends React.Component {
  render() {
    return (
      <div className="container mx-auto">
        <h2 className="mb-4">This is the Create Page</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="border-solid border border-indigo-700 p-1">
            <FilmSearch />
            <hr className="border-solid border-2 border-indigo-700 my-2" />
            <FilmResults />
          </div>
          <div className="border-solid border border-indigo-700 p-1">
            <RecipeSearch />
            <hr className="border-solid border-2 border-indigo-700 my-2" />
            <RecipeResults />
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(Create);