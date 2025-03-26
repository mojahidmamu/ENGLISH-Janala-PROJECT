import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Home/Home";
import FAQsection from "../FAQsection/FAQsection";
import LogOut from "../LogOut/LogOut";
import NewUser from "../NewUser/NewUser";
import VocabularySection from "../VocabularySection/VocabularySection";

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
        path: "/FAQsection",
        element: <FAQsection></FAQsection>,
      },
      {
        path: "/VocabularySection",
        element: <VocabularySection></VocabularySection>,
      },
      {
        path: "/",
        element: <LogOut></LogOut>,
      },
      {
        path: "/newUser",
        element: <NewUser></NewUser>,
      },
    ],
  },
]);

export default router;
