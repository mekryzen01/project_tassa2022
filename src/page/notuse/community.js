import { useState, useEffect } from "react";
import posts from "../json/datacommu";
import Posts from "../post/postcommu";
const postsPerPage = 3;
let arrayForHoldingPosts = [];
export default function Commu() {
  const [postsToShow, setPostsToShow] = useState([]);
  const [next, setNext] = useState(3);

  const loopWithSlice = (start, end) => {
    const slicedPosts = posts.slice(start, end);
    arrayForHoldingPosts = [...arrayForHoldingPosts, ...slicedPosts];
    setPostsToShow(arrayForHoldingPosts);
  };

  useEffect(() => {
    loopWithSlice([], postsPerPage);
  }, []);

  const handleShowMorePosts = () => {
    loopWithSlice(next, next + postsPerPage);
    setNext(next + postsPerPage);
  };
  return (
    <>
      <div className="row" >
    <div className="header" >
      <img src="http://www.631463026crru.com/image/commu.png" alt="" width="100%"/>
    </div>
    </div>
    <div className="row" style={{ "padding-top": "950px" }}>
          <div className="text-center">
            <b id="big">โครงการจากศาสตร์พระราชา</b>
            <p>
              งานด้านพัฒนาในพระบาทสมเด็จพระปรมินทรมหาภูมิพลอดุลยเดช บรมนาถบพิตร
            </p>
          </div>
        </div>
      <Posts postsToRender2={postsToShow} />

      <div className="container">
        <div className="content mb-3">
          <div className="text-center">
            <button onClick={handleShowMorePosts} className="btn btn-info">
              แสดงเพิ่มเติม
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
