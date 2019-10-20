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

  filterProductBySize = (products, displayArr) => {
    if (displayArr.length === 0) {
      return products
    } else {
      let filterArr = [];
      for (let obj of products) {
        for (let size of obj['availableSizes']) {
          if (displayArr.includes(size)) {
            if (!filterArr.includes(obj)) {
              filterArr.push(obj)
            }
          }
        }
      }
      return filterArr;
    } 
  }



  render() {
    const { products, displaySizes } = this.state;
    if (products) {
      let filterProducts = this.filterProductBySize(products, displaySizes)
      return(
        <React.Fragment>
          <Products data={filterProducts}/ >
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
