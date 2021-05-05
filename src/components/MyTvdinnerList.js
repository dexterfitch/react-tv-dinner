import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getMyTVDinnersApi } from '../actions/actionCreators/tvdinner.js'

class MyTvdinnerList extends Component {
  constructor(props){
    super(props)
    console.log(props,'this is my props')
  }

  state = {
    mytvdinners: []
  }


  componentDidMount(){
    debugger
    this.props.dispatchGetMyTVDinnersApi()
  }


  renderMyTvdinners = () => {
    debugger
    return this.props.mytvdinners.map(tvdinner => {
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
        <h1 className="text-indigo-900 mb-4">My TV Dinners</h1>
        {this.renderMyTvdinners()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  debugger
  return { mytvdinners: state.tvdinner.mytvdinners }
}

const mapDispatchToProps = (dispatch) => {
  debugger
  return {
    dispatchGetMyTVDinnersApi: () => dispatch(getMyTVDinnersApi())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyTvdinnerList);