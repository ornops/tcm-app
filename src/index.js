import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/home-page/home-page';
import DashboardPage from './pages/dashboard-page/dashboard-page';


const router = createBrowserRouter([
  {
  path: '/',
  element: <HomePage/>,
  },
  {
    path: '/dashboard',
    element: <DashboardPage/>,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
