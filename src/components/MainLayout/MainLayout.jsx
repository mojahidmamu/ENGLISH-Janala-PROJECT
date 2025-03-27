import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import OngoingProject from "../OngoingProject/OngoingProject";
import FinancialDashboard from "../Nagad/FinancialDashboard";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <FinancialDashboard></FinancialDashboard>
      <OngoingProject></OngoingProject>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
