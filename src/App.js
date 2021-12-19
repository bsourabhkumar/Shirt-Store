import React, { useEffect, useState } from 'react'
import './App.css'
import ProductsPage from './pages/ProductsPage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SingleProduct from './pages/SingleProduct'
import Navbar from './components/Navbar'
import Cart from './components/Cart/Cart'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCartData } from './store/cart-actions'
import { fetchWishListData } from './store/wish-actions'
import WishList from './components/WishList/WishList'
import SearchResultPage from './pages/SearchResultPage'

function App() {
  // useEffect(() => {
  //   const sendProductData = async () => {
  //     const response = await fetch(
  //       'https://instachat-e6d5b-default-rtdb.firebaseio.com/shirtProducts.json',
  //       {
  //         method: 'POST',
  //         body: JSON.stringify({
  //           items: shirtsData,
  //         }),
  //       },
  //     )
  //     if (!response.ok) {
  //       throw new Error('Sending cart data failed !')
  //     }
  //   }

  //   sendProductData().catch((err) => {
  //     console.log('Error')
  //   })
  // }, [])

  const cartProducts = useSelector((state) => state.cart.items)
  const totalQuantity = useSelector((state) => state.cart.totalQuantity)
  const changedCart = useSelector((state) => state.cart.changed)
  const dispatch = useDispatch()

  const wishListProducts = useSelector((state) => state.wishlist.items)
  const totalWishList = useSelector((state) => state.wishlist.totalQuantity)
  const changedWishList = useSelector((state) => state.wishlist.changed)

  useEffect(() => {
    dispatch(fetchCartData())
  }, [dispatch])

  useEffect(() => {
    dispatch(fetchWishListData())
  }, [dispatch])

  useEffect(() => {
    const sendCartData = async () => {
      console.log('Inside sendCartData function')
      const response = await fetch(
        'https://instachat-e6d5b-default-rtdb.firebaseio.com/shirtbag.json',
        {
          method: 'PUT',
          body: JSON.stringify({
            items: cartProducts,
            totalQuantity: totalQuantity,
          }),
        },
      )
      if (!response.ok) {
        throw new Error('Sending cart data failed !')
      }
    }

    if (cartProducts.length > 0) {
      sendCartData().catch((error) => {
        console.log('Sending Cart Data failed')
      })
    }
  }, [changedCart, cartProducts, totalQuantity])

  useEffect(() => {
    const sendWishListData = async () => {
      console.log('Inside sendWishListData function')
      const response = await fetch(
        'https://instachat-e6d5b-default-rtdb.firebaseio.com/shirtwish.json',
        {
          method: 'PUT',
          body: JSON.stringify({
            items: wishListProducts,
            totalQuantity: totalWishList,
          }),
        },
      )
      if (!response.ok) {
        throw new Error('Sending wishlist data failed !')
      }
    }

    if (wishListProducts.length > 0) {
      sendWishListData().catch((error) => {
        console.log('Sending WishList Data failed')
      })
    }
  }, [changedWishList, wishListProducts, totalWishList])

  const [showCart, setShowCart] = useState(false)
  const [showWishList, setshowWishList] = useState(false)

  const showCartHandler = () => {
    setShowCart(true)
  }

  const hideCartHandler = () => {
    setShowCart(false)
  }

  const showWishListHandler = () => {
    setshowWishList(true)
  }

  const hideWishListHandler = () => {
    setshowWishList(false)
  }

  return (
    <div>
      <Router>
        {showCart && <Cart onClose={hideCartHandler} />}
        {showWishList && <WishList onClose={hideWishListHandler} />}
        <Navbar
          onShowCart={showCartHandler}
          onShowWishList={showWishListHandler}
        />
        <Switch>
          <Route exact path="/">
            <ProductsPage />
          </Route>
          <Route exact path="/search" children={<SearchResultPage />} />
          <Route exact path="/:id" children={<SingleProduct />} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
