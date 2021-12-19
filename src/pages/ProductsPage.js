import React, { useEffect } from 'react'
import './ProductsPage.css'
import { Filters, ProductList, Sort } from '../components'
import { fetchProductsData } from '../store/product-actions'
import { useDispatch } from 'react-redux'

const ProductsPage = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProductsData())
  }, [dispatch])

  return (
    <main>
      <div className="products-page">
        <div className="section-center product">
          <Filters />
          <div className="product-list">
            <Sort onShow={true} />
            <ProductList />
          </div>
        </div>
      </div>
    </main>
  )
}

export default ProductsPage
