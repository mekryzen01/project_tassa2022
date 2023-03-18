import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "../../css/css.css";
import { Fade } from "react-awesome-reveal";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import { SlideshowLightbox } from "lightbox.js-react";
import "lightbox.js-react/dist/index.css";
let data = [];
let newdata = [];
let gallery = [];
let newgallery = [];
export default function ProjectID() {
  const royal_id = useParams();
  let id = royal_id.royal_id;
  let rid = royal_id.royal_id;
  // console.log(id);

  const [showData, setShowData] = useState([]);
  // console.log(showData)
  const [showImage, setShowImage] = useState([]);
  // console.log(showImage)
  /*************************************************************** */
  // GET Image
  useEffect(() => {
    getgallery();
    getdataroyal();
  }, []);
  const getgallery = async () => {
    await axios
      .get(`https://ise-thailand.org/tassa/server/getgallery.php`)
      .then((response) => {
        gallery = response.data;
        // console.log(gallery);
        galleryFilter();
      })
      .catch((err) => {
        // console.error(err);
      });
  };
  const getdataroyal = async () => {
    await axios
      .get("https://ise-thailand.org/tassa/server/getdataroyal.php/")
      .then((response) => {
        data = response.data;
        // console.log(data);
        searchFilter();
      })
      .catch((err) => {
        // console.error(err);
      });
  };


  //   *********************Search Key Enter*************
  const searchFilter = (e) => {
    newdata = data.filter((data) => {
      return data.royal_id === id;
    });
    for (let i = 0; i < newdata.length; i++) {
      setShowData([
        {
          royal_id: newdata[i].royal_id,
          royal_name: newdata[i].royal_name,
          type_name: newdata[i].type_name,
          img_banner: newdata[i].img_banner,
          title_1: newdata[i].title_1,
          title_2: newdata[i].title_2,
          title_3: newdata[i].title_3,
          title_4: newdata[i].title_4,
          title_5: newdata[i].title_5,
          detail_1: newdata[i].detail_1,
          detail_2: newdata[i].detail_2,
          detail_3: newdata[i].detail_3,
          detail_4: newdata[i].detail_4,
          detail_5: newdata[i].detail_6,
          img_1: newdata[i].img_1,
          img_2: newdata[i].img_2,
          img_3: newdata[i].img_3,
          img_4: newdata[i].img_4,
          img_5: newdata[i].img_5,
          infographic: newdata[i].infographic,
          reference: newdata[i].reference,
        },
      ]);
    }
    // console.log(newdata);
  };

  const galleryFilter = (e) => {
    newgallery = gallery.filter((gallery) => {
      // console.log(gallery);
      return gallery.royal_id === rid;
    });
    for (let j = 0; j < newgallery.length; j++) {
      setShowImage([
        {
          royal_id: newgallery[j].royal_id,
          roworder: newgallery[j].roworder,
          royal_imgname: newgallery[j].royal_imgname,
        },
      ]);
    }
    // console.log(newgallery);
  };

  //Split Data //
  function cut(c) {
    return c.split("\n");
  }
  ////
  //Image Slider//
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  const slider = (
    <AutoplaySlider
      play={true}
      cancelOnInteraction={false} // should stop playing on user interaction
      interval={2500}
      width="75%"
    >
      {newdata.map((img, key) => (
        <div data-src={img.img_banner} />
      ))}
    </AutoplaySlider>
  );
  //////
  const gimage = (
    <>
      {newgallery.map((i, k) => (
        <div className="col-12 col-md-4 col-lg-4 my-2" key={k++}>
          <img
            src={i.royal_imgname}
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
      <div className="">{slider}</div>
      <div className="container ">
        {newdata.map((item, index) => (
          <>
            <br />
            <div className="text-center mt-4">
              <h1 className="mt-6">{item.royal_name}</h1>
            </div>
            <Fade direction={"left"}>
              <div className="row justify-content-center">
                <div className="col-12 col-md-6 col-lg-6 mt-2">
                  <img src={item.img_1} alt="" width="100%" />
                </div>
                <div className="col-12 col-md-6 col-lg-6 mt-2">
                  <p id="fonts2">
                    <b>{item.title_1}</b>
                  </p>
                  <p id="fonts2">
                    <p id="papar">{item.detail_1}</p>
                  </p>
                </div>
              </div>
            </Fade>
            <Fade direction={"right"}>
              <div className="row justify-content-center mt-2">
                <div className="col-12 col-md-6 col-lg-6 mt-2">
                  <p id="fonts2">{item.title_2}</p>
                  <p id="fonts2">{item.detail_2}</p>
                </div>
                <div className="col-12 col-md-6 col-lg-6 mt-2">
                  <img src={item.img_2} alt="" width="100%" />
                </div>
              </div>
            </Fade>
            {/*  */}
            <Fade direction={"left"}>
              <div className="row justify-content-center">
                <div className="col-12 col-md-6 col-lg-6 mt-2">
                  <img src={item.img_3} alt="" width="100%" />
                </div>
                <div className="col-12 col-md-6 col-lg-6 mt-2">
                  <p id="fonts2">
                    <b>{item.title_3}</b>
                  </p>
                  <p id="fonts2">
                    <p id="papar">{item.detail_3}</p>
                  </p>
                </div>
              </div>
            </Fade>
            <Fade direction={"right"}>
              <div className="row justify-content-center mt-2">
                <div className="col-12 col-md-6 col-lg-6 mt-2">
                  <p id="fonts2">{item.title_4}</p>
                  <p id="fonts2">{item.detail_4}</p>
                </div>
                <div className="col-12 col-md-6 col-lg-6 mt-2">
                  <img src={item.img_4} alt="" width="100%" />
                </div>
              </div>
            </Fade>
            <Fade direction={"down"}>
              <div className="row justify-content-center">
                <div className="col-12 col-md-6 col-lg-6 mt-2">
                  <img src={item["img_" + 5]} alt="" width="100%" />
                </div>
                <div className="col-12 col-md-6 col-lg-6 mt-2">
                  <p id="fonts2">
                    <b>{item.title_5}</b>
                  </p>
                  <p id="fonts2">
                    <p id="papar">
                      {cut(item.detail_5).map((va, key) => (
                        <>
                          <div className="">{va}</div>
                        </>
                      ))}
                    </p>
                  </p>
                </div>
              </div>
            </Fade>
            <div className="row my-5">
              <div className="text-center">
                <b style={{ fontSize: "20px" }}>อัลบั้ม : {item.royal_name}</b>
              </div>
              <SlideshowLightbox lightboxIdentifier="lightbox1" className="row">
                {gimage}
              </SlideshowLightbox>
            </div>
            <div className="row justify-content-center">
              <div className="col-6 col-md-4 col-lg-6">
                <div className="text-center">
                  <p style={{ fontSize: "20px" }}>
                    อินโฟกราฟิก :{item.royal_name}
                  </p>
                </div>
                <img src={item.infographic} alt="" width="100%" />
              </div>
            </div>
            <div className="row my-5 ">
              <div className="card ">
                <div className="card-body">
                  <div className="card-title text-center">
                    <h3>แหล่งอ้างอิง :</h3>{" "}
                  </div>
                  <p>
                    {cut(item.reference).map((va, key) => (
                      <>
                        <p>{va}</p>
                      </>
                    ))}
                  </p>
                </div>
              </div>
            </div>
          </>
        ))}
      <br className="my-5" />
      </div>
    </>
  );
}
