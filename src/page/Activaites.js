import { useParams } from "react-router-dom";
import axios from "axios"
import { useState, useEffect } from "react"
import '../css/css.css';
import { SlideshowLightbox } from "lightbox.js-react";
import { Fade } from "react-awesome-reveal";
let data = []
let newdata = []
let newgallery = []
let gallery = []
export default function Activity() {
    let { typeact_name, docno } = useParams();
    console.log(typeact_name, docno)
    const [dataA, setDataa] = useState([])
    const [showImage, setShowImage] = useState([]);
    console.log(showImage)
    useEffect(() => {
        getdataActivities()
        getgallery()
    }, [])

    async function getdataActivities() {
        await axios.get("https://isethailand.org/tassa/server/getActivities.php").then((response) => {
            data = response.data
            searchFilter()
            console.log(newdata)
        })
    }
    const getgallery = async () => {
        await axios
            .get(`https://isethailand.org/tassa/server/getimageactivities.php`)
            .then((response) => {
                gallery = response.data;
                console.log(gallery);
                galleryFilter();
            })
            .catch((err) => {
                console.error(err);
            });
    };
    const searchFilter = (e) => {
        newdata = data.filter((data) => {
            return data.docno === docno;
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
    const galleryFilter = (e) => {
        newgallery = gallery.filter((gallery) => {
            console.log(gallery);
            return gallery.docno === docno;
        });
        for (let j = 0; j < newgallery.length; j++) {
            setShowImage([
                {
                    docno: newgallery[j].docno,
                    roworder: newgallery[j].roworder,
                    act_imgname: newgallery[j].act_imgname,
                },
            ]);
        }
        console.log(newgallery);
    };

    function cut(c) {
        return c.split("\n");
    }

    const gimage = (
        <>
            {newgallery.map((i, k) => (
                <div className="col-12 col-md-4 col-lg-4 my-2" key={k++}>
                    <img
                        src={i.act_imgname}
                        style={{ height: 220 }}
                        width="100%"
                        data-lightboxjs="lightbox1"
                        quality="100%"
                    />
                </div>
            ))}
        </>
    );
    return (
        <>
            <div className="container">
                {newdata.map((item, index) => {
                    return (

                        <><Fade duration="2000"><div className="text-center my-5">
                            <h3>{item.title}</h3>
                        </div></Fade>
                        <Fade direction="left"><div className="row justify-content-center">
                                <div className="col-12 col-md-6 col-lg-6">
                                    <img src={item.img_file} alt="" width="100%" />
                                </div>
                            </div></Fade>
                            <Fade direction="right"><div className="row my-5">
                                {cut(item.detail).map((va, key) => (
                                    <>
                                        <p id="papar"> {va}</p>
                                    </>
                                ))}
                            </div></Fade>
                            
                            <hr />
                            <div className="row my-5">
                                <div className="text-center">
                                    <b style={{ fontSize: "20px" }}>อัลบั้ม : {item.royal_name}</b>
                                </div>
                                <SlideshowLightbox lightboxIdentifier="lightbox1" className="row">
                                    {gimage}
                                </SlideshowLightbox>
                            </div>
                            <br />
                        </>
                    )
                })}


            </div>
        </>
    )

}