import React from 'react'
import Product from './Product'
import './GridView.css'

const GridView = ({ products }) => {
  return (
    <section>
      <div className="products-container">
        {products.map((product) => {
          return <Product key={product.id} {...product} />
        })}
      </div>
    </section>
  )
}

export default GridView
