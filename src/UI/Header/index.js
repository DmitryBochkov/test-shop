import React from 'react';
import {MainNav} from '../Nav';
import Container from '@material-ui/core/Container';

export const Header = () => {
  return (
    <header className="main-header">
      <Container fixed>
        <MainNav />
      </Container>
    </header>
  );
}