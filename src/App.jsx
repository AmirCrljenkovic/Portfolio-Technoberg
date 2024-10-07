// App.jsx
import React, { useEffect } from "react";
import './App.css';
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ClientReviewsPage from "./pages/ClientReviewsPage";
// Remove the Banner import here
// import Banner from "./components/Banner"; 

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
      {/* Remove the Banner here */}
      {/* <Banner /> */}

      <ScrollToSection />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/reviews" element={<ClientReviewsPage />} />
      </Routes>

      {/* Also remove the fixed Banner at the bottom if it exists */}
      {/* <div className="fixed bottom-0 w-full">
        <Banner />
      </div> */}
    </>
  );
};

export default App;
