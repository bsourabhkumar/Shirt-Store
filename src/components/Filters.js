import React, { Fragment } from 'react'
import { getUniqueValues } from '../utils/helpers'
import './Filters.css'
import { useDispatch, useSelector } from 'react-redux'
import { filterActions } from '../store/filter-slice'

const Filters = () => {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.filter.unfilteredProducts)

  const brand = useSelector((state) => state.filter.filters.brand)
  const price = useSelector((state) => state.filter.filters.price)
  const color = useSelector((state) => state.filter.filters.color)
  const discount = useSelector((state) => state.filter.filters.discount)
  const category = useSelector((state) => state.filter.filters.category)

  // get unique values of filters
  const categories = getUniqueValues(products, 'category')
  const brands = getUniqueValues(products, 'brand')
  const colors = getUniqueValues(products, 'color')

  const discounts = [
    '10% and above',
    '20% and above',
    '30% and above',
    '40% and above',
    '50% and above',
    '60% and above',
  ]
  const clearFilters = () => {
    dispatch(filterActions.removeFilter())
  }

  const updateFilters = (e) => {
    let name = e.target.name
    let value = e.target.id

    dispatch(filterActions.updateFilter({ name, value }))
    dispatch(filterActions.filterProducts())
  }
  return (
    <Fragment>
      <div className="content">
        <div className="filters-section">
          <h5>FILTERS</h5>
          <button type="button" className="clear-btn" onClick={clearFilters}>
            Clear Filters
          </button>
        </div>
        <hr />
        <form onSubmit={(e) => e.preventDefault()}>
          {/* category start */}
          <div className="form-control">
            <label>
              <strong>Category</strong>
            </label>
            {categories.map((c, index) => {
              return (
                <div key={index}>
                  <input
                    type="checkbox"
                    name="category"
                    id={c}
                    checked={c === category}
                    onChange={updateFilters}
                  />
                  <label htmlFor="category">{c}</label>
                </div>
              )
            })}
          </div>
          {/* category end */}
          <hr />
          {/* brand start */}
          <div className="form-control">
            <label>
              <strong>Brands</strong>
            </label>
            {brands.map((c, index) => {
              return (
                <div key={index}>
                  <input
                    type="checkbox"
                    name="brand"
                    id={c}
                    checked={c === brand}
                    onChange={updateFilters}
                  />
                  <label htmlFor="brand">{c}</label>
                </div>
              )
            })}
          </div>
          {/* brand end */}
          <hr />
          {/* Price starts */}
          <div className="form-control shipping">
            <label htmlFor="price">
              <strong>Price</strong>
            </label>
            <br />
            <div>
              <input
                type="checkbox"
                name="price"
                id="300 to 600"
                checked={price === '300 to 600'}
                onChange={updateFilters}
              />
              <label htmlFor="300 to 600">₹300 to ₹600</label>
            </div>
            <br />
            <div>
              <input
                type="checkbox"
                name="price"
                id="600 to 900"
                checked={price === '600 to 900'}
                onChange={updateFilters}
              />
              <label htmlFor="600 to 900">₹600 to ₹900</label>
            </div>
            <br />
            <div>
              <input
                type="checkbox"
                name="price"
                id="900 to 1200"
                checked={price === '900 to 1200'}
                onChange={updateFilters}
              />
              <label htmlFor="900 to 1200">₹900 to ₹1200</label>
            </div>
            <br />
            <div>
              <input
                type="checkbox"
                name="price"
                id="1200 to 1500"
                checked={price === '1200 to 1500'}
                onChange={updateFilters}
              />
              <label htmlFor="1200 to 1500">₹1200 to ₹1500</label>
            </div>
            <br />
            <div>
              <input
                type="checkbox"
                name="price"
                id="1500 to 1800"
                checked={price === '1500 to 1800'}
                onChange={updateFilters}
              />
              <label htmlFor="1500 to 1800">₹1500 to ₹1800</label>
            </div>
            <br />
            <div>
              <input
                type="checkbox"
                name="price"
                id="1800 to 2100"
                checked={price === '1800 to 2100'}
                onChange={updateFilters}
              />
              <label htmlFor="1800 to 2100">₹1800 to ₹2100</label>
            </div>
            <br />
            <div>
              <input
                type="checkbox"
                name="price"
                id="2100 and above"
                checked={price === '2100 and above'}
                onChange={updateFilters}
              />
              <label htmlFor="2100 and above">₹2100 and above</label>
            </div>
          </div>
          {/* Price end */}
          <hr />
          {/* Color starts */}
          <div className="form-control shipping">
            <label htmlFor="color">
              <strong>Color</strong>
            </label>
            <br />
            <div>
              {colors.map((c, index) => {
                return (
                  <div>
                    <input
                      key={index}
                      type="checkbox"
                      name="color"
                      id={c}
                      checked={c === color}
                      onChange={updateFilters}
                    />
                    <label htmlFor="color">{c}</label>
                  </div>
                )
              })}
            </div>
          </div>
          {/* Color ends */}
          <hr />
          {/* discounts starts */}
          <div className="form-control shipping">
            <label htmlFor="discount">
              <strong>Discount</strong>
            </label>
            <br />
            <div>
              {discounts.map((d, index) => {
                return (
                  <div>
                    <input
                      key={index}
                      type="checkbox"
                      name="discount"
                      id={d}
                      checked={d === discount}
                      onChange={updateFilters}
                    />
                    <label htmlFor="discount">{d}</label>
                  </div>
                )
              })}
            </div>
          </div>
          {/* discounts end */}
        </form>
      </div>
    </Fragment>
  )
}

export default Filters
