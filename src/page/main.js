import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Fade } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../css/css.css'

export default function Main() {
    const [dataActivities, setdataActivities] = useState([])
    const [datavideo, setDatavideo] = useState([])

    // console.log(dataActivities)
    console.log(datavideo)

    useEffect(() => {
        getActivities()
        getvideo()
    }, [])
    async function getActivities() {
        await axios.get("https://isethailand.org/tassa/server/getActivities.php").then((response) => {
            setdataActivities(response.data)
        })
    }

    async function getvideo() {
        await axios.get("https://isethailand.org/tassa/server/getvideo.php").then((res) => {
            setDatavideo(res.data)
        })
    }

    return (
        <>
            <div className="container">
                <div className="row my-3 mb-5 pb-5">
                    <div className="col-12 col-md-6 col-lg-6">
                        {datavideo.map((i, k) => (
                            <div className="row"><iframe
                                width="100%"
                                height="350"
                                src={i.video_url}
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                className="mt-3"
                            ></iframe></div>
                        ))}
                    </div>
                    <div className="col-12 col-md-6 col-lg-6">
                        <div className="row">
                            {dataActivities.map((item, index) => (
                                <div className="col-12 col-md-6 col-lg-6 text-center my-3" key={index}>
                                    <Link to={`/tassa2022/TypeActivities/${item.typeact_id}`}>
                                        <div className="card shadow bg-body" id="hover1">
                                            <div className="card-body">
                                                <div className="row justify-content-center">
                                                    <img src={item.imagetype} alt="" />
                                                </div>
                                                <div className="row justify-content-center">
                                                    <h3>{item.typeact_name}</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
