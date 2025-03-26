import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Home/Home";
import FAQsection from "../FAQsection/FAQsection";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: '/FAQsection',
        element: <FAQsection></FAQsection>
      }
    ],
  },
]);

export default router;
