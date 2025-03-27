import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import OngoingProject from "../OngoingProject/OngoingProject";
import FinancialDashboard from "../Nagad/FinancialDashboard";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <h1 className="font-bold text-center my-3 text-2xl text-orange-600">
        <span className="text-green-700">Welcome </span>to My Project
      </h1>
      <Outlet></Outlet>
      <FinancialDashboard></FinancialDashboard>
      <OngoingProject></OngoingProject>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
