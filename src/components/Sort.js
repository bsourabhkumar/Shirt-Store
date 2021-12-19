import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { filterActions } from '../store/filter-slice'
import './Sort.css'

const Sort = (props) => {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.filter.filteredProducts)
  const sort = useSelector((state) => state.filter.sort)

  const updateSort = (e) => {
    const value = e.target.value
    dispatch(filterActions.updateSort(value))
    dispatch(filterActions.sortProducts())
  }
  return (
    <section className="wrapper">
      <div className="wrapper-sort">
        <div>{props.onShow && <p>{products.length} products found</p>}</div>
        <div className="form-sort">
          <form>
            <label htmlFor="sort">Sort by</label>
            <select
              name="sort"
              id="sort"
              className="sort-input"
              value={sort}
              onChange={updateSort}
            >
              <option value="recommended">Recommended</option>
              <option value="price-lowest">Price: Lowest to Highest</option>
              <option value="price-highest">Price: Highest to Lowest</option>
              <option value="brand-a">Brand: a to z</option>
              <option value="brand-z">Brand: z to a</option>
              <option value="better-discount">Better Discount</option>
              <option value="customer-rating">Customer Rating</option>
            </select>
          </form>
        </div>
      </div>
      <hr />
    </section>
  )
}

export default Sort
