import React from 'react';

import { Layout, Row, Col } from 'antd';
import { ProductCard } from './Blocks/ProductCard';

const { Header, Footer, Sider, Content } = Layout;

const data = [
  {
     id: 1,
     name: "шарик",
     image: "https://heroeswm-uvz.at.ua/imgs/katalog_statey/tumblr_m07iyfLy0F1qce1ag.jpg",
     price: 20
  },
  {
     id: 2,
     name: "футболка",
     image: "https://i.pinimg.com/originals/da/8b/d1/da8bd1d87e3e7c8d708571515fdc2725.jpg",
     price: 24
  },
  {
     id: 3,
     name: "шарик 1",
     image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png",
     price: 30
  },
  {
     id: 4,
     name: "шарик 2",
     image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png",
     price: 38
  }
]

const ProductList = () => {
  if (data.length) {
    return (
      data.map(product => {
        return (<Col sm={12} lg={8} key={product.id}>
          <ProductCard item={product} />
        </Col>)
      })
    )
  } else {
    return (<Col>No products found.</Col>)
  }
}

export const Home = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header>Header</Header>
      <Layout>
        <Sider>SidBar</Sider>
        <Content>
          <Row>
            <ProductList/>
          </Row>
        </Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  );
}