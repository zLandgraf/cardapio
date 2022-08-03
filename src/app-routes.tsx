import { ReactLocation, Router } from '@tanstack/react-location';
import AppLayout from './_layouts/AppLayout';
import ReceitasRoutes from './receitas/routes';

const reactLocation = new ReactLocation();

function App() {
  return (
    <Router
      location={reactLocation}
      basepath="receitas"
      routes={[
        {
          element: <AppLayout />,
          children: [
            ...ReceitasRoutes,
          ],
        },
      ]}
    />
  );
}

export default App;
