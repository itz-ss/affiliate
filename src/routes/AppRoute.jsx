import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import ServiceDetail from "../pages/body/ServiceDetail";
import ScrollToTop from "./ScrollToTop";

const AppRoutes = () => {
  return (
    <>
    <ScrollToTop/>
      <Routes>
        <Route path="/" element={<MainLayout />}> 
          <Route index element={<Home />} />
          <Route path="/service/:slug" element={<ServiceDetail />} />
        </Route>
      </Routes>
      </>
  );
};

export default AppRoutes;
