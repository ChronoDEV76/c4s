// src/main.jsx
import React, { StrictMode, Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";

import App from "./App.jsx";
import LoadingSpinner from "./components/LoadingSpinner.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";

const Home = lazy(() => import("./pages/Home.jsx"));
const EvenementenVeiligheid = lazy(() => import("./pages/EvenementenVeiligheid.jsx"));
const Brandwachten = lazy(() => import("./pages/Brandwachten.jsx"));
const ITSecurity = lazy(() => import("./pages/ITSecurity.jsx"));
const OverOns = lazy(() => import("./pages/OverOns.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const NotFound = lazy(() => import("./pages/NotFound.jsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: (
      <ErrorBoundary>
        <LoadingSpinner />
      </ErrorBoundary>
    ),
    children: [
      { index: true, element: <Suspense fallback={<LoadingSpinner />}><Home /></Suspense> },
      { path: "evenementen-veiligheid", element: <Suspense fallback={<LoadingSpinner />}><EvenementenVeiligheid /></Suspense> },
      { path: "brandwachten", element: <Suspense fallback={<LoadingSpinner />}><Brandwachten /></Suspense> },
      { path: "it-security", element: <Suspense fallback={<LoadingSpinner />}><ITSecurity /></Suspense> },
      { path: "over", element: <Suspense fallback={<LoadingSpinner />}><OverOns /></Suspense> },
      { path: "contact", element: <Suspense fallback={<LoadingSpinner />}><Contact /></Suspense> },
      { path: "*", element: <Suspense fallback={<LoadingSpinner />}><NotFound /></Suspense> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  </StrictMode>
);

