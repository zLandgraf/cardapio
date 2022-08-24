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
  Card,
  CardActions,
  Chip,
} from '@mui/material';
import PrintIcon from '@mui/icons-material/Print';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { Link } from '@tanstack/react-location';
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
            <Link to="/receitas">
              <Button>Novo Cardápio</Button>
            </Link>
          </Grid>
        </Grid>
        <Grid container spacing={3} rowSpacing={4} pt={4}>
          {[1, 2, 3, 4, 5, 6, 7].map((n) => (
            <Grid item xs={4} key={n}>
              <Card>
                <CardMedia
                  component="img"
                  sx={{ width: '100%', height: 'auto', borderRadius: '.75rem' }}
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
                    <Box sx={{
                      py: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    }}
                    >
                      <Box>
                        <Typography variant="h6">
                          Receita
                        </Typography>
                      </Box>
                      <Box sx={{ py: 1, display: 'flex', justifyContent: 'flex-end' }}>
                        <Chip avatar={<AccessTimeIcon fontSize="inherit" />} label="30m" sx={{ mr: 1, fontSize: '.75rem' }} />
                        <Chip avatar={<PeopleAltIcon />} label="2" sx={{ fontSize: '.75rem' }} />
                      </Box>
                    </Box>
                    <Box sx={{ pt: 2, pb: 1 }}>
                      <Typography>
                        Nome da receita que pode ser bem grande.
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
                <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Button color="secondary">Remover</Button>
                </CardActions>
              </Card>
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
