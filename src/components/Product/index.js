import React from 'react'

export function ProductInfo(props) {
  const { info, addToCart } = props;
  const { title, price, currencyFormat, isFreeShipping, sku } = props.info
  return (
    <div className='card'>
      <div className='product-card'>
        <div className='card-image'>
        <img src = {require(`../../static/products/${sku}_1.jpg`)} alt='Image not found'></img>
        {isFreeShipping && <span className='free-shipping'>Free Shipping</span>}
        </div>
        <div className='card=content'>
          <p>{title}</p>
          <p>{`${currencyFormat} ${price}`}</p>
        </div>
        <button 
        className='add-cart-button'
        onClick = {()=> addToCart(info)}
        >
          Add to cart
        </button>
      </div>
    </div>

  )
} 