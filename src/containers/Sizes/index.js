import React, { Component, Fragment } from 'react'


function Size(props) {
  const { size, sizeDisplayFunc } = props
  return (
    <div>
      <button name={size} onClick={sizeDisplayFunc}>{size}</button>
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
    const { data, sizeDisplay } = this.props;
    let uniqueSizeArr = this.uniqueSizes(this.getSizes(data)) 

    return(
      <div className='sizes'> 
      <p>Sizes:</p>
        {uniqueSizeArr.map((size, i)=> <Size key={i} size={size} sizeDisplayFunc={sizeDisplay} /> )}
      </div>
    )
  }
}