import React from 'react';

import'../Components/Product.css';





const Product = (props) => {
  return (
    <div className="product"> 

     <img className='product__Imagenes' src={props.imagenes} alt=  "product"/>
     <h2 className='product__name'>{props.name}</h2>
     <div className='product__city'>
      <h1 className='product__city'>{props.city}</h1>
          
   </div>
   </div>
  )
}

export  {Product}