import { Link } from "react-router-dom";
import "../css/css.css";
import { Icon } from "@iconify/react";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "600px",
  height: "600px",
};

const center = {
  lat: 15.8700,
  lng: 100.9925,
};

let data = [];
export default function ResearchAndDev() {
  const [save, Setsave] = useState([]);
  console.log(save);
  useEffect(() => {
    callService();
  }, []);

  async function callService() {
    return new Promise((resolve, reject) => {
      axios
        .get(`https://isethailand.org/tassa/server/getdataroyal.php`)
        .then((response) => {
          data = response.data;
          console.log(response.data); //ตรวจสอบ
          random();
        })
        .catch((err) => {
          console.error(err); //ตรวจสอบ
        });
    });
  }

  async function random() {
    // let values = Array.from({ length: 70 }, (_, i) => i + 1);
    let listdata = [];
    for (let i = 0; i < 3; i++) {
      var item = data[Math.floor(Math.random() * data.length)];
      listdata.push(item);
    }
    Setsave(listdata);
  }
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyA_DeZlR7mlQPPcxK-l_GSh1hd5JoUIV0E",
  });

  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);
  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={5}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
  // return (
  //   <>
  //     <div className="header">
  //       <img
  //         src="http://www.631463026crru.com/image/bg.jpg"
  //         alt=""
  //         className="image"
  //       />
  //     </div>
  //     <div
  //       className="row justify-content-center"
  //       style={{ paddingTop: "50px" }}
  //     >
  //       <div className="text-center">
  //         <b id="Big2" style={{ paddingTop: "100px" }}>
  //           งานวิจัยและพัฒนา
  //         </b>
  //         <p id="fonts">
  //           รวบรวมข้อมูลหลากหลายสื่อ และข้อมูลองค์ความรู้
  //           เกี่ยวกับปรัชญาของเศรษฐกิจพอเพียงไว้ในที่เดียว
  //         </p>
  //       </div>
  //     </div>
  //     <div
  //       className="row justify-content-center"
  //       id="block"
  //       style={{ paddingTop: "250px", paddingBottom: "30px" }}
  //     >
  //       <div className="col-4" style={{ width: "18rem" }}>
  //         <Link id="back">
  //           <div className="card">
  //             <div className="text-center">
  //               <div className="card-img-center">
  //                 <Icon icon="akar-icons:book-open" width="200" height="200" />
  //               </div>
  //               <div className="card-title" id="fonts2">
  //                 โดยสถาบันเศรษฐกิจพอเพียง
  //               </div>
  //             </div>
  //           </div>
  //         </Link>
  //       </div>
  //       <div className="col-4" style={{ width: "18rem" }}>
  //         <Link id="back">
  //           <div className="card">
  //             <div className="text-center">
  //               <div className="card-img-center">
  //                 <Icon icon="cil:institution" width="200" height="200" />
  //               </div>
  //               <div className="card-title" id="fonts2">
  //                 โดยภาคีเครือข่าย
  //               </div>
  //             </div>
  //           </div>
  //         </Link>
  //       </div>
  //       <div className="col-4" style={{ width: "18rem" }}>
  //         <Link id="back">
  //           <div className="card">
  //             <div className="text-center">
  //               <div className="card-img-center">
  //                 <Icon icon="gis:search-country" width="200" height="200" />
  //               </div>
  //               <div className="card-title" id="fonts2">
  //                 โดยองค์กรในต่างประเทศ
  //               </div>
  //             </div>
  //           </div>
  //         </Link>
  //       </div>
  //     </div>
  //   </>
  // );
}
