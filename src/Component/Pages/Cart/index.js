import React, { useState } from 'react';
import { CartItem } from './Blocks/CartItem'
import Container from '@material-ui/core/Container';

const data = [
  {
     id: 1,
     name: "шарик",
     image: "https://heroeswm-uvz.at.ua/imgs/katalog_statey/tumblr_m07iyfLy0F1qce1ag.jpg",
     price: 20,
     quantity: 1
  },
  {
     id: 2,
     name: "футболка",
     image: "https://i.pinimg.com/originals/da/8b/d1/da8bd1d87e3e7c8d708571515fdc2725.jpg",
     price: 24,
     quantity: 1
  },
  {
     id: 3,
     name: "шарик 1",
     image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png",
     price: 30,
     quantity: 1
  },
  {
     id: 4,
     name: "шарик 2",
     image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png",
     price: 38,
     quantity: 1
  }
]

export const Cart = () => {
  const [products, sertProducts] = useState(data)

  const removeItem = (itemId) => {
    let newData = products.filter(item => {
      return item.id !== itemId
    })
    sertProducts(newData)
  }

  const CartItems = () => {
    return (
      <div>
        <div className="cart-item">
          <div className="cart-item__image">Image</div>
          <div>Name</div>
          <div>Price</div>
          <div>Quantity</div>
          <div>Total</div>
          <div> </div>
        </div>
        {products.map(item => {
        return <CartItem item={item} key={item.id} removeItem={removeItem} />
      })}
      </div>
    )
  }


  return (
    <Container fixed>
      <CartItems />
    </Container>
  );
}