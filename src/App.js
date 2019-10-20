import React from 'react';
import logo from './logo.svg';
import './App.css';
import Products from './containers/Product'
import Sizes from './containers/Sizes';
import { isNumericLiteral } from '@babel/types';



class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      products: null,
      displaySizes: [],
    }
  }

  componentDidMount() {
    fetch('https://gist.githubusercontent.com/SiddharthShringi/00b55e2aed2dc0512621bfb42c609659/raw/0590c7f044ad3264d9586251e2a5da03659f835f/shoppingKartData.json')
      .then(res => res.json())
      .then(data => this.setState({
        products: data.products
      }))
  }

  manageSizeDisplay = (e) => {
    const { displaySizes } = this.state;
    if (displaySizes.includes(e.target.name)) {
      displaySizes.splice(displaySizes.indexOf(e.target.name), 1)
      this.setState({
        displaySizes
      })
    } else {
      displaySizes.push(e.target.name)
      this.setState({
        displaySizes
      })
    }
  }



  render() {
    const { products } = this.state;
    if (products) {
      return(
        <React.Fragment>
          <Products data={products}/>
          <Sizes data={products} sizeDisplay={this.manageSizeDisplay}/>
        </React.Fragment>
      )
    }
    return(
      <div className="App">
        <p>Loading...</p>
      </div>
    )
  }
}

export default App;
