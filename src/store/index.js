import { configureStore } from '@reduxjs/toolkit'
import filterReducer from './filter-slice'
import cartReducer from './cart-slice'
import wishlistReducer from './wish-slice'

const store = configureStore({
  reducer: {
    cart: cartReducer,
    filter: filterReducer,
    wishlist: wishlistReducer,
  },
})

export default store
