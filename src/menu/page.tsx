import React from 'react';
import { Link } from '@tanstack/react-location';
import { Card, Grid } from '@mui/material';

const MenuPage = () => (
  <>
    <Grid container justifyContent="center">
      <Grid item xs={6}>
        <Card>
          <h2>Menu</h2>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card>
          <h2>Lista de compras</h2>
        </Card>
      </Grid>
    </Grid>
    <Link to="/receitas">
      Novo plano alimentar
    </Link>
    <div>MenuPage</div>
  </>
);

export default MenuPage;
