import React, { Component, Fragment } from 'react'





function CartProduct(props) {
  console.log(props)
  if (props) {
    const { prod, delProd } = props;
    return (
      <div className='cart-product slideInRight'>
        <section>
          <img className='cart-img' src={require(`../../static/products/${prod.data.sku}_1.jpg`)} alt='Image not found'></img>
        </section>
        <section>
          <p>{prod.data.title}</p>
          <p>{prod.data.style}</p>
          <p>{`Quantity: ${prod.quantity}`}</p>
        </section>
        <section>
          <button onClick={() => delProd(prod.data)}>remove</button>
          <p>$ {prod.data.price}</p>
        </section>
      </div>
    )
  }
}

export default class Cart extends Component {

  getPrice = (products) => {
    return products.reduce((acc, obj) => {
      acc = acc + obj.data.price;
      return acc
    }, 0)
  }

  checkOut = (totalPrice) => {
    alert(`Checkout - Subtotal $ ${totalPrice}`)
  }


  render() {
    const { product, removeProduct, showKart } = this.props;
    const totalPrice = this.getPrice(product)
    return (
      <div className='cart'>
        <button className='cart-close'onClick={showKart}>Close</button>
        <section>
          <p>Cart</p>
          {product.length === 0 ? <p>Add some products in your cart :)</p> : product.map((val, index) => <CartProduct delProd={removeProduct} prod={val} key={index} />)}
          <div className='checkout'>
            <p>{`Total Amount: $ ${totalPrice}`}</p>
            <button onClick={() => this.checkOut(totalPrice)}>Check Out</button>
          </div>
        </section>

      </div>
    )

  }

}


