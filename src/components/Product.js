import React from 'react'
import { VscStarEmpty } from 'react-icons/vsc'
import './Product.css'
import { Link } from 'react-router-dom'

const Product = ({ images, brand, rating, name, price, discount, id }) => {
  return (
    <Link to={`/${id}`} className="link">
      <article>
        <div className="container">
          <img src={images[0]} alt={name} />
          {/* <Link to={`/products/${id}`} className="link"> */}
          {/* </Link> */}
        </div>
        <footer className="footer">
          <p>
            {rating} <VscStarEmpty />
          </p>
          <h5>{brand}</h5>
          <h5>{name}</h5>
          <p>
            ₹{price} ({discount} % off)
          </p>
        </footer>
      </article>
    </Link>
  )
}

export default Product
