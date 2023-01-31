import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import Sidebarrow from "./Sidebar_row";
import { AiOutlineHome } from "react-icons/ai";
import "../App.css";

import { options} from "./Data"

function Sidebar({ side }) {
  const [data, setdata] = useState([]);

  console.log(data, "this is side"); 
  const [catogory, setcatory] = useState("surfing");
 

 



  useEffect(() => {
    const url = `https://youtube-v31.p.rapidapi.com/search?q=${catogory}&part=snippet%2Cid&maxResults=50`;
    // https://youtube-v31.p.rapidapi.com/search?q=${catogory}&part=snippet%2Cid&maxResults=50
    fetch(url, options)
      .then((res) => res.json())
      .then((json) => setdata(json.items))
      .catch((err) => console.error("error:" + err));
  }, [catogory]);



  return (
    <div className="sidenav">
      <div className="d-flex">
        <Sidebarrow pass={side} setcatory={setcatory} />

        <div className="side-menu">
          <a href="">
            <AiOutlineHome size={20} />
            <span>
              <li>Home</li>
            </span>
          </a>

          <a href="">
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
          {data.map((e, index) => (
            <div index={e.id.videoId} className="cards">
              <a href={`https://www.youtube.com/watch?v=${e.id.videoId}`}>
                <img
                  style={{ width: "300px", height: "200" }}
                  src={e.snippet.thumbnails.medium.url}
                  title={e.snippet.title}
                ></img>
              </a>

              {/* <span>{e.snippet.title}</span> */}

              <div style={{ top: "0", width: "300px" }} className="">
                <div className="col">
                  <span className="v_title">{e.snippet.title}</span>
                  <span className="c_title">{e.snippet.channelTitle}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <Link to ='hello'>fghfh</Link> */}
    </div>
  );
}

export default Sidebar;
