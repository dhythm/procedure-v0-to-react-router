import {
  RouterProvider,
  createBrowserRouter,
} from 'react-router';
import './globals.css';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
