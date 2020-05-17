import React, { useState } from 'react';
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
      <div className="cart-item__title">{ item.name }</div>
      <div className="cart-item__price">{ item.price }</div>
      <div className="cart-item__qty">
        <button type="button" onClick={decreaseQuatity} disabled={ quantity === 1 }>-</button>
        { quantity }
        <button type="button" onClick={increaseQuatity}>+</button>
      </div>
      <div className="cart-item__total">{ item.price * quantity }</div>
      <div className="cart-item__action">
        <button type="button" onClick={() => removeItem(item.id)}>Remove</button>
      </div>
    </div>
  );
}