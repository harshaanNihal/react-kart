import React, { Component, Fragment } from 'react';
import { ProductInfo } from '../../components/Product'
import SortProduct from '../Product/SortProduct';


export default class Products extends Component {
  constructor(props) {
    super(props)

    this.state = {
      sortBy: null
    }
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
    const { sortBy } = this.state
    const { data, manageCart } = this.props
    let filterProducts;
    filterProducts = this.sortProducts(data, sortBy)
    return (
      <section>
        <div className='sort-container'>
        <SortProduct sort={this.getSortBy} />
        </div>
        <p>{filterProducts.length} Product(s) found.</p>
        <div className='product-wrapper'>
          {filterProducts && filterProducts.map((product) => <ProductInfo key={product.id} info={product} addToCart={manageCart}/> )}
        </div>
      </section>
      )
  }
}