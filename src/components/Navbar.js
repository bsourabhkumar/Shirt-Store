import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { useSelector } from 'react-redux'
import { BsSearch } from 'react-icons/bs'
import { BsHeart } from 'react-icons/bs'
import { BsBag } from 'react-icons/bs'

const Navbar = (props) => {
  const [searchText, setSearchText] = useState('')
  const products = useSelector((state) => state.filter.unfilteredProducts)
  const [searchResults, setSearchResults] = useState([])
  const cartTotalQuantity = useSelector((state) => state.cart.totalQuantity)
  const wishListTotalQuantity = useSelector(
    (state) => state.wishlist.totalQuantity,
  )

  const searchTextHandler = (e) => {
    setSearchText(e.target.value)
    setSearchResults([])
    products.forEach(({ name, category, brand }) => {
      if (name.toLowerCase().startsWith(searchText.toLowerCase())) {
        setSearchResults((prevArray) => [...prevArray, name])
      }
      if (brand.toLowerCase().startsWith(searchText.toLowerCase())) {
        setSearchResults((prevArray) => [...prevArray, brand])
      }
    })
  }

  return (
    <>
      <div className="nav-container">
        <div className="wrapper">
          <div className="left">
            <span className="language">
              <Link to="/">
                <h3>Shirt Store</h3>
              </Link>
            </span>
          </div>
          <div className="center Center">
            <Link to={'/search?searchTerm=' + searchText}>
              <BsSearch
                className="search-icon"
                onClick={() => setSearchText('')}
              />
            </Link>
            <input
              type="text"
              value={searchText}
              onChange={searchTextHandler}
            />
          </div>
          <div className="right Right">
            <div className="icon" onClick={props.onShowCart}>
              <BsBag className="love-icon" />
              <p>
                Bag <span>({cartTotalQuantity})</span>
              </p>
            </div>
            <div className="icon" onClick={props.onShowWishList}>
              <BsHeart className="love-icon" />
              <p>
                Wishlist <span>({wishListTotalQuantity})</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      {searchText && searchResults.length > 0 && (
        <div className="search-dropdown">
          <ul>
            {searchText &&
              [...new Set(searchResults)].map((result, index) => {
                return (
                  <li
                    key={index}
                    className="search-term"
                    onClick={() => setSearchText('')}
                  >
                    <Link to={'/search?searchTerm=' + result}>{result}</Link>
                  </li>
                )
              })}
          </ul>
        </div>
      )}
    </>
  )
}

export default Navbar
