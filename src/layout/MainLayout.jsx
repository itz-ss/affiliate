import { Outlet } from "react-router-dom";
import Navbar from "../pages/Navbar";
import Footer from "../pages/Footer";
import "./style/MainLayout.css";

const MainLayout = () => {
  return (
    <div className="main-layout">
      <Navbar />

      <main className="content-area">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
