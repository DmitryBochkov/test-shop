import React from 'react';

import { Card } from 'antd';
const { Meta } = Card;

export const ProductCard = ({ item }) => {
  return (
    <Card
      hoverable
      style={{ maxWidth: 240 }}
      cover={<img alt={item.name} src={ item.image } />}
    >
      <Meta title={item.name} />
    </Card>
  );
}