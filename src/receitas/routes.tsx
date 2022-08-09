import { Navigate, Route } from '@tanstack/react-location';
import TodasReceitasPage from './todas/page';

const ReceitasRoutes: Route[] = [
  {
    path: 'receitas',
    children: [
      {
        path: 'todas',
        element: <TodasReceitasPage />,
      },
      {
        element: <Navigate to="todas" />,
      },
    ],
  },
];

export default ReceitasRoutes;
