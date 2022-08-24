import {
  Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography,
} from '@mui/material';
import MealImg from '../../assets/meal_002.png';

const TodasReceitasPage = () => (
  <>
    <Grid container>
      <Grid>
        <Typography variant="h6">Minha receitas</Typography>
      </Grid>
    </Grid>
    <Grid container spacing={3} rowSpacing={4} pt={4}>
      {[1, 2, 3, 4, 5, 6, 7, 8].map((y) => (
        <Grid item xs={3} key={y}>
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
                </Box>
                <Box sx={{ pt: 2, pb: 1 }}>
                  <Typography>
                    Nome da receita que pode ser bem grande.
                  </Typography>
                </Box>
              </Box>
            </CardContent>
            <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button>Adicionar</Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  </>
);

export default TodasReceitasPage;
