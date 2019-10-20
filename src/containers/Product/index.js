import React, { Component, Fragment } from 'react';
import { ProductInfo } from '../../components/Product'
import SortProduct from '../Product/SortProduct';


export default class Products extends Component {
  constructor(props) {
    super(props)

    this.state = {
      products: null,
      sortBy: null
    }
  }

  componentDidMount() {
    fetch('https://gist.githubusercontent.com/SiddharthShringi/00b55e2aed2dc0512621bfb42c609659/raw/0590c7f044ad3264d9586251e2a5da03659f835f/shoppingKartData.json')
      .then(res => res.json())
      .then(data => this.setState({
        products: data.products
      }))
  }

  sortProducts = (products, sortOrder) => {
    if (sortOrder === 'lowestPrice') {
      return [...products].sort((a,b) => a.price - b.price)
    }
    if (sortOrder === 'highestPrice') {
      return [...products].sort((a,b) => b.price - a.price)
    }
    return products
  }

  getSortBy = (value) => {
    this.setState({
      sortBy: value
    })
  }

  render() {
    const { products, sortBy } = this.state
    if (products) {
      let filterProducts;
      filterProducts = this.sortProducts(products, sortBy)
      return (
        <Fragment>
          <div className='col s9 products'>
           {filterProducts && filterProducts.map((product) => <ProductInfo key={product.id} info={product}/> )}
          </div>
          <SortProduct sort={this.getSortBy} />
        </Fragment>
      )
    }
    return (
      <div className='products'>
        Loading ...
      </div>
    )
  }
}