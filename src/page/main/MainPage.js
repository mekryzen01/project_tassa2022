import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Fade } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../css/css.css";
import { Doughnut } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Pie } from "react-chartjs-2";
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
);
let userdata01 = [];
let userdata02 = [];
let userdata03 = [];
export default function MainPage() {
    const [dataActivities, setdataActivities] = useState([]);
    const [datavideo, setDatavideo] = useState([]);
    const [donutuser, setDonutuser] = useState([]);
    const [chartOptions, setChartOptions] = useState({});
    const [barmonk, setBarmonk] = useState([]);
    const [res, setRes] = useState([]);
    const [meta, setMeta] = useState([]);
    const [royal, setRoyal] = useState([]);
    const [chartData, setChartData] = useState({
        datasets: [],
    });
    const [chartOptions01, setChartOptions01] = useState({});
    const [chartData01, setChartData01] = useState({
        datasets: [],
    });
    const [chartOptions02, setChartOptions02] = useState({});
    const [chartData02, setChartData02] = useState({
        datasets: [],
    });
    // console.log(dataActivities)
    // console.log(datavideo)

    useEffect(() => {
        getstart();
    }, []);

    async function getstart() {
        await getActivities();
        await getvideo();
        await get03();
        await getmeta();
        await getdataChatAsset();
        await getchart();
        await getdataChatroyal();
        await getchartroyal();
        await getdataChatres();
    }
    async function getActivities() {
        await axios
            .get("https://ise-thailand.org/tassa/server/getActivities.php")
            .then((response) => {
                setdataActivities(response.data);
            });
    }

    async function get03() {
        await axios
            .get("https://ise-thailand.org/tassa/server/chart03.php")
            .then((response) => setRoyal(response.data));
    }

    async function getmeta() {
        await axios
            .get("https://ise-thailand.org/tassa/server/getmeta.php")
            .then((response) => setMeta(response.data));
    }

    async function getvideo() {
        await axios
            .get("https://ise-thailand.org/tassa/server/getvideo.php")
            .then((res) => {
                setDatavideo(res.data);
            });
    }
    const getdataChatAsset = async () => {
        await axios
            .get("https://ise-thailand.org/tassa/server/chart01.php")
            .then((result) => {
                userdata01 = result.data;
                // console.log(userdata01)
                setDonutuser(userdata01);
            })
            .catch((err) => {
                console.error(err);
            });
    };
    const getchart = async () => {
        setChartData({
            labels: userdata01.map(
                (item) =>
                    item.assettype_name +
                    " " +
                    "จำนวน" +
                    " " +
                    item.countall +
                    " " +
                    "เรื่อง"
            ),
            datasets: [
                {
                    label: userdata01.map((item) => item.assettype_name),
                    data: userdata01.map((item) => item.countall),
                    borderColor: [
                        "rgba(255, 99, 132 )",
                        "rgba(54, 162, 235)",
                        "rgba(255, 206, 86)",
                    ],
                    backgroundColor: [
                        "rgba(255, 99, 132)",
                        "rgba(54, 162, 235)",
                        "rgba(255, 206, 86)",
                    ],
                },
            ],
        });
        setChartOptions({
            responsive: true,
            plugins: {
                legend: {
                    position: "top",
                },
            },
        });
    };
    const getdataChatroyal = async () => {
        await axios
            .get("https://ise-thailand.org/tassa/server/chart04.php")
            .then((result) => {
                userdata02 = result.data;
                setBarmonk(userdata02);
            })
            .catch((err) => {
                console.error(err);
            });
    };
    const getchartroyal = async () => {
        setChartData01({
            labels: userdata02.map((item) => item.type_name),
            datasets: [
                {
                    label: "",
                    data: userdata02.map((item) => item.countall),
                    borderColor: [
                        "rgba(255, 99, 132)",
                        "rgba(54, 162, 235)",
                        "rgba(255, 206, 86)",
                        "rgba(155, 206, 86)",
                    ],
                    backgroundColor: [
                        "rgba(255, 99, 132)",
                        "rgba(54, 162, 235)",
                        "rgba(255, 206, 86)",
                        "rgba(155, 206, 86)",
                    ],
                },
            ],
        });
        setChartOptions01({
            responsive: true,
            plugins: {
                legend: {
                    position: "top",
                },
                title: {
                    display: true,
                    text:
                        "โครงการภายใต้สถาบันเศรษฐกิจพอเพียง" +
                        " " +
                        "จำนวน" +
                        " " +
                        "26" +
                        " " +
                        "โครงการ",
                },
            },
        });
    };
    const getdataChatres = async () => {
        await axios
            .get("https://ise-thailand.org/tassa/server/chart02.php")
            .then((result) => {
                userdata03 = result.data;
                setRes(userdata03);
            })
            .catch((err) => {
                console.error(err);
            });
    };
    return (
        <>
            <div className="container">
                <div className="row my-1  ">
                    <div className="col-12 col-md-6 col-lg-6">
                        {datavideo.map((i, k) => (
                            <div className="row">
                                <iframe
                                    width="100%"
                                    height="330px"
                                    src={i.video_url}
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                    className="mt-3"></iframe>
                            </div>
                        ))}
                    </div>
                    <div className="col-12 col-md-6 col-lg-6">
                        <div className="row">
                            {dataActivities.map((item, index) => (
                                <div
                                    className="col-12 col-md-6 col-lg-6 text-center my-3"
                                    key={index}>
                                    <Link to={`/tassa2022/TypeActivities/${item.typeact_id}`}>
                                        <div
                                            className="card shadow bg-body"
                                            id="hover1"
                                            style={{ width: "100%" }}>
                                            <div className="card-body">
                                                <div className="row justify-content-center">
                                                    <img src={item.imagetype} alt="" width="100%" />
                                                </div>
                                                <div className="row justify-content-center">
                                                    <p>{item.typeact_name}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                            <div className="col-12 col-md-6 col-lg-6 text-center my-3">
                                <div className="card" style={{ width: "100%" }}>
                                    <div className="card-body">
                                        <Doughnut options={chartOptions} data={chartData} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 col-lg-6 mt-3">
                                <div
                                    className="card"
                                    style={{ width: "100%", height: "160px,auto" }}>
                                    <div className="card-body">
                                        <div className="text-center">
                                            <p>นักวิจัย</p>
                                            {userdata03.map((i, k) => (
                                                <h1>
                                                    <b>{i.countall}</b>
                                                </h1>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <br />
                                <br />
                                <div
                                    className="card"
                                    style={{ width: "100%", height: "160px,auto" }}>
                                    <div className="card-body">
                                        <div className="text-center">
                                            <p>โครงการพระราชดำริ</p>
                                            {royal.map((i) => (
                                                <h1>
                                                    <b>{i.countall}</b>
                                                </h1>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-12  mt-3">
                                <div className="card" style={{ width: "100%" }}>
                                    <div className="card-body">
                                        <div className="text-center">
                                            <b id="textheader">สื่อการเรียนรู้เสมือนจริง</b>
                                        </div>
                                        {meta.map((i, k) => (
                                            <div className="row">
                                                <div className="col-12 col-md-6 col-lg-12 mt-2" key={k}>
                                                    <button className="btn btn-">
                                                        <a href={i.video} target="_blank" id="black">
                                                            <h5>{i.meta_name}</h5>
                                                        </a>
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-12  newlink">
                                <div className="card" style={{ width: "100%" }}>
                                    <div className="card-body">
                                        <b id="textheader">
                                            การพัฒนาและยกระดับศักยภาพและความเข้มแข็งของชุมชนตามหลักปรัชญาเศรษฐกิจพอเพียง
                                            ในจังหวัดกาญจนบุรี
                                        </b>
                                        <p>
                                            <img
                                                src="http://www.ise-thailand.org/tassa/image/location.png"
                                                width={"4%"}
                                            />
                                            ชุมชนบ้านหนองปลวก ตําบลทุ่งทอง, ชุมชนบ้านหนองสะแก
                                            ตําบลวังศาลา อําเภอท่าม่วง จังหวัดกาญจนบุรี
                                        </p>
                                        <div className="row justify-content-center">
                                            <div className="col-12 col-md-4 col-lg-4">
                                                <div className="text-center">
                                                    <a
                                                        className="btn btn-success form-control"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        href="https://thai-cdm-sep.com/view/project/project-8">
                                                        รายละเอียดเพิ่มเติม
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-12  newlink">
                                <div className="card" style={{ width: "100%" }}>
                                    <div className="card-body">
                                        <b id="textheader">
                                            การพัฒนาชุมชนต้นแบบเกษตรอินทรีย์ตามแนวปรัชญาเศรษฐกิจพอเพียงของวิสาหกิจชุมชนอำเภอแก่งหางแมว
                                            จังหวัดจันทบุรี สู่การพัฒนาอย่างยั่งยืนตามแนวคิดของ BCG
                                        </b>
                                        <p>
                                            <img
                                                src="http://www.ise-thailand.org/tassa/image/location.png"
                                                width={"4%"}
                                            />
                                            ชุมชนแก่งหางแมว หมู่ 4 บ้านลานทอง ตำบลเขาวงกต
                                            อำเภอแก่งหางแมว จังหวัดจันทบุรี
                                        </p>
                                        <div className="row justify-content-center">
                                            <div className="col-12 col-md-4 col-lg-4">
                                                <div className="text-center">
                                                    <a
                                                        className="btn btn-success form-control"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        href="https://thai-cdm-sep.com/view/project/project-4">
                                                        รายละเอียดเพิ่มเติม
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-12  newlink">
                                <div className="card" style={{ width: "100%" }}>
                                    <div className="card-body">
                                        <b id="textheader">
                                            การพัฒนานวัตกรรมเพื่อเพิ่มผลผลิตพืชผักปลอดสารพิษสำหรับเมืองและชุมชนสู่ความยั่งยืนบนพื้นฐานเชียงรายเมืองเกษตรสีเขียวและอาหารปลอดภัย
                                            สำหรับผู้สูงอายุในภาคเหนือ
                                        </b>
                                        <p>
                                            <img
                                                src="http://www.ise-thailand.org/tassa/image/location.png"
                                                width={"4%"}
                                            />
                                            ชุมชนบ้านหัวฝาย ต.สันกลาง อ.พาน จ.เชียงราย
                                        </p>
                                        <div className="row justify-content-center">
                                            <div className="col-12 col-md-4 col-lg-4">
                                                <div className="text-center">
                                                    <a
                                                        className="btn btn-success form-control"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        href="https://thai-cdm-sep.com/view/project/project-9">
                                                        รายละเอียดเพิ่มเติม
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-12   newlink">
                                <div className="card" style={{ width: "100%" }}>
                                    <div className="card-body">
                                        <b id="textheader">
                                            โครงการพัฒนาเทคโนโลยีและนวัตกรรมสนับสนุนการท่องเที่ยวชุมชนเกาะยาวน้อย
                                            สู่ความยั่งยืนด้วยหลักเศรษฐกิจพอเพียง
                                        </b>
                                        <p>

                                            <img
                                                src="http://www.ise-thailand.org/tassa/image/location.png"
                                                width={"4%"}
                                            />
                                            บ้านน้ำจืด ตำบลเกาะยาวน้อย อำเภอเกาะยาว จังหวัดพังงา
                                        </p>
                                        <div className="row justify-content-center">
                                            <div className="col-12 col-md-4 col-lg-4">
                                                <div className="text-center">
                                                    <a
                                                        className="btn btn-success form-control"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        href="https://thai-cdm-sep.com/view/project/project-6">
                                                        รายละเอียดเพิ่มเติม
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-12   newlink">
                                <div className="card" style={{ width: "100%" }}>
                                    <div className="card-body">
                                        <b id="textheader">
                                            การส่งเสริมและพัฒนาผลิตภัณฑ์ผ้าย้อมครามและผ้าย้อมสีธรรมชาติโดยใช้แนวคิดในการออกแบบและรูปแบบธุรกิจอย่างยั่งยืนและเป็นมิตรกับสิ่งแวดล้อม
                                        </b>
                                        <p>

                                            <img
                                                src="http://www.ise-thailand.org/tassa/image/location.png"
                                                width={"4%"}
                                            />
                                            ชุมชนบ้านดอนกอย ตำบลสว่าง อำเภอพรรณานิคม จังหวัดสกลนคร
                                        </p>
                                        <div className="row justify-content-center">
                                            <div className="col-12 col-md-4 col-lg-4">
                                                <div className="text-center">
                                                    <a
                                                        className="btn btn-success form-control"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        href="https://thai-cdm-sep.com/view/project/project-3">
                                                        รายละเอียดเพิ่มเติม
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-12   newlink">
                                <div className="card" style={{ width: "100%" }}>
                                    <div className="card-body">
                                        <b id="textheader">
                                            การยกระดับคุณภาพชีวิตภายใต้ปรัชญาของเศรษฐกิจพอเพียงด้วยโมเดลสีเขียว ตำบลลาดใหญ่ อำเภอเมือง จังหวัดสมุทรสงคราม                                        </b>
                                        <p>

                                            <img
                                                src="http://www.ise-thailand.org/tassa/image/location.png"
                                                width={"4%"}
                                            />
                                            หมู่บ้านสุนัขหอน หมู่ 8 ตำบลลาดใหญ่ อำเภอเมือง จังหวัดสมุทรสงคราม
                                        </p>
                                        <div className="row justify-content-center">
                                            <div className="col-12 col-md-4 col-lg-4">
                                                <div className="text-center">
                                                    <a
                                                        className="btn btn-success form-control"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        href="https://thai-cdm-sep.com/view/project/project-7">
                                                        รายละเอียดเพิ่มเติม
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-12   newlink">
                                <div className="card" style={{ width: "100%" }}>
                                    <div className="card-body">
                                        <b id="textheader">
                                            การพัฒนารูปแบบการจัดการการท่องเที่ยวโดยชุมชนบนฐานเศรษฐกิจพอเพียงในพื้นที่ชุมชนตำบลต้นตาล จังหวัดสุพรรณบุรี สู่การพัฒนาอย่างยั่งยืนตามแนวคิดของ BCG                                      </b>
                                        <p>

                                            <img
                                                src="http://www.ise-thailand.org/tassa/image/location.png"
                                                width={"4%"}
                                            />
                                            ชุมชนต้นตาล ตำบลต้นตาล อำเภอสองพี่น้อง จังหวัดสุพรรณบุรี
                                        </p>
                                        <div className="row justify-content-center">
                                            <div className="col-12 col-md-4 col-lg-4">
                                                <div className="text-center">
                                                    <a
                                                        className="btn btn-success form-control"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        href="https://thai-cdm-sep.com/view/project/project-2">
                                                        รายละเอียดเพิ่มเติม
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-4 col-lg-12 mb-5">
                        <div className="card" style={{ width: "100%" }}>
                            <div className="card-body">
                                <Bar options={chartOptions01} data={chartData01} />
                            </div>
                        </div>
                    </div>
                </div>
                <br />
            </div>
        </>
    );
}
