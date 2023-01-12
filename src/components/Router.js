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
        <Route path="/tassa2022/ศาสตร์พระราชา" element={<Kingscience />} />
        <Route path="/tassa2022/วิจัยและพัฒนา" element={<Research />} />
        <Route path="/tassa2022/ติดต่อสถาบัน" element={<Institute />} />
        <Route path="/tassa2022/SEP" element={<SEP />} />
        <Route path="/tassa2022/ประเภทโครงการ/:id" element={<Alltype />} />
        <Route path="/tassa2022/โครงการที่/:royal_id" element={<ProjectID />} />
        <Route path="/tassa2022/ประเภทกิจกรรม/:typeact_id" element={<Typeactivities />} />
        <Route path="/tassa2022/ประเภทกิจกรรม/:typeact_name/:docno" element={<Activity />} />
      </Routes>
      <Footer />
    </div>
  );
}


