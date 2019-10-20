import React, { Component, Fragment } from 'react';
import { ProductInfo } from '../../components/Product'


export default class Products extends Component {
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
    const { products } = this.state
    if (products) {
      console.log(products)
      return (
        <div className='col s10 products'>
          {products && products.map((product) => <ProductInfo key={product.id} info={product}/> )}
        </div>
      )
    }
    return (
      <div className='products'>
        Loading ...
      </div>
    )
  }
}