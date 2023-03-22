import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
let newdata = []
let data = []
export default function Asset_all() {
    const id = useParams();
    const dataid = id.id;
    // console.log(dataid);


    const [showData, setshowData] = useState([]);
    useEffect(() => {
        getstart();
    }, []);

    async function getstart() {
        await getdataebook();
    }
    const getdataebook = async () => {
        await axios
            .get("https://ise-thailand.org/tassa/server/getEbook.php")
            .then((response) => {
                data = response.data;
                // console.log(data)
                searchFilter();
            }).catch((err) => {
                console.error(err);
            });
    }
    const searchFilter = (e) => {
        newdata = data.filter((data) => {
            return data.assettype_id === dataid;
        });
        for (let i = 0; i < newdata.length; i++) {
            setshowData([
                {
                    asset_id: newdata[i].asset_id,
                    assettype_id: newdata[i].assettype_id,
                    assettype_name: newdata[i].assettype_name,
                    asset_name: newdata[i].asset_name,
                    asset_detail: newdata[i].asset_detail,
                    researcher_id: newdata[i].researcher_id,
                    img_file: newdata[i].img_file,
                    pdf_file: newdata[i].pdf_file,
                    u_id: newdata[i].u_id,
                    url_ebook: newdata[i].url_ebook,
                    imgelogopdf: newdata[i].imgelogopdf,
                    imgelogoebook: newdata[i].imgelogoebook,
                },
            ]);
        }
        // console.log(newdata);
    };
    return (
        <>
            <div className="container">
                {showData.map((i, k) => (
                    
                        <h1 className="mt-3">{i.assettype_name}</h1>
                   
                ))}
                <div className="row my-5">
                    {newdata.map((item, key) => (
                        <>

                            <div class="col-lg-4 col-md-4 col-12 my-2" key={key}>
                                <div class="card ">
                                    <div class="card-header">
                                        <h5 id="1">
                                            <b id="1">{item.asset_name}</b>
                                        </h5>
                                    </div>
                                    <div className="card-body">
                                        <h1>
                                            <img src={item.img_file} alt="" width="100%" height="500px" />
                                            <br />
                                            <br />
                                            <div className="row justify-content-center">
                                                <div className="col-12 col-md-6 col-lg-6">
                                                    <div className="text-center">
                                                        <a href={item.pdf_file} target="_blank"><img src={item.imgelogopdf} alt="" width="50" height="50" /></a>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6 col-lg-6">
                                                    <div className="text-center">
                                                        <a href={item.url_ebook} target="_blank"><img src={item.imgelogoebook} alt="" width="50" height="50" /></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </>
    );
}
