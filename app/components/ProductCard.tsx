import React from 'react'
import AddToCart from './AddToCart'

const ProductCard = async() => {
    interface Product {
        title:string;
        author:string;
        publishedYear:Number;
    }
    const res = await fetch('http://localhost:3000/books');
    const product: Product[] = await res.json();
  
  return (
    <div>{product.map(product =>  <div className="card">
    <div className="card-body">
      <h5 className="card-title">{product.title}</h5>
      <p className="card-text">{product.author}</p>
      <p className="card-text">{product.publishedYear.toString()}</p>
    </div>
  </div> )}
 

    </div>
  )
}

export default ProductCard