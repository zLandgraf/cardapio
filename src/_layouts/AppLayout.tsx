import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { Outlet } from '@tanstack/react-location';
import Navbar from './Navbar';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const AppLayout = () => (
  <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <Navbar />
    <Outlet />
  </ThemeProvider>
);

export default AppLayout;
