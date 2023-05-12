import { Route, Routes } from "react-router-dom";

import Research from "../page/notuse/research_and_development";
import Institute from "../page/menu_5/institution";
import Footer from "./footer";
import Alltype from "../page/menu_1/alltype";
import MainPage from "../page/main/MainPage";
import Kingscience from "../page/menu_1/King_science";
import SEP from "../page/notuse/SEP";
import Typeactivities from "../page/main/typeactivities";
import Activity from "../page/main/Activaites";
import ProjectID from "../page/menu_1/project_id";
import Asset from "../page/menu_4/asset";
import Header from "./Nav";

export default function Router() {
  return (
    <div className="App">
      <Header/>
      <Routes >
        <Route path="/tassa2022" element={<MainPage />} />
        <Route path="/tassa2022/King" element={<Kingscience />} />
        <Route path="/tassa2022/Research" element={<Research />} />
        <Route path="/tassa2022/Institute" element={<Institute />} />
        <Route path="/tassa2022/SEP" element={<SEP />} />
        <Route path="/tassa2022/Asset_all/:id" element={<Asset />} />
        <Route path="/tassa2022/TypeProject/:id" element={<Alltype />} />
        <Route path="/tassa2022/Project/:royal_id" element={<ProjectID />} />
        <Route path="/tassa2022/TypeActivities/:typeact_id" element={<Typeactivities />} />
        <Route path="/tassa2022/Activites/:typeact_name/:docno" element={<Activity />} />
      </Routes>
      <Footer />
    </div>
  );
}


