import React, { useEffect } from "react";
import './App.css';
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ClientReviewsPage from "./pages/ClientReviewsPage"; 


function ScrollToSection() {
    const location = useLocation();

    useEffect(() => {
        if (location.state?.scrollTo) {
            const element = document.getElementById(location.state.scrollTo);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);

    return null;
}

const App = () => {
  return (
    <>
      
      <ScrollToSection />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/reviews" element={<ClientReviewsPage />} /> {/* Update the route */}
      </Routes>
    </>
  );
};

export default App;
