import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { Feedbacks } from "./pages/Feedbacks";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Adicionar } from "./pages/Feedbacks/Adicionar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/feedbacks",
    element: <Feedbacks />,
  },
  {
    path: "feedbacks/adicionar",
    element: <Adicionar />,
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
