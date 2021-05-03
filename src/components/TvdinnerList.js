import React, { Component } from 'react'

class TvdinnerList extends Component {

  state = {
    tvdinners: []
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/tvdinners')
      .then(tvdinners => tvdinners.json())
      .then(json => {
        this.setState({
          tvdinners: json
        })
      })
  }

  renderTvdinners = () => {
    return this.state.tvdinners.map(tvdinner => {
      return (
        <div key={tvdinner.id}>
          <p><b>Name:</b> {tvdinner.name}</p>
          <p><b>Description:</b> {tvdinner.description}</p>
          <p><b>Film ID:</b> {tvdinner.film_id}</p>
          <p><b>Recipe IDs:</b> {tvdinner.recipe_ids}</p>
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

export default TvdinnerList