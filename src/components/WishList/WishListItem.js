import classes from './WishListItem.module.css'

const WishListItem = (props) => {
  const price = `₹ ${props.price}`

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{props.brand}</h2>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>Price: {price}</span>
          <span className={classes.price}>({props.discount} % off)</span>
          {/* <span className={classes.amount}>x {props.amount}</span> */}
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>-</button>
      </div>
    </li>
  )
}

export default WishListItem
