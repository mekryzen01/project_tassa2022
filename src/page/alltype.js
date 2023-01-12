import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../css/css.css";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
let data = [];
let newdata = [];

export default function Alltype() {
  ///Params
  const id = useParams();
  console.log(id);
  const dataid = id.id;
  console.log(dataid);
  ////State///////
  const [showData, setShowData] = useState([]);

  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  //Get API ROYAL
  useEffect(() => {
    const getdataroyal = async () => {
      axios
        .get(`https://isethailand.org/tassa/server/getdataroyal.php`)
        .then((response) => {
          data = response.data;
          searchFilter();
        })
        .catch((err) => {
          console.error(err);
        });
    };
    getdataroyal();
  }, []);

  //*********************Search Filter************* */
  const searchFilter = (e) => {
    newdata = data.filter((data) => {
      return data.type_id === dataid;
    });
    for (let i = 0; i < newdata.length; i++) {
      setShowData([
        {
          royal_id: newdata[i].royal_id,
          royal_name: newdata[i].royal_name,
          type_name: newdata[i].type_name,
          title_1: newdata[i].title_1,
          title_2: newdata[i].title_2,
          title_3: newdata[i].title_3,
          title_4: newdata[i].title_4,
          title_5: newdata[i].title_5,
          img_1: newdata[i].img_1,
          img_2: newdata[i].img_2,
          img_3: newdata[i].img_3,
          img_4: newdata[i].img_4,
          img_5: newdata[i].img_5,
        },
      ]);
    }
    console.log(newdata);
  };
  const showcontent = () => {
    return (
      <>
        {searchInput.length > 1
          ? filteredResults.map((item, index) => {
              return (
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 mt-3" key={index++}>
                  <Link to={`/tassa2022/โครงการที่/${item.royal_id}`}>
                    <div className="card shadow bg-body" id="hover1">
                      <div className="card-image-top">
                        <img
                          className="top-radius"
                          src={item.img_1}
                          alt=""
                          width="100%"
                          height="300px"
                        />
                      </div>
                      <div className="card-body">
                        <div className="card-title">
                          <br />
                          <p id="centertext01">{item.royal_name}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })
          : newdata.map((item2, index) => {
              return (
                // <Fade direction="up">
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 mt-3" key={index++}>
                  <Link to={`/tassa2022/โครงการที่/${item2.royal_id}`}>
                    <div className="card shadow bg-body" id="hover1">
                      <div className="card-image-top">
                        <img
                          className="top-radius"
                          src={item2.img_1}
                          
                          onerror={ () => this.src ='https://isethailand.org/tassa2022/image/logo/imgerror.png'}
                          alt=""
                          width="100%"
                          height="300px"
                        />
                      </div>
                      <div className="card-body">
                        <div className="card-title">
                          <br />
                          <p id="centertext01">{item2.royal_name}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                // </Fade>
              );
            })}
      </>
    );
  };

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    console.log(searchValue);
    if (searchInput !== "") {
      const filteredData = newdata.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
      console.log(filteredData);
    } else {
      setFilteredResults(newdata);
      console.log(newdata);
    }
  };

  return (
    <>
      <div className="container">
        <div className="row">
          {showData.map((i, k) => (
            <div className="text-center mt-5" key={(k = 1)}>
              <h1>{i.type_name}</h1>
            </div>
          ))}
        </div>
        <div className="row justify-content-center">
          <div className="col-6 ">
            <input
              className="form-control"
              placeholder="Search..."
              onChange={(e) => searchItems(e.target.value)}
            />
          </div>
        </div>
        <Fade direction="right">
          <div className="row ">{showcontent()}</div>
        </Fade>
        <br />
        <hr />
      </div>
    </>
  );
}
