import React from 'react'
import './ProductsPage.css'
import { Filters, Sort } from '../components'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import GridView from '../components/GridView'

const SearchResultPage = () => {
  const products = useSelector((state) => state.filter.unfilteredProducts)
  const query = new URLSearchParams(useLocation().search)
  const searchTerm = query.get('searchTerm')

  const filteredData = products.filter(
    ({ name, category, brand }) =>
      name.toLowerCase().match(searchTerm.toLowerCase()) ||
      category.toLowerCase().match(searchTerm.toLowerCase()) ||
      brand.toLowerCase().match(searchTerm.toLowerCase()),
  )

  const numberOfItems = filteredData.length

  return (
    <main>
      <div className="products-page">
        <div className="section-center product">
          <Filters />
          <div className="product-list">
            <Sort />
            {numberOfItems !== 0 ? (
              <div>
                <h3>Search Results for "{searchTerm}"</h3>
                <GridView products={filteredData} />
              </div>
            ) : (
              <div>
                <h3>Oh! No search results for "{searchTerm}"</h3>
                <p>Check out other products</p>
                <Link to="/" className="btn">
                  Go to Shop
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}

export default SearchResultPage
