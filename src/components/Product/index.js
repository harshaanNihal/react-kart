import React from 'react'

export function ProductInfo(props) {
  console.log(props.info)
  const { title, price, currencyFormat, isFreeShipping, sku } = props.info
  return (
    <div className='col s12 m6 l3'>
      <div className='card product-card'>
        <div className='card-image'>
        <img src = {require(`../../static/products/${sku}_1.jpg`)} alt='Image not found'></img>
        {isFreeShipping && <span className='card-title'>Free Shipping</span>}
        </div>
        <div className='card=content'>
          <h6>{title}</h6>
          <p>{`${currencyFormat} ${price}`}</p>
        </div>
        <button className='waves-effect waves-light btn-small'>
          Add to cart
        </button>
      </div>
    </div>

  )
} 