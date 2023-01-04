import { Link } from "react-router-dom";
import "../css/css.css";
import { Nav, Navbar, Container } from "react-bootstrap";
export default function nav() {
  return (
    <>
      <Navbar
        className="navbar"
        style={{ backgroundColor: "#2196F3" }}
        expand="lg"
        variant="dark"
        text="dark"
      >
        <Container className="navbar-container">
          <Navbar.Brand>
            <Link to="/tassa2022/">
              <img
                src="http://www.isethailand.org/tassa2022/image/logo/logo.png"
                alt=""
                width={"150px"}
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse collapseOnSelect>
            <Nav
              className="me-auto nav-links justify-content-end"
              style={{ width: "100%" }}
            >
              <Link to="/tassa2022/" className="nav-link">
                ศาสตร์ของพระราชา
              </Link>
              <Link to="/Research" className="nav-link">
                งานวิจัยและพัฒนา
              </Link>
              <Link to="/SEP" className="nav-link">
                สื่อเผยแพร่ งาน SEP
              </Link>
              <Link to="/News" className="nav-link">
                ข่าวสาร และ กิจกรรม
              </Link>
              <Link to="/Institute" className="nav-link">
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
