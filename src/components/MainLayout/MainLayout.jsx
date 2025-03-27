import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import OngoingProject from "../OngoingProject/OngoingProject";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <OngoingProject></OngoingProject>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
