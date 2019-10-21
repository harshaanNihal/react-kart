import React, { Component, Fragment } from 'react'





function CartProduct (props) {
  console.log(props)
  if (props){
    const { prod, delProd } = props;  
    return (
      <div className='cart-product'>
        <img src={require(`../../static/products/${prod.data.sku}_1.jpg`)} alt='Image not found'></img>
        <p>{prod.data.title}</p>
        <p>{prod.data.style}</p>
        <p>$ {prod.data.price}</p>
        <p>{`Quantity: ${prod.quantity}`}</p>
        <button onClick={()=> delProd(prod.data)}>remove</button>
      </div>
    )}
}

export default class Cart extends Component {

  getPrice = (products) => {
    return products.reduce((acc, obj)=> {
      acc = acc + obj.data.price;
      return acc
    } , 0)
  }
  
  checkOut = (totalPrice) => {
    alert(`Checkout - Subtotal $ ${totalPrice}`)
  }


  render() {
    const { product, removeProduct } = this.props;
    const totalPrice = this.getPrice(product)
    return (
      <div className='cart'>
        <p>Cart</p>
        {product.length === 0 ? <p>Add some products in your cart :)</p> : product.map((val, index)=> <CartProduct delProd={removeProduct} prod={val} key={index}/> )}
        <div className='checkout'>
          <p>{`Total Amount: $ ${totalPrice}`}</p>
          <button onClick={()=>this.checkOut(totalPrice)}>Check Out</button>
        </div>
      </div>
    )

  }

}


