import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import { Container } from '@mui/material';

export default function Navbar() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl" sx={{ px: '0!important' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <LunchDiningIcon sx={{ fontSize: '2rem' }} />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            I&apos;m Hungry
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>

  );
}
