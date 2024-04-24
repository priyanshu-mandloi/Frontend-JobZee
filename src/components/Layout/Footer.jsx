/* eslint-disable no-unused-vars */

import { FaLinkedin, FaQuora, FaYoutube } from "react-icons/fa";
import React, { useContext } from "react";

import { Context } from "../../main";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { TiHeart } from "react-icons/ti";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>
        &copy; All Rights Reserved By PM
        <TiHeart style={{ color: "red", fontSize: "24px", margin: "-3px" }} />
      </div>
      <div>
        <Link
          to={
            "https://twitter.com/i/flow/login?redirect_after_login=%2FPriyanshuM75755"
          }
          target="_blank"
        >
          <FaXTwitter />
        </Link>
        <Link to={"https://www.youtube.com"} target="_blank">
          <FaYoutube />
        </Link>
        <Link
          to={"https://www.linkedin.com/in/priyanshu-mandloi/"}
          target="_blank"
        >
          <FaLinkedin />
        </Link>
        <Link
          to={"https://www.quora.com/profile/Priyanshu-Mandloi-6"}
          target="_blank"
        >
          <FaQuora />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
