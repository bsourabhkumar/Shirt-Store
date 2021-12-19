import { createSlice } from '@reduxjs/toolkit'

const wishListSlice = createSlice({
  name: 'wishList',
  initialState: {
    items: [],
    totalQuantity: 0,
    changed: false,
  },
  reducers: {
    replaceWishList(state, action) {
      state.totalQuantity = action.payload.totalQuantity
      state.items = action.payload.items
    },
    addItemToWishList(state, action) {
      const newItem = action.payload
      const existingItem = state.items.find((item) => item.id === newItem.id)
      state.totalQuantity++
      state.changed = true
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          name: newItem.name,
          brand: newItem.brand,
          discount: newItem.discount,
        })
      }
    },
    removeItemFromWishList(state, action) {
      const id = action.payload
      const existingItem = state.items.find((item) => item.id === id)
      state.totalQuantity--
      state.changed = true
      if (existingItem) {
        state.items = state.items.filter((item) => item.id !== id)
      }
    },
  },
})

export const wishListActions = wishListSlice.actions
export default wishListSlice.reducer
