import React, { Component, Fragment } from 'react'





function CartProduct (props) {
  console.log(props)
  if (props){
    const { prod } = props;  
    return (
      <div className='cart-product'>
        <img src={require(`../../static/products/${prod.data.sku}_1.jpg`)} alt='Image not found'></img>
        <p>{prod.data.title}</p>
        <p>{prod.data.style}</p>
        <p>$ {prod.data.price}</p>
        <p>{`Quantity: ${prod.quantity}`}</p>
      </div>
    )}
}

export default function Cart (props) {

  const { product } = props;
  return (
    <div className='cart'>
      <p>Cart</p>
      {product.length === 0 ? <p>No Products in your cart!</p> : product.map((val, index)=> <CartProduct prod={val} key={index}/> )}
    </div>
  )
}


