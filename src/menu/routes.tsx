import { Route } from '@tanstack/react-location';
import MenuPage from './page';

const MenuRoutes: Route[] = [
  {
    path: '/',
    element: <MenuPage />,
  },
];

export default MenuRoutes;
