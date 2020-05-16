import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { Card } from 'antd';
const { Meta } = Card;

export const ProductCard = ({ item }) => {
  
  const [isFlipped, handleFlipped] = useState(false)
  
  const onCardClick = () => {
    handleFlipped(!isFlipped)
  }
  
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      <Card
        hoverable
        style={{ maxWidth: 240 }}
        cover={<img alt={item.name} src={ item.image } />}
        onClick={onCardClick}
      >
        <Meta title={item.name} />
      </Card>
      <Card
        hoverable
        style={{ maxWidth: 240 }}
        cover={<img alt={item.name} src={ item.image } />}
        onClick={onCardClick}
      >
        <Meta title={item.name} description={item.price} />
      </Card>

    </ReactCardFlip>
  );
}