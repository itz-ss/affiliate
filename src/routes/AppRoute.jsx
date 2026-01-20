import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import ServiceDetail from "../pages/body/ServiceDetail";
import ServicesPage from "../pages/ServicesPage";
import ScrollToTop from "./ScrollToTop";

// import Services from "../components/Services";
// import ServiceDetail from "../components/ServicesPage/ServiceDetail";
// import AboutUs from "../components/AboutUs";
// import FormModal from "../components/FormModal";

const AppRoutes = () => {
  return (
    <>
    <ScrollToTop/>
      <Routes>
        <Route path="/" element={<MainLayout />}> 
          <Route index element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />

          <Route path="/service/:slug" element={<ServiceDetail />} />

          {/* <Route path="services" element={<Services />} /> */}
          {/* <Route path="services/:serviceId" element={<ServiceDetail />} /> */}
          {/* <Route path="about" element={<AboutUs />} /> */}
          {/* <Route path="form" element={<FormModal isOpen={true} onClose={() => {}} />} /> */}
        </Route>
      </Routes>
      </>
  );
};

export default AppRoutes;
