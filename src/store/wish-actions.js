import { wishListActions } from './wish-slice'

export const fetchWishListData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        'https://instachat-e6d5b-default-rtdb.firebaseio.com/shirtwish.json',
      )
      if (!response.ok) {
        throw new Error('Could not fetch wishlist data!')
      }
      const data = await response.json()
      console.log('WishList data', data)
      return data
    }
    try {
      const wishListData = await fetchData()
      dispatch(
        wishListActions.replaceWishList({
          items: wishListData.items || [],
          totalQuantity: wishListData.totalQuantity,
        }),
      )
    } catch (error) {
      console.log('Failed to get WishList Data')
    }
  }
}
