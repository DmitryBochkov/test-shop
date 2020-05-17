import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import { ProductCard } from './Blocks/ProductCard';
import { Sidebar } from '../../../UI/Sidebar';


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
        return (
          <Grid item xs={12} sm={6} md={4} >
            <ProductCard item={product} />
          </Grid>
        )
      })
    )
  } else {
    return (<Grid item xs={12}>No products found.</Grid>)
  }
}

export const Home = () => {
  return (
    <Container fixed>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={4} md={3}>
          <Sidebar />
        </Grid>

        <Grid item xs={12} sm={8} md={9}>
          <Grid container spacing={4}>
            <ProductList />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}