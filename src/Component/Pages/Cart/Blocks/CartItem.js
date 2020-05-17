import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import './styles.css'

export const CartItem = ({ item, removeItem }) => {
  const [quantity, setQuantity ] = useState(item.quantity)
  
  const decreaseQuatity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }
  
  const increaseQuatity = () => {
    setQuantity(quantity + 1)
  }
  
  return (
    <div className="cart-item">
      <div className="cart-item__image">
        <img src={item.image} alt="" />
      </div>
      <div className="cart-item__title">{item.name}</div>
      <div className="cart-item__price">{item.price}</div>
      <div className="cart-item__qty">
        <button
          onClick={decreaseQuatity}
          disabled={quantity === 1}
          type="button"
        >
          -
        </button>
        <span>{quantity}</span>
        <button
          onClick={increaseQuatity}
          type="button"
        >
          +
        </button>
      </div>
      <div className="cart-item__total">{item.price * quantity}</div>
      <div className="cart-item__action">
        <Button
          onClick={() => removeItem(item.id)}
          variant="outlined"
          size="small"
          color="primary"
        >
          Remove
        </Button>
      </div>
    </div>
  );
}