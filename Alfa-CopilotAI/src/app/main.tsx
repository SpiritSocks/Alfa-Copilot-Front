import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';

import LoginPage from '../pages/auth/LoginPage';
import NotFoundPage from '../pages/notFound/NotFoundPage';

import './index.css'

const router = createBrowserRouter([
  {path: '/', element: <App />},
  {path: '/login', element: <LoginPage />},
  {path: '*', element: <NotFoundPage />},
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
