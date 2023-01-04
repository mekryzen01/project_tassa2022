import "../css/css.css";
export default function Home() {
  return (
    <>
      <div className="header">
        <img
         className="image"
          src="http://www.631463026crru.com/image/banner5.jpg"
          alt=""        
        />
      </div>

      <div className="container">
        <div className="row" style={{ "padding-top": "1000px" }}>
          <div className="col-6 ">
            <div
              className="justify-content-center"
              style={{ "padding-top": "200px" }}
            >
              <b className="Size ">ศาสตร์ของพระราชากับการพัฒนาที่ยั่งยืน</b>
              <p id="papar">
                “…ความพอเพียงในความคิดก็คือ แสดงความคิดของตัว ความเห็นของตัว
                และปล่อยให้อีกคนพูดบ้าง และมาพิจารณาว่าที่ เขาพูด กับที่เราพูด
                อันไหนพอเพียง อันไหนเข้าเรื่อง ถ้าไม่เข้าเรื่องก็แก้ไข
                เพราะถ้าพูดกันโดยที่ไม่รู้เรื่องกัน ก็จะกลายเป็นทะเลาะกัน…”
              </p>
            </div>
          </div>
          <div className="col-6">
            <img src="http://www.631463026crru.com/image/xx.png" alt="" width={"95%"} />
          </div>
        </div>
        <div className="row" id="rowwhite">
          <div className="col-6">
            <img src="http://www.631463026crru.com/image/111.jpg" alt="" width={"95%"} />
          </div>
          <div className="col-6">
            <div className="br" style={{ "padding-top": "100px" }}>
              <b className="Size ">สถาบันเศรษฐกิจพอเพียง</b>
              <p id="papar">
                กระทรวงการอุดมศึกษา วิทยาศาสตร์ วิจัย และนวัตกรรม (อว.)
                ได้จัดตั้งวิทยสถานสังคมศาสตร์
                มนุษยศาสตร์และศิลปกรรมศาสตร์แห่งประเทศไทย (ธัชชา)
                เพื่อส่งเสริมสนับสนุนการวิจัย และการพัฒนาบุคลากรด้านสังคมศาสตร์
                มนุษยศาสตร์ และศิลปกรรมศาสตร์
                ของประเทศไทยอย่างเป็นระบบและต่อเนื่อง
                อันจะเป็นประโยชน์ต่อการแก้ไขปัญหาและ การพัฒนาประเทศอย่างยั่งยืน
              </p>
            </div>
          </div>
        </div>
        <div className="row" style={{ paddingTop: "25px" }}>
          <div className="text-center">
            <b id="big">อินโฟกราฟิก</b>
          </div>
          <div className="col-6" style={{ paddingTop: "20px" }}>
            <a href="#" className="back">
              <div className="card">
                <img
                  src="./image/Project1.jpg"
                  alt=""
                  width="auto"
                  height="75%"
                  className="card-img-top"
                />
                <div className="card-body">
                  <h3>ฝนหลวง</h3>
                  <p>องค์ความรู้ด้านการพัฒนาตามแนวพระราชดำริ</p>
                </div>
              </div>
            </a>
          </div>
          <div className="col-6">
            <div className="row">
              <div className="col-6" style={{ paddingTop: "20px" }}>
                <a href="#">
                  <img src="http://www.631463026crru.com/image/info48.jpg" alt="" id="imageinfo" />
                </a>
              </div>
              <div className="col-6" style={{ paddingTop: "20px" }}>
                <a href="#" className="back">
                  <b id="big">
                    โครงการจักรยานพระราชทาน เพื่อการศึกษาของเยาวชนไทย
                  </b>
                </a>
                <p>โครงการอันเนื่องมาจากพระราชดำริ</p>
                <p>16/10/2565</p>
              </div>
            </div>
            <div className="row" style={{ paddingTop: "40px" }}>
              <div className="col-6">
                <a href="#">
                  <img src="http://www.631463026crru.com/image/info49.jpg" alt="" id="imageinfo" />
                </a>
              </div>
              <div className="col-6">
                <a href="#" className="back">
                  <b id="big">โครงการจิตอาสา “เราทำความ ดี ด้วยหัวใจ”</b>
                </a>
                <p>โครงการอันเนื่องมาจากพระราชดำริ</p>
                <p>16/10/2565</p>
              </div>
            </div>
            <div className="row" style={{ paddingTop: "40px" }}>
              <div className="col-6">
                <a href="#">
                  <img src="http://www.631463026crru.com/image/info50.jpg" alt="" id="imageinfo" />
                </a>
              </div>
              <div className="col-6">
                <a href="#" className="back">
                  <b id="big">โครงการโคกหนองนาโมเดล</b>
                </a>
                <p>โครงการอันเนื่องมาจากพระราชดำริ</p>
                <p>16/10/2565</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="row justify-content-center"
          style={{ paddingTop: "20px" }}
        >
          <div className="text-center ">
            <a href="/Infomore" className="shadow p-3 mb-5 bg-body rounded btn">
              เพิ่มเติม<i className="arrow right"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
