import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/solid';

export default class FilmSearch extends React.Component {
  state = {
    searchString: '',
    films: []
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
  }

  handleSearch = () => {
    const searchString = this.state.searchString;
    if (searchString === "") {
      return null
    } else {
      this.filmApiCall(searchString);
    }
  };

  filmApiCall = searchString => {
    const filmApi = `https://api.themoviedb.org/3/search/multi?api_key=e1662fac6894a9932ee327479a6591b1&query=${searchString}`;
    fetch(filmApi)
      .then(res => {
        return res.json();
      })
      .then(json => {
        const filteredFilms = json.results.filter(result => !result.media_type.includes("person"))
        this.setState({films: filteredFilms})
      })
  }

  render() {
    return (
      <>
        <div className="grid grid-cols-6 gap-2">
          <div className="col-span-5">
            <input 
              name="filmsearch" 
              type="text" 
              placeholder="Search Films" 
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
        {this.state.films.length ? (
          <div className="films-container mt-4 max-h-96">
            {this.state.films.map((film, index) => (
              <div className="film" key={index}>
                <div className="grid grid-cols-6 gap-2">
                  <div className="col-span-2">
                    {film.poster_path === null || film.poster_path === undefined ? (
                      <img src="https://via.placeholder.com/300x460?text=X" alt="film-thumbnail" />
                    ) : (
                      <img src={`https://image.tmdb.org/t/p/w300${film.poster_path}`} alt="film-thumbnail" />
                    )}
                  </div>
                  <div className="col-span-4">
                    {film.original_title === undefined ? (
                      <h2>{film.name} <span className="font-light"><small>({film.first_air_date.substring(0,4)})</small></span></h2>
                    ) : (
                      <h2>{film.original_title} <span className="font-light"><small>({film.release_date.substring(0,4)})</small></span></h2>
                    )}
                    <hr className="border-solid border-3 border-indigo-300 my-1" />
                    {film.overview === "" ? (
                      <p>No synopsis available</p>
                    ) : (
                      <p>{film.overview}</p>
                    )}

                  {/* vvvvv SOMEHOW THIS BUTTON MUST SELECT THE SPECIFIC MOVIE AND ADD IT TO A FORM WHICH WILL SAVE TO THE DATABASE vvvvv */}

                    <button className="bg-indigo-500 text-white hover:bg-indigo-600 active:bg-indigo-300 focus:ring-1 focus:ring-indigo-900 focus:outline-none p-2 border border-indigo-600 rounded mt-2">
                      {film.media_type === "movie" ? (
                        <span>Select Movie </span>
                      ) : (
                        <span>Select TV Show</span>
                      )}
                    </button>

                  {/* ^^^^^ SOMEHOW THIS BUTTON MUST SELECT THE SPECIFIC MOVIE AND ADD IT TO A FORM WHICH WILL SAVE TO THE DATABASE ^^^^^ */}

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