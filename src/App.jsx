import React from "react";
import './App.css';
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ClientReviewsPage from "./pages/ClientReviewsPage"; // Import the renamed ClientReviewsPage component

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/Reviews" element={<ClientReviewsPage />} /> {/* Update the route */}
    </Routes>
  );
};

export default App;
