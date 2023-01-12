import { Link, useParams } from "react-router-dom"
import axios from "axios"
import { useState, useEffect } from "react"
import { Fade } from "react-awesome-reveal";
let data = []
let newdata = []
export default function Typeactivities() {
    const typeact_id = useParams()
    let id = typeact_id.typeact_id
    const [dataA, setDataa] = useState([])
    console.log(dataA)
    useEffect(() => {
        getdataActivities()
    },[])

    async function getdataActivities() {
        await axios.get("https://isethailand.org/tassa/server/getActivities.php").then((response) => {
            data = response.data
            searchFilter()
            console.log(newdata)
        })
    }
    const searchFilter = (e) => {
        newdata = data.filter((data) => {
            return data.typeact_id === id;
        });
        for (let i = 0; i < newdata.length; i++) {
            setDataa([
                {
                    docno: newdata[i].docno,
                    docdate: newdata[i].docdate,
                    title: newdata[i].title,
                    detail: newdata[i].detail,
                    activity_date: newdata[i].activity_date,
                    img_file: newdata[i].img_file,
                    u_id: newdata[i].u_id,
                    typeact_id: newdata[i].typeact_id,
                    pdf_file: newdata[i].pdf_file,
                    typeact_name: newdata[i].typeact_name,
                },
            ]);
        }
        console.log(newdata);
    };
    return (
        <>
            <div className="container">
                <div className="row justift-content-center mx-5 mt-3">
                    {newdata.map((item, index) => {
                        return (
                            <>   <Fade>
                                <div className="col-12 col-md-4 col-lg-4" key={index}>
                                    <div className="card">
                                        <img src={item.img_file} alt="" width="100%" />
                                        <div className="card-body">
                                            <b style={{ fontSize: "20px" }}>{item.title}</b>
                                            <br />
                                            <hr />
                                            <Link to={`/tassa2022/ประเภทกิจกรรม/${item.typeact_name}/${item.docno}`}>
                                                <div className="text-center">
                                                    <h5>อ่านเพิ่มเติม</h5>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </Fade></>
                        )
                    })}
                </div>
            </div>
        </>
    )
}