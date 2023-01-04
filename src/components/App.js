import { Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import Home from "../page/King_science";
import Research from "../page/research_and_development";
import Institute from "../page/institution";
import Infomore from "../page/infomore";
import Footer from "./footer";
import Project from "../page/project_id";
import Alltype from "../page/type_project/alltype";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/tassa2022/" element={<Home />} />
        <Route path="/Research" element={<Research />} />
        <Route path="/Institute" element={<Institute />} />
        <Route path="/Infomore" element={<Infomore />} />
        <Route path="/Alltype/:id" element={<Alltype />} />
        <Route path="/Project/:royal_id" element={<Project />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
