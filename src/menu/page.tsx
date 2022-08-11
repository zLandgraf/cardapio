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
} from '@mui/material';
import PrintIcon from '@mui/icons-material/Print';

const MenuPage = () => (
  <Paper>
    <Grid container justifyContent="center" sx={{ minHeight: '75vh' }}>
      <Grid item xs={8} sx={{ p: 2 }}>
        <Typography variant="h6">
          Menu
        </Typography>
      </Grid>
      <Grid item xs={4} sx={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', p: 2 }}>
        <Grid container justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="h6">
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
