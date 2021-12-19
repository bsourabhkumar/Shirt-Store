import Modal from '../../UI/Modal'
import styles from './WishList.module.css'
import WishListItem from './WishListItem'
import { useSelector, useDispatch } from 'react-redux'
import { wishListActions } from '../../store/wish-slice'

const WishList = (props) => {
  const dispatch = useDispatch()
  const wishlistProducts = useSelector((state) => state.wishlist.items)
  const totalQuantity = useSelector((state) => state.wishlist.totalQuantity)

  const wishlistItemRemoveHandler = (id) => {
    dispatch(wishListActions.removeItemFromWishList(id))
  }

  const wishlistAddHandler = (newItem) => {
    dispatch(
      wishListActions.addItemToWishList({
        ...newItem,
      }),
    )
    console.log(newItem)
  }

  const wishlistItems = (
    <ul className={styles['cart-items']}>
      {wishlistProducts.map((item) => (
        <WishListItem
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
          brand={item.brand}
          discount={item.discount}
          onRemove={wishlistItemRemoveHandler.bind(null, item.id)}
          onAdd={wishlistAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  )

  return (
    <Modal onClose={props.onClose}>
      {wishlistItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>({totalQuantity})</span>
      </div>
      <div className={styles.actions}>
        <button className={styles['button--alt']} onClick={props.onClose}>
          Close
        </button>
      </div>
    </Modal>
  )
}

export default WishList
