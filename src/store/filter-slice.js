import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    unfilteredProducts: [],
    filteredProducts: [],
    maxPrice: 0,
    sort: '',
    filters: {
      category: '',
      brand: '',
      price: '',
      color: '',
      discount: '',
      all: true,
    },
  },
  reducers: {
    getProducts(state, action) {
      let maxPrice = action.payload.items.map((p) => p.price)
      maxPrice = Math.max(...maxPrice)
      state.filteredProducts = action.payload.items
      state.unfilteredProducts = action.payload.items
      state.maxPrice = maxPrice
    },
    updateSort(state, action) {
      state.sort = action.payload
      console.log(state.sort)
    },
    sortProducts(state, action) {
      if (state.sort === 'price-lowest') {
        state.filteredProducts = state.filteredProducts.sort((a, b) => {
          if (a.price < b.price) {
            return -1
          }
          if (a.price > b.price) {
            return 1
          }
          return 0
        })
      }
      if (state.sort === 'price-highest') {
        state.filteredProducts = state.filteredProducts.sort(
          (a, b) => b.price - a.price,
        )
      }
      if (state.sort === 'brand-a') {
        state.filteredProducts = state.filteredProducts.sort((a, b) => {
          return a.brand.localeCompare(b.brand)
        })
      }
      if (state.sort === 'brand-z') {
        state.filteredProducts = state.filteredProducts.sort((a, b) => {
          return b.brand.localeCompare(a.brand)
        })
      }
      if (state.sort === 'better-discount') {
        state.filteredProducts = state.filteredProducts.sort(
          (a, b) => b.discount - a.discount,
        )
      }
      if (state.sort === 'customer-rating') {
        state.filteredProducts = state.filteredProducts.sort(
          (a, b) => b.rating - a.rating,
        )
      }
      if (state.sort === 'recommended') {
        state.filteredProducts = state.filteredProducts.sort(
          (a, b) => a.id - b.id,
        )
      }
    },
    updateFilter(state, action) {
      const { name, value } = action.payload
      state.filters[name] = value
    },
    filterProducts(state, action) {
      const { category, brand, color, price, discount } = state.filters
      let tempProducts = [...state.unfilteredProducts]
      if (category) {
        tempProducts = tempProducts.filter(
          (product) => product.category === category,
        )
      }
      if (brand) {
        tempProducts = tempProducts.filter((product) => product.brand === brand)
      }
      if (color) {
        tempProducts = tempProducts.filter((product) => product.color === color)
      }
      if (price) {
        if (price === '300 to 600') {
          tempProducts = tempProducts.filter(
            (product) => product.price >= 300 && product.price < 600,
          )
        }
        if (price === '600 to 900') {
          tempProducts = tempProducts.filter(
            (product) => product.price >= 600 && product.price < 900,
          )
        }
        if (price === '900 to 1200') {
          tempProducts = tempProducts.filter(
            (product) => product.price >= 900 && product.price < 1200,
          )
        }
        if (price === '1200 to 1500') {
          tempProducts = tempProducts.filter(
            (product) => product.price >= 1200 && product.price < 1500,
          )
        }
        if (price === '1500 to 1800') {
          tempProducts = tempProducts.filter(
            (product) => product.price >= 1500 && product.price < 1800,
          )
        }
        if (price === '1800 to 2100') {
          tempProducts = tempProducts.filter(
            (product) => product.price >= 1800 && product.price < 2100,
          )
        }
        if (price === '2100 and above') {
          tempProducts = tempProducts.filter(
            (product) =>
              product.price >= 2100 && product.price < state.maxPrice,
          )
        }
      }
      if (discount) {
        if (discount === '10% and above') {
          tempProducts = tempProducts.filter(
            (product) => product.discount >= 10,
          )
        }
        if (discount === '20% and above') {
          tempProducts = tempProducts.filter(
            (product) => product.discount >= 20,
          )
        }
        if (discount === '30% and above') {
          tempProducts = tempProducts.filter(
            (product) => product.discount >= 30,
          )
        }
        if (discount === '40% and above') {
          tempProducts = tempProducts.filter(
            (product) => product.discount >= 40,
          )
        }
        if (discount === '50% and above') {
          tempProducts = tempProducts.filter(
            (product) => product.discount >= 50,
          )
        }
        if (discount === '60% and above') {
          tempProducts = tempProducts.filter(
            (product) => product.discount >= 60,
          )
        }
      }
      state.filteredProducts = tempProducts
    },
    removeFilter(state, action) {
      state.filters.category = ''
      state.filters.brand = ''
      state.filters.price = ''
      state.filters.color = ''
      state.filters.discount = ''
      state.filteredProducts = state.unfilteredProducts
    },
  },
})

export const filterActions = filterSlice.actions
export default filterSlice.reducer
