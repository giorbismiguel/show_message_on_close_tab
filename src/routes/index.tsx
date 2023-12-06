import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Home from '../modules/authentication/pages/pages/Home';
import AppLayout from '../layouts/AppLayout';
import CompanyRoutes from '../modules/companies';
import ContactRoutes from '../modules/contatcs';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route index element={<Home />} />
      <Route path="/companies" element={<CompanyRoutes />} />
      <Route path="/contacts" element={<ContactRoutes />} />
    </Route>
  )
);

const Routes = () => {

  return (
    <RouterProvider router={router} />
  )
}

export default Routes;