import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { authLoader } from "./auth";
import { routePath } from "./path";

const LoginPage = React.lazy(() => import("@pages/login-page"));
const HomePage = React.lazy(() => import("@pages/home-page"));

const router = createBrowserRouter([
  {
    path: routePath.Home,
    element: 
      <Suspense fallback={null}>
        <HomePage />
      </Suspense>,
      loader: authLoader
  },
  {
    path: routePath.Login,
    element: 
      <Suspense fallback={null}>
        <LoginPage />
      </Suspense>
  },
  {
    path: "*",
    element: <p>Page Not Found: 404!</p>
  },
]);

export default router;
