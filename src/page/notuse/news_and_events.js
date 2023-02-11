import { useState, useEffect } from "react";
import posts from "../json/dataeducation";
import Posts from "../post/postevenis";
const postsPerPage = 4;
let arrayForHoldingPosts = [];
export default function News() {
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
      <div className="text-center">
        <h1>ข่าวสารและกิจกรรม</h1>
      </div>
      <a href="#" id="back">
        <Posts Postevenis={postsToShow} />
      </a>
      <div className="container">
        <div className="content mb-3">
          <div className="text-center">
            <button onClick={handleShowMorePosts} className="btn btn-info">
              แสดงเพิ่มเติม
            </button>
          </div>
        </div>
        <div style={{ paddingTop: "40px" }}></div>
      </div>
    </>
  );
}
