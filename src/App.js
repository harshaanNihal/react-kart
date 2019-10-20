import React from 'react';
import logo from './logo.svg';
import './App.css';
import Products from './containers/Product'



class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      products: null
    }
  }

  componentDidMount() {
    fetch('https://gist.githubusercontent.com/SiddharthShringi/00b55e2aed2dc0512621bfb42c609659/raw/0590c7f044ad3264d9586251e2a5da03659f835f/shoppingKartData.json')
      .then(res => res.json())
      .then(data => this.setState({
        products: data.products
      }))
  }

  render() {
    const { products } = this.state;
    if (products) {
      return(
        <Products data={products}/>
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
