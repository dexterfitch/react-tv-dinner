import React from 'react';
import { connect } from 'react-redux';
import { addFilmID, searchFilmApi } from '../../actions/actionCreators/film.js'
import { ArrowRightIcon } from '@heroicons/react/solid';

export class FilmSearch extends React.Component {
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
  }

  handleSearch = () => {
    const searchString = this.state.searchString;
    if (searchString === "") {
      return null;
    } else {
      this.props.searchFilmApi(searchString);
    }
  };

  handleSelection = e => {
    this.props.addFilmID(e.target.id);
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
              onChange={this.handleChange} 
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
        {this.props.searchedFilms.length ? (
          <div className="films-container mt-4 max-h-96">
            {this.props.searchedFilms.map((film, index) => (
              <div className="film" key={index}>
                <div className="grid grid-cols-6 gap-2">
                  <div className="col-span-2">
                    {film.poster_path === null || film.poster_path === undefined ? (
                      <img className="border border-indigo-900 rounded" src="https://via.placeholder.com/300x460?text=X" alt="film-thumbnail" />
                    ) : (
                      <img className="border border-indigo-900 rounded" src={`https://image.tmdb.org/t/p/w300${film.poster_path}`} alt="film-thumbnail" />
                    )}
                  </div>
                  <div className="col-span-4">
                    {film.original_title === undefined ? (
                      <h2>{film.name}</h2>
                    ) : (
                      <h2>{film.original_title}</h2>
                    )}
                    <hr className="border-solid border-3 border-indigo-300 my-1" />
                    {film.overview === "" ? (
                      <p>No synopsis available</p>
                    ) : (
                      <p>{film.overview.substring(0,400)}</p>
                    )}
                    <button  
                      id={film.id}
                      onClick={this.handleSelection}
                      className="bg-indigo-500 text-white hover:bg-indigo-600 active:bg-indigo-300 focus:ring-1 focus:ring-indigo-900 focus:outline-none p-2 border border-indigo-600 rounded mt-5"
                    >
                      {film.media_type === "movie" ? (
                        <span>Select Movie </span>
                      ) : (
                        <span>Select TV Show</span>
                      )}
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

const mapStateToProps = state => ({ searchedFilms: state.searchedFilms, filmID: state.filmID });

export default connect(mapStateToProps, { addFilmID, searchFilmApi })(FilmSearch);