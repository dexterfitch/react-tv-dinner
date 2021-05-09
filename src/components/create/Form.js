import React from 'react';
import { connect } from 'react-redux';
import { saveTVDinnerApi  } from '../../actions/actionCreators/tvdinner.js';
import { withRouter } from 'react-router-dom';

class TVDinnerForm extends React.Component {
  state = {
    tvdinner: {
      name: "",
      description: "",
      /* film_id: this.props.film_id,
      recipe_ids: this.props.recipe_ids,
      user_id: this.props.user_id */
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
    this.props.saveTVDinnerApi(tvdinner)
    this.props.history.push('/')
  }

  render() {

    console.log("this.props: ", this.props);
    

    return (
      <form onSubmit={this.handleSubmit}>
        <label>Name:</label>
        <input name="name" type="text" value={this.state.tvdinner.name} onChange={this.handleChange}/>
        <br/><br/>
        <label>Description:</label>
        <br/>
        <textarea name="description" type="textarea" value={this.state.tvdinner.description} onChange={this.handleChange}/>
        <br/><br/>
        <button type="submit">Save</button>
    </form>
    )
  }
}
const mapStateToProps = state => ({ recipe_ids: state.selectedRecipes, film_id: state.selectedFilm, user_id: state.auth.currentUser.id });

export default withRouter(connect(mapStateToProps, { saveTVDinnerApi })(TVDinnerForm));