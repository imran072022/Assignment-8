import { createBrowserRouter } from "react-router";
import App from "../App";
import RootLayout from "../RootLayout/RootLayout";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";
import AppDetails from "../Components/AppDetails";
import PageNotFound from "../Pages/PageNotFound";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement: <PageNotFound></PageNotFound>,
    children: [
      {
        index: true,
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/apps",
        element: <Apps></Apps>,
      },
      {
        path: "/installation",
        element: <Installation></Installation>,
      },
      {
        path: "/appDetails/:id",
        element: <AppDetails></AppDetails>,
      },
    ],
  },
]);
export default router;
