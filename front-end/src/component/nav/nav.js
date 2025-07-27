import React from "react";
import "./nav.css";

const Nav = () => {
  return (
    <div className="nav-box">
      <h2 className="nav-text">NAVIGATION</h2>
      <ul>
        <li>
          <a href="/">
            <img src="./images/buttons/home_navBtn.png" alt="home" />
          </a>
        </li>
        <li><a href="/about">About GATOR</a></li>
        <li><a href="/friends">Friends</a></li>
        <li><a href="/byf_dni">Interactions</a></li>
        <li><a href="/guestbook">Guestbook</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/sitemap">Sitemap</a></li>
      </ul>
    </div>
  );
};

export default Nav;
