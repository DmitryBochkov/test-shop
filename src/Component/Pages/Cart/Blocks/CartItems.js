import React from 'react';
import { CartItem } from './CartItem'
import { CartItemsHeader } from './CartItemsHeader'

export const CartItems = ({ products, removeItem }) => {

  const CartRows = () => products.map((item) => {
    return <CartItem item={item} key={item.id} removeItem={removeItem} />;
  });
  
  return (
    <div>
      <CartItemsHeader/>
      <CartRows />
    </div>
  );
}