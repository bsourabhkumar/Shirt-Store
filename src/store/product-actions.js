import { filterActions } from './filter-slice'

export const fetchProductsData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        'https://instachat-e6d5b-default-rtdb.firebaseio.com/shirtProducts/-MqxFMuUSbvBfK7BvHiT.json',
      )
      if (!response.ok) {
        throw new Error('Could not fetch products data!')
      }
      const data = await response.json()
      return data
    }
    try {
      const productData = await fetchData()
      dispatch(
        filterActions.getProducts({
          items: productData.items || [],
        }),
      )
    } catch (error) {
      console.log('Failed to get Product Data')
    }
  }
}
