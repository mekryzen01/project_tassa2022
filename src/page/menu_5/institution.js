import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import "../../css/css.css";
export default function institution() {
  return (
    <>
      <div className="container">
        <div className="card cardtest mt-5" style={{ paddingBottom: "100px" }}>
          <div className="card-body">
            <form action="" >
              <div className="text-center">
                <h3>ติดต่อสถาบัน</h3>
              </div>
              <div className="row justify-content-center">
                <div className="col-3">
                  <label htmlFor="">ชื่อ :</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="rounded-pill form-control"
                    placeholder="ชื่อ"
                  />
                </div>
                <div className="col-3">
                  <label htmlFor="">นามสกุล :</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="rounded-pill form-control"
                    placeholder="นามสกุล"
                  />
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-6">
                  <label htmlFor="">อีเมล์ :</label>
                  <input
                    type="email"
                    name=""
                    id=""
                    className="rounded-pill form-control"
                    placeholder="อีเมล์"
                  />
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-6">
                  <label htmlFor="">เบอร์โทรติดต่อ :</label>
                  <input
                    type="tel"
                    name=""
                    id=""
                    className="rounded-pill form-control"
                    placeholder="เบอร์โทรติดต่อ"
                  />
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-6">
                  <label htmlFor="">รายละเอียด :</label>
                  <FloatingLabel controlId="floatingTextarea2" label="">
                    <Form.Control
                      as="textarea"
                      placeholder="Leave a comment here"
                      style={{ height: "200px" }}
                    />
                  </FloatingLabel>
                </div>
              </div>
              <div
                className="row justify-content-center"
                style={{ paddingTop: "30px" }}
              >
                <div className="col-4">
                  <div className="text-center">
                    <input
                      type="submit"
                      className="btn btn-success"
                      value="ส่งข้อมูล"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div style={{ paddingTop: "30px" }}></div>
      </div>
    </>
  );
}
