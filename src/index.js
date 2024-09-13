import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss'
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/home-page/home-page';
import DashboardPage from './pages/dashboard-page/dashboard-page';
import TestCasesPage from './pages/testcases-page/test-cases-page';
import TestSuitePage from './pages/test-suite-page/test-suite-page'
import UserProfilePage from './pages/user-profile-page/user-profile-page';
import NotFoundPage from './pages/not-found-page/not-found-page';


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <NotFoundPage />
  },
  {
    path: '/dashboard',
    element: <DashboardPage />,
  },
  {
    path: '/testcases',
    element: <TestCasesPage />,
  },
  {
    path: '/testsuites',
    element: <TestSuitePage />,
  },
  {
    path: '/userprofile',
    element: <UserProfilePage />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
