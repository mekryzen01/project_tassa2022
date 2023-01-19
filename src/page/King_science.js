import { Link } from "react-router-dom";
import "../css/css.css";
import { useEffect } from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import { Fade } from "react-awesome-reveal";
import axios from "axios";
import { useState } from "react";
import Slider from "react-slick";
import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";

let data = [];
const filter_menu = [
  {
    id: "01",
    name: "โครงการพัฒนา ด้านแหล่งน้ำ",
    img: "https://isethailand.org/tassa/image/logo/water.png",
  },
  {
    id: "02",
    name: "โครงการพัฒนา ด้านการเกษตร",
    img: "https://isethailand.org/tassa/image/logo/farm.png",
  },
  {
    id: "03",
    name: "โครงการพัฒนา ด้านสิ่งแวดล้อม",
    img: "https://isethailand.org/tassa/image/logo/natrul.png",
  },
  {
    id: "04",
    name: "โครงการพัฒนา ด้านส่งเสริมอาชีพ",
    img: "https://isethailand.org/tassa/image/logo/creer.png",
  },
  {
    id: "05",
    name: "โครงการพัฒนา ด้านสาธารณสุข",
    img: "https://isethailand.org/tassa/image/logo/sata.png",
  },
  {
    id: "06",
    name: "โครงการพัฒนา ด้านคมนาคมและสื่อสาร",
    img: "https://isethailand.org/tassa/image/logo/commu.png",
  },
  {
    id: "07",
    name: "โครงการพัฒนา สวัสดิการสังคม การศึกษา",
    img: "https://isethailand.org/tassa/image/logo/ecadu.png",
  },
  {
    id: "08",
    name: "โครงการพัฒนา แบบบูรณาการ และ อื่นๆ",
    img: "https://isethailand.org/tassa/image/logo/bruu.png",
  },
  {
    id: "00",
    name: "ไม่ระบุ",
    img: "https://isethailand.org/tassa/image/logo/dot.png",
  },
  {
    id: "09",
    name: "โครงการภายใต้สถาบันเศรษฐกิจพอเพียง",
    img: "https://isethailand.org/tassa/image/logo/logo.png",
  },
];

const renderListOfdata = (data) => {
  return filter_menu.map((data) => (
    <>
      <div className="col-12 col-md-4 col-lg-4 my-3">
        <Link to={`/tassa2022/TypeProject/${data.id}`}>
          <div className="card shadow bg-body" id="hover1" style={{height: "200px"}}>
            <div className="card-body">
              <div className="row justify-content-center">
                <div className="col-7 mt-2">
                  <img src={data.img} alt="" width="75%" />
                </div>
                <div className="col-5 mt-3">
                  <p id="centertext">{data.name}</p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  ));
};

export default function Kingscience() {
  const [save, Setsave] = useState([]);
  const [map, setMap] = useState(null);
  // console.log(save);
  useEffect(() => {
    // console.log(filter_menu);
    callService();
  }, []);

  const containerStyle = {
    width: "100%",
    height: "999px",
  };

  const center = { lat: 15.87, lng: 100.9925 };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyA_DeZlR7mlQPPcxK-l_GSh1hd5JoUIV0E",
  });

  const onLoad = (marker) => {
    // console.log("marker: ", marker);
  };
  const settings = {
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

 
  async function callService() {
    return new Promise((resolve, reject) => {
      axios
        .get(`https://isethailand.org/tassa/server/getdataroyal.php`)
        .then((response) => {
          data = response.data;
          // console.log(data);
          setMap(data); //ตรวจสอบ
          random();
        })
        .catch((err) => {
          // console.error(err); //ตรวจสอบ
        });
    });
  }

  async function random() {
    // let values = Array.from({ length: 70 }, (_, i) => i + 1);
    let listdata = [];
    for (let i = 0; i < 10; i++) {
      var item = data[Math.floor(Math.random() * data.length)];
      listdata.push(item);
    }
    Setsave(listdata);
  }
  //*********************Search Key Enter************* */
  // const searchFilter = (e) => {
  //   let textsearch = document.getElementById("search1").value;
  //   console.log(textsearch); //ตรวจสอบ
  //   let newdata = data.filter((data) => {
  //     return data.royal_name == textsearch;
  //   }); //กรองข้อมูล
  //   console.log(newdata); //ตรวจสอบ
  //   let id = newdata[0].royal_id;
  //   console.log(id); //ตรวจสอบ
  //   navigate("/Project/" + id);
  // };
  //*************Image Slide*************************** */
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  const slider = (
    <AutoplaySlider
      play={true}
      cancelOnInteraction={false} // should stop playing on user interaction
      interval={2500}
      width="75%"
    >
      <div data-src="http://isethailand.org/tassa/image/banner/banner5.jpg" />
      <div data-src="http://isethailand.org/tassa/image/banner/bannerRoyal.png" />
      <div data-src="http://isethailand.org/tassa/image/banner/1.jpg" />
    </AutoplaySlider>
  );
  //************************************** */

  function onError() {
    <img
      src="https://isethailand.org/tassa2022/image/logo/imgerror.png"
      alt=""
      srcset=""
    />;
  }
  return (
    <>
      {slider}
      <div className="container">
        <div className="row  mt-5">
          <div className="text-center">
            <Fade delay={100}>
              <h1>โครงการจากศาสตร์พระราชา</h1>
              <h4>
                งานด้านการพัฒนาในพระบาทสมเด็จพระบรมชนกาธิเบศร
                มหาภูมิพลอดุลยเดชมหาราช บรมนาถบพิตร
              </h4>
            </Fade>
          </div>
        </div>
        <Fade direction="left">
          <div className="row mt-5">{renderListOfdata()}</div>
        </Fade>
        <div className="line"></div>
        <div className="text-center">
          <h1>ตัวอย่าง โครงการพระราชดำริ</h1>
        </div>
        <Slider {...settings}>
          {save.map((i, index) => {
            return (
              <div className="col-12 col-md-4  mx-5" key={index++}>
                <Link to={`/tassa2022/Project/${i.royal_id}`}>
                  <div
                    className="card shadow bg-body"
                    id="hover1"
                    style={{ width: 360 }}
                  >
                    <div className="card-image-top">
                      <img
                        className="top-radius"
                        src={i.image_path}
                        onError={onError()}
                        alt=""
                        width="360px"
                        height="350px"
                      />
                    </div>
                    <div className="card-body">
                      <div className="card-title">
                        <br />
                        <p id="centertext01">{i.royal_name}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </Slider>

        <div className="row justify-conent-center my-5">
          <div className="text-center">
            <h4>สถานที่ตั้งโครงการพระราชดำริ</h4>
            {isLoaded ? (
              <>
                <div className="row justify-content-center mb-5">
                  <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={5}
                    onLoad={onLoad}
                  >
                    {data.map((item) => (
                      <MarkerF
                        key={item.royal_id}
                        label={item.royal_name}
                        onLoad={onLoad}
                        position={{
                          lat: parseFloat(item.latitude),
                          lng: parseFloat(item.longitude),
                        }}
                      />
                    ))}
                  </GoogleMap>
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
