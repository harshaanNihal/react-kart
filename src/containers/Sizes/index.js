import React, { Component, Fragment } from 'react'


function Size(props) {
  const { size, displayBlack, sizeDisplayFunc } = props
  if (displayBlack.includes(size)) {
    var color = 'black-button'
  }
  return (
    <div>
      <button className={color} name={size} onClick={sizeDisplayFunc}>{size}</button>
    </div>
  )
}


export default class Sizes extends Component {

  getSizes = (products) => {
    let sizeArr = []
    for (let obj of products) {
      for (let size of obj['availableSizes']) { 
        sizeArr.push(size) 
      } 
    }
    return sizeArr
  }

  uniqueSizes = (sizeArr) => {
    return sizeArr.reduce((acc, v, i) =>{
      if (sizeArr.indexOf(v) === i){
        acc.push(v)
      }
      return acc
    } , [])
  }  

  render() {
    const { data, displayArr, sizeDisplay } = this.props;
    let uniqueSizeArr = this.uniqueSizes(this.getSizes(data)) 

    return(
      <div className='sizes'> 
      <p>Sizes:</p>
      <section className='size-wrapper'>

        {uniqueSizeArr.map((size, i)=> <Size key={i} displayBlack={displayArr} size={size} sizeDisplayFunc={sizeDisplay} /> )}
      </section>
      </div>
    )
  }
}