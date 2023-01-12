import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Fade } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../css/css.css'

export default function Main() {
    const [dataActivities, setdataActivities] = useState([])

    console.log(dataActivities)

    useEffect(() => {
        getActivities()
    }, [])
    async function getActivities() {
        await axios.get("https://isethailand.org/tassa/server/getActivities.php").then((response) => {
            setdataActivities(response.data)
        })
    }

    return (
        <>
            <div className="container">
                <div className="row justify-content-center my-5">
                <div className="col-12 col-md-6 col-lg-6">
                        <iframe
                            width="600"
                            height="350"
                            src="https://www.youtube.com/embed/gJqEVuI5QHk"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            className="mt-3"
                        ></iframe>
                    </div>
                   {dataActivities.map((item, index) => (
                        <div className="col-12 col-md-3 col-lg-3 text-center my-3" key={index}>
                            <Link to={`/tassa2022/ประเภทกิจกรรม/${item.typeact_id}`}>
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
        </>
    );
}
