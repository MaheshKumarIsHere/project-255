import { Component, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "./pages/homepage/HomePage.jsx";
import RootLayout from "./pages/layouts/RootLayout.jsx";
import "./index.css";
import VideoTutorial from "./pages/video-tutorial/VideoTutorial.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "/video-tutorial", Component: VideoTutorial },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
