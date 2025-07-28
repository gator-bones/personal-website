import React from "react";
import "./nav.css";

const Nav = () => {
  return (
    <div className="nav-box">
      <h2 className="nav-title">Navigation</h2>
      <ul>
        <li>
          <a href="/">
            <img src="./images/buttons/homeFish.png" alt="home" />
          </a>
        </li>
        <li>
          <a href="/about">
            <img src="./images/buttons/aboutFish.png" alt="about" />
          </a>
        </li>
        <li>
          <a href="/friends">
            <img src="./images/buttons/friendFish.png" alt="friends" />
          </a>
        </li>
        <li>
          <a href="/byf_dni">
            <img src="./images/buttons/interactFish.png" alt="byf_dni" />
          </a>
        </li>
        <li>
          <a href="/guestbook">
            <img src="./images/buttons/guestFish.png" alt="guestbook" />
          </a>
        </li>
        <li>
          <a href="/projects">
            <img src="./images/buttons/projectFish.png" alt="projects" />
          </a>
        </li>
        <li>
          <a href="/sitemap">
            <img src="./images/buttons/sitemapFish.png" alt="sitemap" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
