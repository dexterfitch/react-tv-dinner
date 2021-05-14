import React from 'react';
import { connect } from 'react-redux';
import { saveTVDinnerApi  } from '../../actions/actionCreators/tvdinner.js';
import { withRouter } from 'react-router-dom';

class TVDinnerForm extends React.Component {
  state = {
    tvdinner: {
      name: "",
      description: ""
    }
  }

  handleChange = e => {
    this.setState({
      ...this.state,
      tvdinner: {
        ...this.state.tvdinner,
        [e.target.name]: e.target.value
      }
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    const tvdinner = {...this.state.tvdinner};
    const { film_id, user_id, recipe_ids } = this.props;
    tvdinner.film_id = film_id;
    tvdinner.user_id = user_id;
    tvdinner.recipe_ids = recipe_ids;
    this.props.saveTVDinnerApi(tvdinner);
    this.props.history.push('/');
    window.location.reload();
  }

  render() {
    return (
      <form 
        onSubmit={this.handleSubmit}
        className="mt-5"
      >
        <label>Name:</label>
        <input 
          name="name" 
          type="text" 
          value={this.state.tvdinner.name} 
          onChange={this.handleChange}
          className="p-3 placeholder-indigo-500 text-indigo-800 relative bg-white rounded border border-indigo-400 focus:outline-none focus:ring-1 focus:ring-indigo-300 focus:outline-none w-full"
        />
        <br/><br/>
        <label>Description:</label>
        <br/>
        <textarea 
          name="description" 
          type="textarea" 
          value={this.state.tvdinner.description} 
          onChange={this.handleChange}
          className="p-3 placeholder-indigo-500 text-indigo-800 relative bg-white rounded border border-indigo-400 focus:outline-none focus:ring-1 focus:ring-indigo-300 focus:outline-none w-full"
        />
        <br/><br/>
        <button 
          type="submit"
          className="bg-indigo-500 text-white hover:bg-indigo-600 active:bg-indigo-300 focus:outline-none py-3 border border-indigo-600 rounded w-full"
        >
          Save
        </button>
    </form>
    )
  }
}
const mapStateToProps = state => ({ recipe_ids: state.selectedRecipes, film_id: state.selectedFilm, user_id: state.auth.currentUser.id });

export default withRouter(connect(mapStateToProps, { saveTVDinnerApi })(TVDinnerForm));