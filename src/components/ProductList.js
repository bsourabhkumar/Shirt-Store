import React from 'react'
import { useSelector } from 'react-redux'
import GridView from './GridView'

const ProductList = () => {
  const products = useSelector((state) => state.filter.filteredProducts)

  if (products.length < 1) {
    return (
      <h5 style={{ textTransform: 'none' }}>
        Sorry, no products matched your search...
      </h5>
    )
  }

  return <GridView products={products} />
}

export default ProductList
