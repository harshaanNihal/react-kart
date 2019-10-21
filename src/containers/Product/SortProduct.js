import React, { Component, Fragment } from 'react';

export default class SortProduct extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value : ''
    }
  }

  changeOrder = (e) => {
    console.log(e.target.value)
    this.setState({
      value: e.target.value
    },()=>{
      this.props.sort(this.state.value)
    })

  }

  render() {
    return(
      <div className='col s3'>
        <p>orderBy</p>
        <div className="input-field">
          <select className="browser-default" onChange={this.changeOrder}>
            <option value="">Select</option>
            <option value="lowestPrice">Lowest to Highest</option>
            <option value="highestPrice">Highest to Lowest</option>
          </select>
        </div> 
      </div>
    )
  }
}