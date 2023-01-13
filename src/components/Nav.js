import { Link } from "react-router-dom";
import "../css/css.css";
import { Nav, Navbar, Container, NavDropdown, } from "react-bootstrap";
export default function nav() {
  return (
    <>
      <Navbar
        className="navbar"
        style={{ backgroundColor: "#2196F3" }}
        expand="lg"
        text="dark"
      >
        <Container className="navbar-container">
          <Navbar.Brand>
            <Link to="/tassa2022/">
              <img
                src="http://www.isethailand.org/tassa2022/image/logo/logo.png"
                alt=""
                width={"200px"}
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Collapse >
            <Nav
              className="me-auto nav-links justify-content-end"
              style={{ width: "100%" }}
            >
              <Link to="/tassa2022/ศาสตร์พระราชา" className="nav-link">
                ศาสตร์ของพระราชา
              </Link>
              <a href="https://isethailand.org/tassa/admin/admin_page/list_project.php" target="_blank" className="nav-link">
                งานวิจัยและพัฒนา
              </a>
              <NavDropdown title="สื่อเผยแพร่งาน SEP" id="basic-nav-dropdown">
                <NavDropdown.Item target="_blank" href="https://isethailand.org/tassa/admin/listasset.php?id=01&fbclid=IwAR0vFhUeEV2MYyE1SVNinEem7c2Pek0PI06byGy5h4eL1pBS3t_zxS1hbuM">Ebook</NavDropdown.Item>
                <NavDropdown.Item target="_blank" href="https://isethailand.org/tassa/admin/listasset.php?id=02&fbclid=IwAR3wAIPS63zsVv97s3WAAXLKNFm4Z0JBSBskXRuTDnnO7RLuCJObs7aPfwA">
                  ผลงานวิชาการ
                </NavDropdown.Item>
                <NavDropdown.Item target="_blank" href="https://isethailand.org/tassa/admin/listasset.php?id=03&fbclid=IwAR15vLvPiCK3o5NTVrFZzA_TqOiYh93Nhyo2YGJbcwMg3f6TgCNxWa9elhg">นวัตกรรมการเรียนรู้</NavDropdown.Item>
                <NavDropdown.Item target="_blank" href="https://isethailand.org/tassa/admin/listasset.php?id=04&fbclid=IwAR0cyznGauquPfQFKy18Rz0JYMcDKR79Ggjcv4xggnELP7W6LAfjRzVXnjs">
                  วีดีทัศน์
                </NavDropdown.Item>
              </NavDropdown>
              <Link to="/tassa2022/ติดต่อสถาบัน" className="nav-link">
                สถาบันเศรษกิจพอเพียง
              </Link>
              <a
                className="nav-link"
                target="_blank"
                rel="noopener noreferrer"
                href="http://isethailand.org/tassa/admin/admin_login/signin.php?fbclid=IwAR1GWE_KzXPh-4lmyEUubu5hGrhc0H60vDVyJBafdJR8LZBAGlnyrH-SABk"
              >
                เข้าสู่ระบบ
              </a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
