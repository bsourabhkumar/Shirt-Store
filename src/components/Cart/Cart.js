import Modal from '../../UI/Modal'
import styles from './Cart.module.css'
import CartItem from './CartItem'
import { useSelector, useDispatch } from 'react-redux'
import { cartActions } from '../../store/cart-slice'

const Cart = (props) => {
  const dispatch = useDispatch()
  const cartProducts = useSelector((state) => state.cart.items)
  const totalQuantity = useSelector((state) => state.cart.totalQuantity)

  const cartItemRemoveHandler = (id) => {
    dispatch(cartActions.removeItemFromCart(id))
  }

  const cartItemAddHandler = (newItem) => {
    dispatch(
      cartActions.addItemToCart({
        ...newItem,
      }),
    )
    console.log(newItem)
  }

  const cartItems = (
    <ul className={styles['cart-items']}>
      {cartProducts.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.quantity}
          price={item.price}
          brand={item.brand}
          size={item.size}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  )

  const totalAmount = cartProducts.reduce((currentNum, item) => {
    return currentNum + item.totalPrice
  }, 0)

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>
          ₹ {totalAmount} ({totalQuantity})
        </span>
      </div>
      <div className={styles.actions}>
        <button className={styles['button--alt']} onClick={props.onClose}>
          Close
        </button>
        {totalQuantity > 0 && <button className={styles.button}>Order</button>}
      </div>
    </Modal>
  )
}

export default Cart
