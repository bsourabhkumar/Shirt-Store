import { cartActions } from './cart-slice'

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        'https://instachat-e6d5b-default-rtdb.firebaseio.com/shirtbag.json',
      )
      if (!response.ok) {
        throw new Error('Could not fetch cart data!')
      }
      const data = await response.json()
      console.log('Inside CartActions', data)
      return data
    }
    try {
      const cartData = await fetchData()
      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        }),
      )
      console.log(cartData)
    } catch (error) {
      console.log('Failed to get Cart Data')
    }
  }
}
