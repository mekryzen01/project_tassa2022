import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/css.css";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
let data = [];
const filter_menu = [
  {
    id: "01",
    name: "โครงการพัฒนา ด้านแหล่งน้ำ",
  },
  {
    id: "02",
    name: "โครงการพัฒนา ด้านการเกษตร",
  },
  {
    id: "03",
    name: "โครงการพัฒนา ด้านสิ่งแวดล้อม",
  },
  {
    id: "04",
    name: "โครงการพัฒนา ด้านส่งเสริมอาชีพ",
  },
  {
    id: "05",
    name: "โครงการพัฒนา ด้านสาธารณสุข",
  },
  {
    id: "06",
    name: "โครงการพัฒนา ด้านคมนาคมและสื่อสาร",
  },
  {
    id: "07",
    name: "โครงการพัฒนา สวัสดิการสังคม การศึกษา",
  },
  {
    id: "08",
    name: "โครงการพัฒนา แบบบูรณาการ และ อื่นๆ",
  },
  {
    id: "00",
    name: "ไม่ระบุ",
  },
  {
    id: "09",
    name: "โครงการภายใต้สถาบันเศรษฐกิจพอเพียง",
  },
];

const filter_asset = [
  {
    assetid: "01",
    name: "EBOOK"
  },
  {
    assetid: "02",
    name: "ผลงานวิชาการ"
  },
  {
    assetid: "03",
    name: "สื่อนวัตกรรมการเรียนรู้"
  },
  {
    assetid: "04",
    name: "วีดีทัศน์"
  },
]
export default function Header() {
  const [show, setShow] = useState(false);
  // const [show03, setShow03] = useState(false);
  // const [show02, setShow02] = useState(false);
  const [show01, setShow01] = useState(false);
  const showDropdown = (e) => {
    setShow(!show);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };

  const showDropdown01 = (e) => {
    setShow01(!show01);
  };
  const hideDropdown01 = (e) => {
    setShow01(false);
  };

  // const showDropdown02 = (e) => {
  //   setShow02(!show02);
  // };
  // const hideDropdown02 = (e) => {
  //   setShow02(false);
  // };

  // const showDropdown03 = (e) => {
  //   setShow03(!show03);
  // };
  // const hideDropdown03 = (e) => {
  //   setShow03(false);
  // };
  return (
    <>
      <Navbar
        className="navbar"
        style={{ backgroundColor: "#2196F3" }}
        expand="lg"
        text="dark"
      >
        <Container className="navbar-container">
        <Navbar.Brand className="mmss">
          <Link to="/tassa2022/">
            <img
              src="http://www.isethailand.org/tassa/image/logo/logonew.png"
              alt=""
              width={"200px"}
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
            className="me-auto nav-links justify-content-end"
            style={{ width: "100%" }}
          >
            <Link to="/tassa2022/" className="nav-link">หน้าหลัก</Link>
            <NavDropdown
              title="ศาสตร์ของพระราชา"
              id="basic-nav-dropdown"
              show={show01}
              onMouseEnter={showDropdown01}
              onMouseLeave={hideDropdown01}
            >
              {filter_menu.map((item, key) => (
                <NavDropdown.Item key={key}>
                  <Link to={`/tassa2022/TypeProject/${item.id}`} id="black">
                    {item.name}
                  </Link>
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            {/* <NavDropdown
              title="งานวิจัยและพัฒนา"
              id="basic-nav-dropdown"
              show={show02}
              onMouseEnter={showDropdown02}
              onMouseLeave={hideDropdown02}
            >
              <NavDropdown.Item>โดยสถาบันเศรษฐกิจพอเพียง</NavDropdown.Item>
              <NavDropdown.Item>โดยภาคีเครือข่าย</NavDropdown.Item>
              <NavDropdown.Item>โดยองค์กรในต่างประเทศ</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="สาระการพัฒนา"
              id="basic-nav-dropdown"
              show={show03}
              onMouseEnter={showDropdown03}
              onMouseLeave={hideDropdown03}
            >
              <NavDropdown.Item>Voices of SD</NavDropdown.Item>
              <NavDropdown.Item>Gurus Speak</NavDropdown.Item>
            </NavDropdown> */}
            {/* <a
                href="https://isethailand.org/tassa/admin/admin_page/list_project.php"
                target="_blank"
                className="nav-link"
              >
                
              </a> */}
            <NavDropdown
              title="งานภายใต้สถาบันเศรษฐกิจพอเพียง"
              id="basic-nav-dropdown"
              show={show}
              onMouseEnter={showDropdown}
              onMouseLeave={hideDropdown}
            >
              <NavDropdown.Item
                target="_blank"
                href="https://isethailand.org/tassa/admin/admin_page/list_project.php"                >
                โครงการ/งานวิจัย ภายใต้สถาบันเศรษฐกิจพอเพียง
              </NavDropdown.Item>
              {filter_asset.map((item, key) => (
                <NavDropdown.Item key={key}>
                  <Link to={`/tassa2022/Asset_all/${item.assetid}`} id="black">
                    {item.name}
                  </Link>
                </NavDropdown.Item>
              ))}
              {/* <NavDropdown.Item href="/tassa2022/Ebook">
                  Ebook
                </NavDropdown.Item>
                <NavDropdown.Item
                  target="_blank"
                  href="https://isethailand.org/tassa/admin/listasset.php?id=02&fbclid=IwAR3wAIPS63zsVv97s3WAAXLKNFm4Z0JBSBskXRuTDnnO7RLuCJObs7aPfwA"
                >
                  ผลงานวิชาการ
                </NavDropdown.Item>
                <NavDropdown.Item
                  target="_blank"
                  href="https://isethailand.org/tassa/admin/listasset.php?id=03&fbclid=IwAR15vLvPiCK3o5NTVrFZzA_TqOiYh93Nhyo2YGJbcwMg3f6TgCNxWa9elhg"
                >
                  นวัตกรรมการเรียนรู้
                </NavDropdown.Item>
                <NavDropdown.Item
                  target="_blank"
                  href="https://isethailand.org/tassa/admin/listasset.php?id=04&fbclid=IwAR0cyznGauquPfQFKy18Rz0JYMcDKR79Ggjcv4xggnELP7W6LAfjRzVXnjs"
                >
                  วีดีทัศน์
                </NavDropdown.Item> */}
            </NavDropdown>
            <Link to="/tassa2022/Institute" className="nav-link">
              สถาบันเศรษฐกิจพอเพียง
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
