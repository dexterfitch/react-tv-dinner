import React from 'react';
import FilmSearch from './FilmSearch';
import RecipeSearch from './RecipeSearch';

export default class Create extends React.Component {
  render() {
    return (
      <div className="container mx-auto">
        <h1 className="text-indigo-900 mb-4">Create a TV Dinner</h1>
        <div className="grid grid-cols-2 gap-4">
          <div className="border-solid border border-indigo-700 p-1 rounded">
            <FilmSearch />
          </div>
          <div className="border-solid border border-indigo-700 p-1 rounded">
            <RecipeSearch />
          </div>
        </div>
      </div>
    );
  }
}