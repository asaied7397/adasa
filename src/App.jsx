import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import BlogDetailsPAGE from "./pages/BlogDetailsPage";
import NotFoundPage from "./pages/NotFoundPage";
import Layout from "./components/Layout";
import AboutUsPage from "./pages/AboutUsPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <NotFoundPage />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "/blog",
          element: <BlogPage />,
        },
        {
          path: "/blog/:id",
          element: <BlogDetailsPAGE />,
        },
        {
          path: "/about",
          element: <AboutUsPage />,
        },
        {
          path: "*",
          element: <NotFoundPage />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
