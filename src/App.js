import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./templates/Layout";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Layout type="home" Component={HomePage} />}
          />
          <Route
            path="/about"
            element={<Layout type="about" Component={AboutPage} />}
          />
          <Route
            path="/projects"
            element={<Layout type="projects" Component={ProjectsPage} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
