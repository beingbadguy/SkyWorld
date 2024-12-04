import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout.jsx";
import ContextProvider from "./Store/StoreContext.jsx";
import LoginPage from "./Pages/Login.jsx";
import SignUpPage from "./Pages/Signup.jsx";
import Cart from "./Pages/Cart.jsx";
import Contact from "./Pages/Contact.jsx";
import Faq from "./Pages/Faq.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "faq",
        element:<Faq/>
      },
      {
        path: "contact",
        element:<Contact/>
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "signup",
        element: <SignUpPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </StrictMode>
);
