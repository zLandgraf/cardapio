import {
  Grid, Paper, Typography,
} from '@mui/material';

const MenuPage = () => (
  <Paper>
    <Grid container justifyContent="center" sx={{ minHeight: '75vh' }}>
      <Grid item xs={8} sx={{ p: 2 }}>
        <Typography variant="h6">
          Menu
        </Typography>
      </Grid>
      <Grid item xs={4} sx={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', p: 2 }}>
        <Typography variant="h6">
          Ingredientes
        </Typography>
      </Grid>
    </Grid>
  </Paper>
);

export default MenuPage;
