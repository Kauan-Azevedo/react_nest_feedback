import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { Feedbacks } from "./pages/Feedbacks";
import { Header } from "./layouts/Header";
import { Footer } from "./layouts/Footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/feedbacks",
    element: <Feedbacks />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Header />
    <main>
      <RouterProvider router={router} />
    </main>
    <Footer />
  </React.StrictMode>
);
