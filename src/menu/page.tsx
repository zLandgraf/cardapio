import {
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  Paper,
  Typography,
  Checkbox,
  ListItemText,
  Divider,
  ListItemSecondaryAction,
  CardMedia,
  CardContent,
  Box,
  Button,
} from '@mui/material';
import PrintIcon from '@mui/icons-material/Print';
import MealImg from '../assets/meal_002.png';

const MenuPage = () => (
  <Paper>
    <Grid container justifyContent="center" sx={{ minHeight: '75vh' }}>
      <Grid item xs={8} sx={{ py: 3, px: 4 }}>
        <Grid container justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">
              Menu
            </Typography>
          </Grid>
          <Grid item>
            <Button>Alterar cardápio</Button>
          </Grid>
        </Grid>
        <Grid container spacing={2} rowSpacing={3} pt={4}>
          {[1, 2, 3, 4, 5, 6, 7].map((n) => (
            <Grid item xs={6}>
              <Box sx={{ display: 'flex', borderRadius: '.75rem' }}>
                <CardMedia
                  component="img"
                  sx={{ width: 125, height: 'auto', borderRadius: '.75rem' }}
                  image={MealImg}
                />
                <CardContent sx={{ width: '100%' }}>
                  <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    justifyContent: 'space-between',
                  }}
                  >
                    <Box>
                      <Typography variant="h6">
                        Nome da Receita
                      </Typography>
                    </Box>
                    <Box>
                      <Typography>
                        Info da receita
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={4} sx={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', py: 3, px: 4 }}>
        <Grid container justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="h5">
            Lista
          </Typography>
          <IconButton>
            <PrintIcon />
          </IconButton>
        </Grid>
        <Grid container>
          <List sx={{ width: '100%' }} disablePadding>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
              <>
                <ListItem key={n}>
                  <ListItemIcon>
                    <Checkbox />
                  </ListItemIcon>
                  <ListItemText primary="Ingrediente" />
                  <ListItemSecondaryAction>
                    {n}
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider variant="inset" component="li" />
              </>
            ))}
          </List>
        </Grid>
      </Grid>
    </Grid>
  </Paper>
);

export default MenuPage;
