import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Blog from "../pages/blog";
import BlogDetails from "../pages/blog/details";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: Home },
      { path: "shop", Component: Shop },
      {
        path: "blog",
        children: [
          { index: true, Component: Blog },
          { path: ":slug", Component: BlogDetails },
        ],
      },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
    ],
  },
]);
