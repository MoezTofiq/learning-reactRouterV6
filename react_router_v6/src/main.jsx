import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root, { loader as rootLoader } from "./routes/root";
import ErrorPage from "./error-page";
import Contact from "./routes/contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    loader: rootLoader,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact></Contact>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
