import React, { useState } from "react";
import "../App.css";
import logo from "../images/logo_yt.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineSearch } from "react-icons/ai";
import { MdKeyboardVoice } from "react-icons/md";
import { TbVideoPlus } from "react-icons/tb";
import { IoNotificationsOutline } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";
import { Button } from "bootstrap";

function Header({ open }) {
  const [searchterm, setsearchterm] = useState("");

  console.log(searchterm, "this is a serch term");
  // const navigate = useNavigate();
  const handlesubmit = (e) => {
    e.preventDefault();

    if (searchterm) {
      console.log("clicked");

      setsearchterm("");
    }
  };

  return (
    <div className="header ">
      <div className="header__left">
        <GiHamburgerMenu size={20} onClick={open} />
        <a href="/">
          <img className="header__logo" src={logo} alt="youtube"></img>
        </a>
      </div>

      <div className=" header__input">
        <input
          type="text"
          placeholder="search..."
          value={searchterm}
          onChange={(e) => setsearchterm(e.target.value)}
          onSubmit={handlesubmit}
        ></input>

        <a href={`/search/${searchterm}`}>
          <button>
            <AiOutlineSearch
              size={20}
              
              className="header__search"
            />
          </button>
        </a>

        <MdKeyboardVoice size={20} />
      </div>

      {/* <MdKeyboardVoice size={20} style={{right: "5"}}/> */}

      <div className="header__right">
        <TbVideoPlus size={26} className="header__icon" />
        <IoNotificationsOutline size={26} className="header__icon" />
        <RxAvatar size={26} className="header__icon" />
      </div>
    </div>
  );
}

export default Header;
