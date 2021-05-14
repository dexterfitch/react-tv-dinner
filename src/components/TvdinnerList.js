import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTVDinnersApi } from '../actions/actionCreators/tvdinner.js'

class TvdinnerList extends Component {
  state = {
    tvdinners: []
  }

  componentDidMount() {
    this.props.dispatchGetTVDinnersApi()
  }

  renderTvdinners = () => {
    return this.props.tvdinners.map(tvdinner => {
      return (
        <div key={tvdinner.id}>
          <p><b>Name:</b> {tvdinner.name}</p>
          <p><b>Description:</b> {tvdinner.description}</p>
          <p><b>Film ID:</b> {tvdinner.film_id}</p>
          <p><b>Recipe IDs:</b></p>
          <ul>
            {tvdinner.recipe_ids.map((recipe, key) => {
              return <li className="pl-6" key={key}>- {recipe}</li>
            })}
          </ul>
          <hr className="border-solid border-4 border-indigo-700 my-4" />
        </div>
      )
    })
  }

  render() {
    return (
      <div className="container mx-auto">
        <h1 className="text-indigo-900 mb-4">All TV Dinners</h1>
        {this.renderTvdinners()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { tvdinners: state.tvdinner.tvdinners }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchGetTVDinnersApi: () => dispatch(getTVDinnersApi())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TvdinnerList);