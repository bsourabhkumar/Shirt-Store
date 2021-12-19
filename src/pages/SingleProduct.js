import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import ProductImages from '../components/ProductImages'
import './SingleProduct.css'
import { fetchProductsData } from '../store/product-actions'
import { VscStarEmpty } from 'react-icons/vsc'
import { cartActions } from '../store/cart-slice'
import { wishListActions } from '../store/wish-slice'

const SingleProduct = () => {
  const { id: URLId } = useParams()
  const dispatch = useDispatch()
  const products = useSelector((state) => state.filter.unfilteredProducts)

  const shirtData = products.filter((product, index) => index === URLId - 1)
  const singleProductData = shirtData[0]

  useEffect(() => {
    dispatch(fetchProductsData())
  }, [dispatch])
  const [size, setSize] = useState('')

  const sizeHandler = (e) => {
    setSize(e.target.textContent)
  }
  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        ...singleProductData,
        size: size,
        image: singleProductData.images[0],
      }),
    )
  }
  const addToWishListHandler = () => {
    dispatch(wishListActions.addItemToWishList(singleProductData))
  }

  return (
    <main className="wrapper">
      <div className="section section-center page">
        <Link to="/" className="btn">
          back to products
        </Link>
        <div className="product-center">
          <ProductImages images={singleProductData.images} />
          <section className="content">
            <h2>{singleProductData.brand}</h2>
            <h2 className="name">{singleProductData.name}</h2>
            <div className="rating">
              <h4>{singleProductData.rating}</h4>
              <VscStarEmpty className="star-icon" />
            </div>

            <h5 className="price">
              ₹{singleProductData.price} ({singleProductData.discount} % OFF)
            </h5>
            <p className="desc">{singleProductData.description}</p>
            <span>Sizes : </span>
            <p className="sizes">
              {singleProductData.sizes.map((size, index) => {
                return (
                  <button
                    className="size-button"
                    key={index}
                    onClick={sizeHandler}
                  >
                    {size}
                  </button>
                )
              })}
            </p>

            <hr />
            <div className="operations">
              <button className="btn" onClick={addToCartHandler}>
                Add To Bag
              </button>
              <button className="btn" onClick={addToWishListHandler}>
                Add To WishList
              </button>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}

export default SingleProduct
