import { Link } from "react-router-dom";
import "../../css/css.css";
import { Icon } from "@iconify/react";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";



let data = [];
export default function ResearchAndDev() {

  
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
