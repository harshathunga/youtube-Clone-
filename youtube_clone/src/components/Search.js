import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { options } from "./Data";
// import Sidebar from "./Sidebar";
import Sidebarrow from "./Sidebar_row";
import { AiOutlineHome } from "react-icons/ai";
import "../App.css";
import { RxAvatar } from "react-icons/rx";

// import { options} from "./Data"

function Search({ side }) {
  const [searchdata, setsearchdata] = useState([]);
  console.log(" i am a search data", { searchdata });
  const { searchterm } = useParams();

  useEffect(() => {
    const url = `https://youtube-v31.p.rapidapi.com/search?q=${searchterm}&part=snippet%2Cid&maxResults=50`;
    // https://youtube-v31.p.rapidapi.com/search?q=${catogory}&part=snippet%2Cid&maxResults=50 /channel?id=UCTwECeGqMZee77BjdoYtI2Q

    console.log(url);
    fetch(url, options)
      .then((res) => res.json())
      .then((json) => setsearchdata(json.items))
      .catch((err) => console.error("error:" + err));
  }, [searchterm]);

  return (
    <div className="sidenav">
      <div className="d-flex">
        <Sidebarrow pass={side} />

        <div className="side-menu">
          <a href="www.harshathunga">
            <AiOutlineHome size={20} />
            <span>
              <li>Home</li>
            </span>
          </a>

          <a href="/search">
            <svg
              viewBox="0 0 24 24"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
              class="style-scope yt-icon"
              style={{ display: "block", width: "100%," }}
            >
              <g
                height="24"
                viewBox="0 0 24 24"
                width="24"
                class="style-scope yt-icon"
              >
                <path
                  d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33c-.77-.32-1.2-.5-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86l-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"
                  class="style-scope yt-icon"
                ></path>
              </g>
            </svg>
            <span>shorts</span>
          </a>
        </div>

        <div
          style={side ? { paddingLeft: "141px" } : { paddingLeft: "0px" }}
          className="recommendations"
        >
          <div className="  main">
            {searchdata.map((e) => (
              <div className=" search_rec">
                <img src={e.snippet.thumbnails.medium.url} alt = "no image"></img>

                <div className="search__details">
                  <a href={`https://www.youtube.com/watch?v=${e.id.videoId}`}>
                    <h4> {e.snippet.title}</h4>
                    {/* <span>{dates } - {e.snippet.publishTime}</span> */}

                    <span className="search_title">
                      {" "}
                      <RxAvatar size={20} /> {e.snippet.channelTitle}
                    </span>

                    <p className="search_description">
                      {e.snippet.description}
                    </p>
                  </a>
                </div>
              </div>
            ))}

            {/* <div className="search_rec">
              <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"></img>

              <div className="search__details">
                <h6>Mistakes I made When I Started Programming</h6>

                <span className="search_title">channel title</span>

                <p className="search_description">
                  You can find awesome programming lessons here! Also, expect
                  programming tips and tricks that will take your coding skills
                  to the ...
                </p>
              </div>



            </div> */}
          </div>
        </div>
      </div>

      {/* <Link to ='hello'>fghfh</Link> */}
    </div>
  );
}

export default Search;
