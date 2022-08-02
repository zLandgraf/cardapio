import {
  Container,
  createTheme,
  CssBaseline,
  Grid,
  ThemeProvider,
} from '@mui/material';
import Navbar from './Navbar';
import RecipeCard from './RecipeCard';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Navbar />
      <Container sx={{ pt: 4 }}>
        <Grid container spacing={4}>
          {[1, 2, 3, 4, 5].map((i) => (
            <Grid item>
              <RecipeCard />
            </Grid>
          ))}
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
