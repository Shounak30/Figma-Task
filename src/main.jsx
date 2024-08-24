import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import NavbarLogin from "./components/NavbarLogin.jsx";
import "./index.css";
import LoginForm from "./pages/LoginForm.jsx";
import AuthProvider from "./store/AuthProvider.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavbarLogin />,
  },

  {
    path: "/loginform",
    element: <LoginForm />,
  },

  {
    path: "/home",
    element: <App />,
  },
]);

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);
