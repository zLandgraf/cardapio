import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Button, Container } from '@mui/material';
import { Link } from '@tanstack/react-location';

export default function Navbar() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            I&apos;m Hungry
          </Typography>
          <Link to="/receitas/todas">
            <Button>Todas Receitas</Button>
          </Link>
          <Link to="/receitas/nova">
            <Button>Nova Receita</Button>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>

  );
}
