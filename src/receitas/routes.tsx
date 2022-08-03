import { Navigate } from '@tanstack/react-location';
import NovaReceitaPage from './nova/page';
import TodasReceitasPage from './todas/page';

const ReceitasRoutes = [
  {
    children: [
      {
        path: 'todas',
        element: <TodasReceitasPage />,
      },
      {
        path: 'nova',
        element: <NovaReceitaPage />,
      },
      {
        element: <Navigate to="todas" />,
      },
    ],
  },
];

export default ReceitasRoutes;
