import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from '@mui/material';
import { Outlet } from '@tanstack/react-location';
import Navbar from './Navbar';

const darkTheme = createTheme({
  palette: {
    // mode: 'dark',
  },
});

const AppLayout = () => (
  <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <Navbar />
    <Container maxWidth="xl" sx={{ py: 6 }}>
      <Outlet />
    </Container>
  </ThemeProvider>
);

export default AppLayout;
