import { Route, Routes } from "react-router-dom";
import Nav from "./Nav";

import Research from "../page/research_and_development";
import Institute from "../page/institution";

import Footer from "./footer";
import Project from "../page/project_id";
import Alltype from "../page/alltype";
import Main from "../page/main";
import Kingscience from "../page/King_science";
import SEP from "../page/SEP";
import Typeactivities from "../page/typeactivities";
import Activity from "../page/Activaites";
import ProjectID from "../page/project_id";

export default function Router() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/tassa2022/" element={<Main />} />
        <Route path="/tassa2022/King" element={<Kingscience />} />
        <Route path="/tassa2022/Research" element={<Research />} />
        <Route path="/tassa2022/Institute" element={<Institute />} />
        <Route path="/tassa2022/SEP" element={<SEP />} />
        <Route path="/tassa2022/TypeProject/:id" element={<Alltype />} />
        <Route path="/tassa2022/Project/:royal_id" element={<ProjectID />} />
        <Route path="/tassa2022/TypeActivities/:typeact_id" element={<Typeactivities />} />
        <Route path="/tassa2022/Activites/:typeact_name/:docno" element={<Activity />} />
      </Routes>
      <Footer />
    </div>
  );
}


