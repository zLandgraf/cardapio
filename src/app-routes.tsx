import { ReactLocation, Router } from '@tanstack/react-location';
import AppLayout from './_layouts/AppLayout';
import ReceitasRoutes from './receitas/routes';
import MenuRoutes from './menu/routes';

const reactLocation = new ReactLocation();

function App() {
  return (
    <Router
      location={reactLocation}
      routes={[
        {
          element: <AppLayout />,
          children: [
            ...MenuRoutes,
            ...ReceitasRoutes,
          ],
        },
      ]}
    />
  );
}

export default App;
